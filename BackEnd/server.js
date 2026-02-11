const express = require('express');
const mysql =require('mysql2/promise');
const cors =require('cors');
require('dotenv').config();

const app= express();
app.use(express.json());
app.use(cors());

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  connectionLimit: 10,
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/',(req,res)=>{

  return res.json('from backend side');

});

app.post('/avis_post', async (req, res) => {
  // 1. On prépare la requête proprement (pas besoin de parenthèses autour du string)
  const sql = 'INSERT INTO avis (nom, prenom, email, commentaire) VALUES (?, ?, ?, ?)';

  try {
    // 2. On récupère les données (Destructuring pour plus de clarté)
    const { nom, prenom, email, texte } = req.body;

    // 3. Exécution
    await db.execute(sql, [nom, prenom, email, texte]);
    
    // Log succès
    console.log(`✅ Nouvel avis inséré pour : ${email}`);
    
    // 4. Code 201 (Created) est plus juste que 200 pour une insertion
    return res.status(201).json({ message: 'Insertion réussie !' });

  } catch (err) {
    // Log erreur structuré
    console.error('❌ Erreur insertion :', err.code);
    console.error('   Détail :', err.sqlMessage);

    // 5. Gestion spécifique du doublon (Code 409 = Conflict)
    if (err.code === 'ER_DUP_ENTRY' || err.errno === 1062) {
      return res.status(409).json({ 
        message: "Cet email est déjà enregistré." 
      });
    }

    // 6. Erreur générique (Code 500 = Server Error)
    return res.status(500).json({ 
      message: "Une erreur technique est survenue lors de l'enregistrement." 
    });
  }
});

app.get('/avis_get', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM avis');
    res.json(rows);
  } catch (err) {
    // CE LOG EST CRUCIAL : il va apparaître dans Render
    console.error("ERREUR SQL DÉTAILLÉE :", err); 
    
    // On renvoie un tableau VIDE au lieu d'un objet message
    // Comme ça, le .map du frontend ne plantera plus !
    res.status(500).json([]); 
  }
});

app.listen(5500,()=>{
  console.log('port 5500');
})