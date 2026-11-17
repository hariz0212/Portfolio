import { useEffect, useState } from 'react';
import validator from 'validator';
import { ClipLoader } from 'react-spinners';
import { supabase } from '../supabase';

const avisVide = { nom: '', prenom: '', email: '', commentaire: '' };

export default function Avis() {
  const [listavis, setlistavis] = useState([]);
  const [chargementListe, setChargementListe] = useState(true);
  const [erreurListe, setErreurListe] = useState('');

  const [avis, setavis] = useState(avisVide);
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [emailInvalide, setEmailInvalide] = useState(false);
  const [retourEnvoi, setRetourEnvoi] = useState(null);

  useEffect(() => {
    async function chargerAvis() {
      const { data, error } = await supabase
        .from('avis')
        .select('id, nom, prenom, commentaire')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Erreur lors de l'import des avis", error);
        setErreurListe('Impossible de charger les avis pour le moment.');
      } else {
        setlistavis(data);
      }
      setChargementListe(false);
    }
    chargerAvis();
  }, []);

  async function Handlenewavis(e) {
    e.preventDefault();
    if (emailInvalide) return;

    setEnvoiEnCours(true);
    setRetourEnvoi(null);
    const { error } = await supabase.from('avis').insert(avis);
    setEnvoiEnCours(false);

    if (error) {
      console.error(error);
      setRetourEnvoi({ ok: false, message: "Erreur lors de l'envoi, réessayez plus tard." });
      return;
    }
    setavis(avisVide);
    setRetourEnvoi({ ok: true, message: 'Merci pour votre avis ! Il apparaîtra après validation.' });
  }

  function handleFormChange(e) {
    const { id, value } = e.target;
    if (id === 'email') setEmailInvalide(!validator.isEmail(value));
    setavis(prev => ({ ...prev, [id]: value }));
  }

  return (
    <div className="py-24 px-6 bg-blue-600">
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
                id="nom" type='text' placeholder="Nom" required maxLength={50}
                value={avis.nom} onChange={handleFormChange}
                className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
              <input
                id="prenom" type='text' placeholder="Prénom" required maxLength={50}
                value={avis.prenom} onChange={handleFormChange}
                className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div className="text-left">
              <input
                id="email" type='email' required placeholder="Votre Email" maxLength={100}
                value={avis.email} onChange={handleFormChange}
                className={`w-full p-3 bg-gray-50 border rounded-lg focus:ring-2 outline-none transition-all ${emailInvalide ? 'border-red-500 ring-red-200' : 'border-gray-200 focus:ring-blue-500'}`}
              />
              {emailInvalide && <p className="text-red-500 text-xs mt-1 ml-1">Format d’email invalide</p>}
              <p className="text-gray-400 text-xs mt-1 ml-1">Votre email ne sera pas affiché publiquement.</p>
            </div>
            <textarea
              id="commentaire" placeholder="Votre message..." required maxLength={1000}
              value={avis.commentaire} onChange={handleFormChange}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none min-h-[120px]"
            />
            <button
              type='submit'
              disabled={envoiEnCours || emailInvalide}
              className="w-full py-3 bg-blue-800 text-white font-bold rounded-lg shadow-md hover:bg-blue-900 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
            >
              {envoiEnCours ? 'Envoi en cours...' : "Envoyer l'avis"}
            </button>
            {retourEnvoi && (
              <p className={`text-sm font-medium ${retourEnvoi.ok ? 'text-green-600' : 'text-red-500'}`}>
                {retourEnvoi.message}
              </p>
            )}
          </form>
        </div>

        {/* --- Liste des Avis --- */}
        {chargementListe ? (
          <div className="flex justify-center">
            <ClipLoader color="#ffffff" size={50} />
          </div>
        ) : erreurListe ? (
          <p className="text-white text-center opacity-80">{erreurListe}</p>
        ) : listavis.length === 0 ? (
          <p className="text-white text-center opacity-80">Aucun avis pour le moment. Soyez le premier !</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listavis.map((item) => (
              <li
                key={item.id}
                className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-bold text-xl uppercase">
                      {item.prenom[0]}
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
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
