import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';


function Avis() {
    
    const [avisList,setAvisList]=useState([]);

    const [formData,setFormData] = useState({
        nom:"",
        prenom:"",
        email:"",
        avis:""
    });

    const [message,setMessage]=useState(null);

    useEffect(()=>{
      fetchAvis();
    },[]);

    const fetchAvis = async () =>{
      try{
        const reponse= await axios.get('http://localhost:5000/avis');

        setAvisList(reponse.data);
      }catch(error){
        console.log("erreur",error);
      }
    };

 return (
    <section id="avis" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6"> 
        
        {/* Titre Principal */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Avis des Visiteurs
        </h2>

        {/* CONTENEUR PRINCIPAL FLEX/GRID */}
        {/* Sur mobile (sm), une seule colonne. À partir de l'écran moyen (md), deux colonnes. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* COLONNE GAUCHE : FORMULAIRE */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              Laissez votre message
            </h3>

            <div className="bg-white shadow-xl rounded-xl p-6">
              <form className="space-y-4">
                
                {/* Ligne : Prénom / Nom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Prénom</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                      placeholder="Ton prénom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Nom</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                      placeholder="Ton nom"
                      required
                    />
                  </div>
                </div>

                {/* Ligne : Email */}
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                    placeholder="exemple@email.com"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Ton email ne sera pas publié.</p>
                </div>

                {/* Ligne : Message */}
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Votre message</label>
                  <textarea 
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
                    placeholder="Qu'avez-vous pensé de mon portfolio ?"
                    required
                  ></textarea>
                </div>

                {/* Bouton d'envoi */}
                <button 
                  type="button" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors duration-300 shadow-md"
                >
                  Envoyer mon avis
                </button>
              </form>
            </div>
          </div>

          {/* COLONNE DROITE : LISTE DES AVIS */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              Ce qu'ils disent de moi...
            </h3>

            <div className="space-y-6">
              
              {/* Avis Factice 1 */}
              <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-blue-500">
                <p className="text-gray-700 italic mb-3">
                  "Hariz a fait un travail remarquable pour mon site. Très à l'écoute et super compétent ! Je recommande vivement !"
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-2 mt-2">
                  <span className="font-semibold text-gray-800">Sophie Dupont</span>
                  <span>14 décembre 2024</span>
                </div>
              </div>

              {/* Avis Factice 2 */}
              <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-blue-500">
                <p className="text-gray-700 italic mb-3">
                  "Portfolio très clair et design très soigné. Impressionne ! Un vrai pro."
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-2 mt-2">
                  <span className="font-semibold text-gray-800">Ahmed Benali</span>
                  <span>10 décembre 2024</span>
                </div>
              </div>
              
            </div>
            {/* Zone pour les pagination/dots futurs si besoin */}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Avis;