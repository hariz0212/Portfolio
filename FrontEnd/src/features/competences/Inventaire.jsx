import { COMPETENCES } from '../../constants/constant';

// Compétences présentées comme l'inventaire d'un jeu, rangées par catégorie
export default function Inventaire() {
    return (
        <section id="competences" className="px-4 sm:px-10 lg:px-20 py-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="titre-section">Compétences</h2>
                <p className="mt-3 mb-10 max-w-2xl text-lg text-gris-vert">
                    Mon inventaire. Le cadre vert marque mon langage préféré.
                </p>

                <div className="grid gap-10 md:grid-cols-2">
                    {COMPETENCES.map(({ categorie, liste }) => (
                        <div key={categorie}>
                            <h3 className="font-hud text-lg font-semibold text-craie mb-3">{categorie}</h3>
                            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                {liste.map(({ nom, img, favori }) => (
                                    <li
                                        key={nom}
                                        className={`flex flex-col items-center gap-2 py-4 bg-sapin-clair border-2 ${favori ? 'border-menthe' : 'border-mousse'}`}
                                    >
                                        <span className="flex items-center justify-center w-12 h-12 bg-craie p-1.5">
                                            <img src={img} alt="" className="w-full h-full object-contain" />
                                        </span>
                                        <span className="font-hud font-semibold text-brume">{nom}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
