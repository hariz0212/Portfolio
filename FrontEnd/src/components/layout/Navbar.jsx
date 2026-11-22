import { Menu } from 'lucide-react';
import { NIVEAU, PHOTOS } from '../../constants/constant';
import useInterface from '../../hooks/useInterface';

// Barre du haut : carte du joueur, boussole et bouton du menu pause
export default function Navbar() {
    const { setMenuOuvert } = useInterface();

    return (
        <header className="fixed top-0 inset-x-0 z-40 flex justify-between items-start gap-4 px-4 sm:px-10 pt-4 pointer-events-none">

            {/* carte du joueur, ramène en haut de la page */}
            <a
                href="#accueil"
                className="pointer-events-auto panneau-hud flex items-center gap-3 py-2 pl-2 pr-5 [clip-path:polygon(0_0,100%_0,calc(100%-14px)_100%,0_100%)]"
            >
                <span className="w-11 h-11 bg-menthe text-sapin flex items-center justify-center font-bold text-lg">HP</span>
                <span className="flex flex-col gap-1.5">
                    <span className="font-semibold text-craie text-sm sm:text-base">{NIVEAU.label}</span>
                    <span className="block w-32 sm:w-48 h-1.5 bg-mousse" role="img" aria-label={`Progression du BUT : ${NIVEAU.progression} %`}>
                        <span className="block h-1.5 bg-lichen" style={{ width: `${NIVEAU.progression}%` }}></span>
                    </span>
                </span>
            </a>

            {/* boussole, repères cliquables vers les sections */}
            <div className="hidden lg:flex flex-col items-center gap-1.5 w-[480px] px-5 py-2 panneau-hud pointer-events-auto">
                <div className="w-full flex justify-between items-end pb-1 border-b-2 border-craie/60 text-sm text-brume" aria-hidden="true">
                    <span>O</span><span>|</span><span>NO</span><span>|</span>
                    <span className="text-base font-bold text-craie">N</span>
                    <span>|</span><span>NE</span><span>|</span><span>E</span>
                </div>
                <nav aria-label="Repères" className="flex gap-16 text-sm font-semibold">
                    <a href="#projets" className="text-menthe hover:text-craie">▲ Projets</a>
                    {PHOTOS.length > 0 && <a href="#galerie" className="text-craie hover:text-menthe">▲ Galerie</a>}
                    <a href="#contact" className="text-lichen hover:text-craie">▲ Contact</a>
                </nav>
            </div>

            {/* bouton du menu pause */}
            <button
                type="button"
                onClick={() => setMenuOuvert(true)}
                className="pointer-events-auto panneau-hud flex items-center gap-2 px-4 py-3 text-craie font-semibold hover:text-menthe"
            >
                <Menu className="w-5 h-5" aria-hidden="true" />
                Menu
            </button>
        </header>
    )
}
