import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import validator from 'validator';
import { ClipLoader } from 'react-spinners';

const url = import.meta.env.VITE_API_URL;

export default function Avis() {
  const [loading, setLoading] = useState(true); // Commencer en chargement
  const [emailerror, setemailerror] = useState(null);
  const [emailerrormessage, setemailerrormessage] = useState('');
  const [listavis, setlistavis] = useState([]);
  // Initialisation cohérente avec ton affichage (commentaire au lieu de texte)
  const [avis, setavis] = useState({ nom: '', prenom: '', email: '', commentaire: '' });

  // Utilisation de useCallback pour stabiliser la fonction
  const fetchAvis = useCallback(async () => {
    try {
      const response = await axios.get(`${url}/avis_get`);
      setlistavis(Array.isArray(response.data) ? response.data : []);
    } catch (e) {
      console.error("Erreur lors de l'import des avis", e);
      setemailerrormessage('Erreur lors de l’importation des avis');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAvis();
  }, [fetchAvis]);

  async function Handlenewavis(e) {
    e.preventDefault();
    
    // Empêcher l'envoi si l'email est erroné
    if (emailerror === false) {
      alert("Veuillez entrer un email valide avant d'envoyer.");
      return;
    }

    try {
      setLoading(true);
      await axios.post(`${url}/avis_post`, avis);
      
      alert('Merci pour votre avis !');
      setavis({ nom: '', prenom: '', email: '', commentaire: '' }); 
      setemailerror(null);
      
      // Rafraîchir la liste
      await fetchAvis();
    } catch (err) {
      alert("Erreur lors de l'envoi");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function handleFormChange(e) {
    const { id, value } = e.target;

    if (id === 'email') {
      if (validator.isEmail(value)) {
        setemailerror(true);
        setemailerrormessage('');
      } else {
        setemailerror(false);
        setemailerrormessage('Format d’email invalide');
      }
    }

    setavis(prev => ({ ...prev, [id]: value }));
  }

  // Spinner de chargement centralisé
  if (loading && listavis.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <ClipLoader color="#2563eb" size={50} />
      </div>
    );
  }

  return (
    <section id="Avis" className="py-24 px-6 bg-blue-600">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-white tracking-tight">
          Votre Avis
          <span className="block w-20 h-1.5 bg-white mx-auto mt-4 rounded-full opacity-80"></span>
        </h2>

        {/* --- Formulaire --- */}
        <div className="max-w-2xl mx-auto mb-20">
          <form 
            onSubmit={Handlenewavis} 
            className="bg-white p-8 rounded-2xl shadow-2xl space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Laissez votre témoignage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                id="nom" type='text' placeholder="Nom" required
                value={avis.nom} onChange={handleFormChange} 
                className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
              <input 
                id="prenom" type='text' placeholder="Prénom" required
                value={avis.prenom} onChange={handleFormChange} 
                className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div className="text-left">
              <input 
                id="email" type='email' required placeholder="Votre Email" 
                value={avis.email} onChange={handleFormChange} 
                className={`w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 outline-none transition-all ${emailerror === false ? 'border-red-500 ring-red-200' : 'border-gray-200 focus:ring-blue-500'}`}
              />
              {emailerrormessage && <p className="text-red-500 text-xs mt-1 ml-1">{emailerrormessage}</p>}
            </div>
            <textarea 
              id="commentaire" placeholder="Votre message..." required
              value={avis.commentaire} onChange={handleFormChange} 
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none min-h-[120px]"
            />
            <button 
              type='submit' 
              disabled={loading}
              className="w-full py-3 bg-blue-800 text-white font-bold rounded-lg shadow-md hover:bg-blue-900 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
            >
              {loading ? 'Envoi en cours...' : "Envoyer l'avis"}
            </button>
          </form>
        </div>

        {/* --- Liste des Avis --- */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listavis.length > 0 ? listavis.map((item) => (
            <li 
              key={item.avis_id || Math.random()} 
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-bold text-xl uppercase">
                    {item.prenom?.[0] || '?'}
                  </div>
                  <div className="ml-3 text-left">
                    <strong className="block text-gray-800 text-lg capitalize leading-tight">
                      {item.nom} {item.prenom}
                    </strong>
                    <span className="text-sm text-gray-400">Avis vérifié</span>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed text-left">
                  "{item.commentaire}"
                </p>
              </div>
            </li>
          )) : (
            <p className="text-white text-center col-span-full opacity-80">Aucun avis pour le moment. Soyez le premier !</p>
          )}
        </ul>
      </div>
    </section>
  );
}