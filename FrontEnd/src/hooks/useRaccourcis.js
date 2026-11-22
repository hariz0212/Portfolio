import { useEffect } from "react";
import { LIENS, SECTIONS } from "../constants/constant";
import useInterface from "./useInterface";

// Sections réellement présentes dans la page (la galerie peut être absente)
function sectionsVisibles() {
    return SECTIONS.map(({ id }) => document.getElementById(id)).filter(Boolean);
}

// Va à la section suivante (+1) ou précédente (-1) par rapport à la position actuelle
function changerDeSection(sens) {
    const sections = sectionsVisibles();
    const position = window.scrollY + 100;
    const actuelle = sections.findLastIndex((section) => section.offsetTop <= position);
    const cible = sens > 0 ? sections[actuelle + 1] : sections[actuelle - 1];

    if (cible) cible.scrollIntoView();
    else if (sens < 0) window.scrollTo({ top: 0 });
}

function telechargerCv() {
    const lien = document.createElement('a');
    lien.href = LIENS.cv;
    lien.download = '';
    lien.click();
}

// Raccourcis clavier façon jeu vidéo : ← → sections, Échap menu, C CV, P mode photo
export default function useRaccourcis() {
    const { setMenuOuvert, modePhoto, setModePhoto } = useInterface();

    useEffect(() => {
        function handleKeyDown(e) {
            // On ne vole pas les touches pendant la saisie dans un formulaire
            const cible = e.target.tagName;
            if (['INPUT', 'TEXTAREA', 'SELECT'].includes(cible)) return;
            if (e.ctrlKey || e.metaKey || e.altKey) return;

            if (e.key === 'Escape') {
                if (modePhoto) setModePhoto(false);
                else setMenuOuvert((ouvert) => !ouvert);
                return;
            }

            if (modePhoto && e.key.toLowerCase() !== 'p') return;

            switch (e.key.toLowerCase()) {
                case 'arrowright':
                    e.preventDefault();
                    changerDeSection(1);
                    break;
                case 'arrowleft':
                    e.preventDefault();
                    changerDeSection(-1);
                    break;
                case 'c':
                    telechargerCv();
                    break;
                case 'p':
                    setMenuOuvert(false);
                    setModePhoto(!modePhoto);
                    break;
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [modePhoto, setModePhoto, setMenuOuvert]);
}
