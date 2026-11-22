import { useEffect, useState } from 'react';
import validator from 'validator';
import { Send } from 'lucide-react';
import { supabase } from '../../services/supabase';

const avisVide = { nom: '', prenom: '', email: '', commentaire: '' };

const champ = "w-full p-3 bg-sapin text-craie border-2 border-mousse placeholder:text-gris-vert outline-none focus:border-menthe";

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
      setRetourEnvoi({ ok: false, message: "L'avis n'a pas pu être envoyé. Réessayez dans quelques minutes." });
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
    <section id="avis" className="px-4 sm:px-10 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2">

        {/* formulaire */}
        <div>
          <h2 className="titre-section">Avis</h2>
          <p className="mt-3 mb-8 text-lg text-gris-vert">Vous avez travaillé avec moi ou visité ce site ? Laissez un mot.</p>

          <form onSubmit={Handlenewavis} className="flex flex-col gap-4" noValidate={false}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5 font-hud text-sm text-brume">
                Nom
                <input id="nom" type="text" required maxLength={50} value={avis.nom} onChange={handleFormChange} className={champ} />
              </label>
              <label className="flex flex-col gap-1.5 font-hud text-sm text-brume">
                Prénom
                <input id="prenom" type="text" required maxLength={50} value={avis.prenom} onChange={handleFormChange} className={champ} />
              </label>
            </div>
            <label className="flex flex-col gap-1.5 font-hud text-sm text-brume">
              Email (jamais affiché)
              <input
                id="email" type="email" required maxLength={100} placeholder="prenom.nom@exemple.fr"
                value={avis.email} onChange={handleFormChange}
                aria-invalid={emailInvalide}
                className={`${champ} ${emailInvalide ? 'border-red-400' : ''}`}
              />
              {emailInvalide && <span className="text-red-300">Entrez un email valide, par exemple prenom.nom@exemple.fr.</span>}
            </label>
            <label className="flex flex-col gap-1.5 font-hud text-sm text-brume">
              Votre avis
              <textarea id="commentaire" required maxLength={1000} value={avis.commentaire} onChange={handleFormChange} className={`${champ} min-h-32`} />
            </label>

            <button
              type="submit"
              disabled={envoiEnCours}
              className="self-start flex items-center gap-2 bg-menthe text-sapin px-5 py-3.5 font-semibold hover:bg-craie disabled:opacity-60"
            >
              <Send className="w-5 h-5" aria-hidden="true" />
              {envoiEnCours ? 'Envoi en cours…' : "Envoyer l'avis"}
            </button>
            {retourEnvoi && (
              <p role="status" className={`font-medium ${retourEnvoi.ok ? 'text-lichen' : 'text-red-300'}`}>
                {retourEnvoi.message}
              </p>
            )}
          </form>
        </div>

        {/* liste des avis validés */}
        <div className="flex flex-col gap-4 lg:pt-20">
          {chargementListe && <p className="text-gris-vert">Chargement des avis…</p>}
          {!chargementListe && erreurListe && <p className="text-gris-vert">{erreurListe}</p>}
          {!chargementListe && !erreurListe && listavis.length === 0 && (
            <p className="text-gris-vert">Aucun avis pour le moment. Soyez le premier à en laisser un.</p>
          )}
          {listavis.map((item) => (
            <figure key={item.id} className="panneau-hud p-5 border-l-4 border-lichen">
              <blockquote className="font-titre text-lg text-craie leading-relaxed">« {item.commentaire} »</blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-menthe capitalize">{item.prenom} {item.nom}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
