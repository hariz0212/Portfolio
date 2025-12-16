import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import 'dotenv/config'; // Charge les variables du fichier .env

// --- Configuration de la Base de Données MySQL ---
const dbConfig = {
  // Les valeurs sont lues depuis le fichier .env
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

const PORT = process.env.PORT ||500;

let pool;

async function connectDB() {
  try {
    pool = mysql.createPool(dbConfig);
    console.log("Connexion au pool MySQL réussie !");
    
    // Test de connexion : si 1 + 1 = 2, la connexion est bonne
    const [rows] = await pool.query('SELECT 1 + 1 AS solution');
    console.log('Résultat du test DB:', rows[0].solution);

  } catch (error) {
    console.error("Erreur de connexion à MySQL:", error.message);
    // Arrêter le programme si la base de données n'est pas accessible
    process.exit(1); 
  }
};

connectDB();

const app= express();

app.use(cors());

app.use(express.json());

app.get("/",(req, res) => {
  res.send("Backend fonctionne et est connecté à MySQL !");
});


app.get("/avis", async (req,res)=>{
    try{
        const query="SELECT nom,prenom,avis FROM avis ORDER BY date_soumission DESC";

        const [AvisList]= await pool.query(query);

        res.json(AvisList);
    }
    catch(error){
        console.error(error);
    }
});


app.post("/avis" , async (req,res)=>{
    try{
        const { nom , prenom , email,avis}= req.body;

        const [checkMail] = await pool.query("SELECT email FROM avis WHERE email=?",[email]) 
        if (checkMail>0){
            return res.status(401).json({message:"mail deja existant"})
        }

        const queryInsert ="INSERT INTO avis (nom,prenom,email,avis) VALUES(?,?,?,?)";

        const [result] = pool.query(queryInsert,[nom,prenom,email,avis]);

        res.status(201).json({id:result.insertId,nom,prenom,email,avis});

    }catch(error){
        console.error(error);
        return res.status(409).json({message:"erreur lord de l'ajout d'un avis"})
    }

});

app.listen(PORT,()=>console.log('Serveur ouvert sur le https:${PORT}'));
