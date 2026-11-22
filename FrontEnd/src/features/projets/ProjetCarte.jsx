import { ExternalLink } from 'lucide-react';

export default function ProjetCarte({ projet }) {
    const { titre, description, techs, lien, couleur } = projet;

    return (
        <article className="flex flex-col bg-sapin-clair">
            {/* vignette, à remplacer par une capture du projet */}
            <div className={`h-36 ${couleur}`} aria-hidden="true"></div>

            <div className="flex flex-col flex-1 p-5">
                <h3 className="font-hud text-xl font-bold text-craie">{titre}</h3>
                <p className="mt-2 mb-4 flex-1 text-brume leading-relaxed">{description}</p>

                <ul className="flex flex-wrap gap-2 mb-5" aria-label="Technologies">
                    {techs.map((tech) => (
                        <li key={tech} className="px-2.5 py-1 text-sm font-hud font-semibold text-menthe border border-menthe/50">{tech}</li>
                    ))}
                </ul>

                <a
                    href={lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start flex items-center gap-2 font-semibold text-craie hover:text-menthe"
                >
                    Voir le code
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">(ouvre GitHub dans un nouvel onglet)</span>
                </a>
            </div>
        </article>
    )
}
