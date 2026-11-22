import { Download } from 'lucide-react';
import { LIENS, PHOTOS, PROJETS, EXPERIENCES, COMPETENCES, SECTIONS } from '../../constants/constant';

// Nombre affiché à droite de chaque entrée du menu
const COMPTEURS = {
    projets: PROJETS.length,
    parcours: EXPERIENCES.length,
    competences: COMPETENCES.reduce((total, groupe) => total + groupe.liste.length, 0),
    galerie: PHOTOS.length,
};

// Liste du menu pause, partagée par le panneau de l'accueil et le menu plein écran
export default function ListeMenu({ onChoix, premierLienRef }) {
    const sections = SECTIONS.filter(({ id }) => id !== 'galerie' || PHOTOS.length > 0);

    return (
        <ul className="flex flex-col gap-1">
            {sections.map(({ id, label }, index) => (
                <li key={id}>
                    <a
                        href={`#${id}`}
                        ref={index === 0 ? premierLienRef : undefined}
                        onClick={onChoix}
                        className="group flex justify-between items-center px-3 py-2.5 text-lg font-medium text-brume hover:bg-menthe hover:text-sapin focus-visible:bg-menthe focus-visible:text-sapin"
                    >
                        <span>
                            <span className="inline-block w-5 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true">▶</span>
                            {label}
                        </span>
                        {COMPTEURS[id] > 0 && <span>{COMPTEURS[id]}</span>}
                    </a>
                </li>
            ))}
            <li className="mt-2">
                <a
                    href={LIENS.cv}
                    download
                    onClick={onChoix}
                    className="flex items-center justify-center gap-2 px-3 py-2.5 bg-menthe text-sapin font-bold hover:bg-craie"
                >
                    <Download className="w-5 h-5" aria-hidden="true" />
                    Télécharger mon CV
                </a>
            </li>
        </ul>
    )
}
