import { Camera, Download } from 'lucide-react';
import { LIENS, PHOTO_ACCUEIL } from '../../constants/constant';
import useInterface from '../../hooks/useInterface';
import Paysage from '../../components/ui/Paysage';
import ListeMenu from '../../components/ui/ListeMenu';
import QuetePrincipale from './QuetePrincipale';
import Pellicule from './Pellicule';

export default function Hero() {
    const { modePhoto, setModePhoto } = useInterface();

    return (
        <section id="accueil" className="relative min-h-svh overflow-hidden bg-sapin">

            {/* photo plein écran */}
            {PHOTO_ACCUEIL
                ? <img src={PHOTO_ACCUEIL} alt="" className="absolute inset-0 w-full h-full object-cover" />
                : <Paysage className="absolute inset-0 w-full h-full" />}
            <div className={`absolute inset-0 bg-sapin transition-opacity ${modePhoto ? 'opacity-0' : 'opacity-20'}`}></div>

            {/* grille des tiers et point de mise au point du viseur */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute inset-y-0 left-1/3 w-px bg-brume/15"></div>
                <div className="absolute inset-y-0 left-2/3 w-px bg-brume/15"></div>
                <div className="absolute inset-x-0 top-1/3 h-px bg-brume/15"></div>
                <div className="absolute inset-x-0 top-2/3 h-px bg-brume/15"></div>
                <div className="absolute left-2/3 top-1/3 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-menthe"></div>
            </div>

            {/* contenu masqué en mode photo */}
            {!modePhoto && (
                <div className="relative z-10 min-h-svh flex flex-col justify-between gap-10 px-4 sm:px-10 lg:px-20 pt-32 pb-10 lg:pb-24">

                    <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
                        <div className="flex flex-col gap-8">
                            <div>
                                <h1 className="titre-geant text-[2.5rem] sm:text-7xl lg:text-8xl">Hariz Piratheepan</h1>
                                <p className="mt-5 max-w-lg text-xl sm:text-2xl leading-snug text-craie">
                                    Développeur web full-stack, en 3e année de BUT Informatique.
                                </p>
                            </div>
                            <QuetePrincipale />
                        </div>

                        {/* menu pause toujours visible sur très grand écran (sinon bouton Menu) */}
                        <nav aria-label="Menu principal" className="hidden xl:block panneau-hud w-64 shrink-0 self-start p-3.5">
                            <p className="mb-2.5 text-sm text-gris-vert">Pause</p>
                            <ListeMenu />
                        </nav>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8">
                        <div className="flex flex-wrap gap-3.5">
                            <a
                                href={LIENS.cv}
                                download
                                className="flex items-center gap-2 bg-menthe text-sapin px-5 py-3.5 font-semibold hover:bg-craie"
                            >
                                <Download className="w-5 h-5" aria-hidden="true" />
                                Télécharger mon CV
                            </a>
                            <a href="#contact" className="border-2 border-brume text-brume px-5 py-3 font-medium hover:bg-brume hover:text-sapin">
                                Me contacter
                            </a>
                            <button
                                type="button"
                                onClick={() => setModePhoto(true)}
                                className="flex items-center gap-2 border-2 border-transparent text-brume px-3 py-3 font-medium hover:text-menthe"
                            >
                                <Camera className="w-5 h-5" aria-hidden="true" />
                                Mode photo
                            </button>
                        </div>
                        <Pellicule />
                    </div>
                </div>
            )}

            {/* sortie du mode photo */}
            {modePhoto && (
                <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
                    <button
                        type="button"
                        onClick={() => setModePhoto(false)}
                        className="panneau-hud px-5 py-3 text-craie font-semibold hover:text-menthe"
                    >
                        Quitter le mode photo <span className="text-gris-vert font-medium">(P ou Échap)</span>
                    </button>
                </div>
            )}
        </section>
    )
}
