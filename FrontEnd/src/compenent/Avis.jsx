import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';

function Avis() {
  const [avis,setavis]= useState({
  nom:'',
  prenom:'',
  email:'',
  texte:''
});

function Handlenewavis(e){
  e.preventDefault(); 
  axios.post('http://localhost:5500/avis_post',avis)
}

function HandleForm (e) {
  const newavis={...avis};
  newavis[e.target.id]=e.target.value;
  setavis(newavis);
}

  return(
    <form onSubmit={(e)=>Handlenewavis(e)}>
      <input id="nom"  type='text' onChange={(e)=>HandleForm(e)} />
      <input id="prenom" type='text' onChange={(e)=>HandleForm(e)} />
      <input id="email" type='text' onChange={(e)=>HandleForm(e)} />
      <input id="texte" type='text' onChange={(e)=>HandleForm(e)} />
      <button type='submit'>envoyer</button>
      
    </form>
    
  );
}

export default Avis;