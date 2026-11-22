import { QUETE } from '../../constants/constant';

// Quête principale : ce que je cherche, présenté comme un objectif de jeu
export default function QuetePrincipale() {
    return (
        <aside aria-label="Quête principale" className="panneau-hud max-w-md px-5 py-4 border-l-4 border-menthe">
            <p className="text-sm font-semibold text-menthe">Quête principale</p>
            <h2 className="mt-1 mb-3 text-xl font-bold text-craie">{QUETE.titre}</h2>
            <ul className="flex flex-col gap-2 font-titre text-[15px]">
                {QUETE.objectifs.map(({ texte, fait }) => (
                    <li key={texte} className={`flex gap-2.5 ${fait ? 'text-gris-vert' : 'text-craie'}`}>
                        <span className={fait ? 'text-lichen' : 'text-menthe'} aria-hidden="true">{fait ? '✓' : '◆'}</span>
                        <span>
                            {texte}
                            {fait && <span className="sr-only"> (terminé)</span>}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
