const express = require('express');
const mysql =require('mysql2/promise');
const cors =require('cors');

const app= express();
app.use(express.json());
app.use(cors());

const db =mysql.createPool(
  {
    host:'localhost',
    user:'root',
    password:'1234',
    database:'portfolio_db',
    connectionLimit:10,
    waitForConnections:true
  }
);

app.get('/',(req,res)=>{

  return res.json('from backend side');

});

app.post('/avis_post', async (req,res)=>{
  const sql=('INSERT INTO avis (nom,prenom,email,avis) VALUES(?,?,?,?)');
  try{
    await db.execute(sql,[req.body.nom, req.body.prenom, req.body.email, req.body.texte]);
    console.log('insert');
    return res.status(200);
  }catch(err){
    console.log(req.body.nom)
    console.log('erreur lors de l insertion');
    console.log(err);
    return res.status(500);

  }});

app.get('/avis_get', async (req,res)=>{
  const sql= ('SELECT * FROM avis');
  try{
    const [rows]=await db.execute(sql);
    return res.json(rows);
    
  }catch(err){
    return res
  }

});

app.listen(5500,()=>{
  console.log('port 5500');
})