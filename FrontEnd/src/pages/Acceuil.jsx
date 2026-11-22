import { useEffect } from 'react';
import useInterface from '../hooks/useInterface';
import useRaccourcis from '../hooks/useRaccourcis';
import Navbar from '../components/layout/Navbar';
import MenuPause from '../components/layout/MenuPause';
import BarreRaccourcis from '../components/ui/BarreRaccourcis';
import NotificationSucces from '../components/ui/NotificationSucces';
import Hero from '../features/accueil/Hero';
import Projets from '../features/projets/Projets';
import Parcours from '../features/parcours/Parcours';
import Inventaire from '../features/competences/Inventaire';
import Galerie from '../features/galerie/Galerie';
import Avis from '../features/avis/Avis';
import Contact from '../features/contact/Contact';

export default function Acceuil() {
  const { modePhoto } = useInterface();
  useRaccourcis();

  // En mode photo, on reste sur la photo : retour en haut et défilement bloqué
  useEffect(() => {
    if (!modePhoto) return;
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [modePhoto]);

  return (
    <>
      {!modePhoto && (
        <>
          <Navbar />
          <BarreRaccourcis />
        </>
      )}
      <NotificationSucces />
      <MenuPause />

      <main>
        <Hero />
        <Projets />
        <Parcours />
        <Inventaire />
        <Galerie />
        <Avis />
        <Contact />
      </main>
    </>
  );
}
