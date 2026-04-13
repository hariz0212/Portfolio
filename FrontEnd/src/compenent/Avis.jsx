import React, { useEffect, useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import  { ClipLoader } from'react-spinners';
const url = import.meta.env.VITE_API_URL;


export default function Avis() {
  // Déclaration des états pour la validation de l'email, la liste des avis et les données du formulaire
  const[loading,setLoading]=useState(false)
  const [emailerror,setemailerror]= useState(null);
  const [emailerrormessage,setemailerrormessage]= useState('');
  const [listavis, setlistavis] = useState([]);
  const [avis, setavis] = useState({ nom: '', prenom: '', email: '', texte: '' });

  // Récupération des avis au chargement initial du composant
  useEffect(() => {
    try {
      setLoading(true);
      Handleavislist();
      
    } catch (error) {
      setemailerrormessage('erreur lors de l importation des avis');
    }finally{
      setLoading(false)

    }
  }, []);

  // Fonction pour récupérer la liste des avis depuis le serveur
  async function Handleavislist() {
    try {
      const response = await axios.get(`${url}/avis_get`);
      setlistavis(response.data);
    } catch (e) {
      console.log("Erreur lors de l'import des avis", e);
    }
  }

  // Fonction pour envoyer un nouvel avis via une requête POST
  async function Handlenewavis(e) {
    e.preventDefault();
    try {
      // Attente de la réponse du serveur avant de continuer
      await axios.post(`${url}/avis_post`, avis);
      
      // Mise à jour de la liste affichée
      Handleavislist();
      
      alert('Insertion réussie');
      
      // Remise à zéro du formulaire et des erreurs
      setavis({ nom: '', prenom: '', email: '', texte: '' }); 
      setemailerror('');
      
    } catch (err) {
      alert("Erreur lors de l'envoi");
      console.error(err);
    }
  }

  // Fonction de validation du format de l'email avec la bibliothèque validator
  function checkmail(e){
    const { value } = e.target;
    if  (validator.isEmail(value))
      {
        setemailerror(true);
        setemailerrormessage('');
      }
    else{
      setemailerror(false);
      setemailerrormessage('Entrez un mail valide');
    }
  }

  // Fonction de gestion des changements dans les champs du formulaire
  function HandleForm(e) {
    // Déclenche la vérification si le champ modifié est l'email
    if(e.target.id === 'email'){
      checkmail(e);
    }
    const newavis = { ...avis };
    newavis[e.target.id] = e.target.value;
    setavis(newavis);
  }

  if(loading){return <ClipLoader/>}
  return (
    <section id="Avis" className="py-24 px-6 bg-blue-600">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white tracking-tight">
          Votre Avis
          <span className="block w-20 h-1.5 bg-white mx-auto mt-4 rounded-full opacity-80"></span>
        </h2>

        {/* --- Formulaire --- */}
        <div className="max-w-2xl mx-auto mb-20">
          <form 
            onSubmit={(e) => Handlenewavis(e)} 
            className="bg-white p-8 rounded-2xl shadow-2xl space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Laissez votre témoignage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                id="nom" type='text' placeholder="Nom" value={avis.nom}
                onChange={(e) => HandleForm(e)} 
                className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-800"
              />
              <input 
                id="prenom" type='text' placeholder="Prénom" value={avis.prenom}
                onChange={(e) => HandleForm(e)} 
                className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-800"
              />
            </div>
            <input 
              id="email" type='email' required placeholder="Votre Email" value={avis.email}
              onChange={(e) => HandleForm(e)} 
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-800"
            />
            {/* Affichage du message d'erreur si l'email est invalide */}
            <span className="text-red-500 text-sm">{emailerrormessage}</span>
            <textarea 
              id="texte" placeholder="Votre message..." value={avis.texte}
              onChange={(e) => HandleForm(e)} 
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all min-h-[120px] text-gray-800"
            />
            <button 
              type='submit' 
              className="w-full py-3 bg-blue-800 text-white font-bold rounded-lg shadow-md hover:bg-blue-900 hover:scale-[1.02] transition-all cursor-pointer"
            >
              Envoyer l'avis
            </button>
          </form>
        </div>

        {/* --- Liste des Avis --- */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(listavis) ? listavis.map(avis => (
            <li 
              key={avis.avis_id} 
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-bold text-xl">
                    {avis.prenom ? avis.prenom.charAt(0).toUpperCase() : '?'}
                  </div>
                  <div className="ml-3 text-left">
                    <strong className="block text-gray-800 text-lg capitalize leading-tight">
                      {avis.nom} {avis.prenom}
                    </strong>
                    <span className="text-sm text-gray-400">Avis vérifié</span>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed text-left">
                  "{avis.commentaire}"
                </p>
              </div>
            </li>
          )):<p className="text-white text-center">Aucun avis à afficher pour le moment.</p>
        }
        </ul>
      </div>
    </section>
  );
}