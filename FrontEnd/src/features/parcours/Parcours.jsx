import { EXPERIENCES, FORMATIONS, LANGUES } from '../../constants/constant';

// Parcours : les expériences comme des quêtes terminées, puis formation et langues
export default function Parcours() {
    return (
        <section id="parcours" className="px-4 sm:px-10 lg:px-20 py-24 bg-sapin-clair">
            <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">

                {/* expériences */}
                <div>
                    <h2 className="titre-section mb-10">Parcours</h2>
                    <ol className="flex flex-col gap-10 border-l-2 border-mousse ml-2">
                        {EXPERIENCES.map((exp) => (
                            <li key={exp.poste} className="relative pl-8">
                                <span className="absolute -left-[9px] top-1.5 w-4 h-4 bg-lichen" aria-hidden="true"></span>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                                    <h3 className="font-hud text-xl font-bold text-craie">{exp.poste}</h3>
                                    <span className="font-hud text-sm text-gris-vert">{exp.periode}</span>
                                </div>
                                {exp.lieu && <p className="mt-1 text-menthe font-medium">{exp.lieu}</p>}
                                <ul className="mt-3 flex flex-col gap-1.5 list-disc pl-5 text-brume leading-relaxed">
                                    {exp.points.map((point) => <li key={point}>{point}</li>)}
                                </ul>
                                {exp.stack && (
                                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies utilisées">
                                        {exp.stack.map((tech) => (
                                            <li key={tech} className="px-2.5 py-1 text-sm font-hud font-semibold text-menthe border border-menthe/50">{tech}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>

                {/* formation et langues */}
                <div className="flex flex-col gap-12">
                    <div>
                        <h3 className="font-hud text-2xl font-bold text-craie mb-6">Formation</h3>
                        <ul className="flex flex-col gap-6">
                            {FORMATIONS.map((formation) => (
                                <li key={formation.titre}>
                                    <a
                                        href={formation.lien}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg font-semibold text-craie hover:text-menthe"
                                    >
                                        {formation.titre}
                                    </a>
                                    <p className="text-brume">{formation.sousTitre}</p>
                                    <p className="font-hud text-sm text-gris-vert">{formation.periode}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-hud text-2xl font-bold text-craie mb-6">Langues</h3>
                        <ul className="flex flex-col gap-3">
                            {LANGUES.map(({ langue, niveau }) => (
                                <li key={langue} className="flex justify-between border-b border-mousse pb-2">
                                    <span className="font-medium text-craie">{langue}</span>
                                    <span className="text-gris-vert">{niveau}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
