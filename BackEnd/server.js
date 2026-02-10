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

app.post('/avis_post', async (req,res)=>{
  const sql=('INSERT INTO avis (nom,prenom,email,commentaire) VALUES(?,?,?,?)');
  try{
    await db.execute(sql,[req.body.nom, req.body.prenom, req.body.email, req.body.texte]);
    console.log('insert');
    return res.status(200).json({message:'insertion réussi'});
  }catch(err){
    console.log(req.body.nom)
    console.log('erreur lors de l insertion');
    console.log(err);
    return res.status(500).json({message:'erreur lors de insertion'});;

  }});

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