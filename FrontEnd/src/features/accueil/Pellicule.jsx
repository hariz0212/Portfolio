import { PROJETS } from '../../constants/constant';

// Projets phares présentés comme une pellicule, le premier est « sélectionné »
export default function Pellicule() {
    const projetsPhares = PROJETS.filter((projet) => projet.phare);

    return (
        <nav aria-label="Projets phares" className="flex gap-3 overflow-x-auto pb-2">
            {projetsPhares.map((projet, index) => (
                <a key={projet.titre} href="#projets" className="group w-36 shrink-0 flex flex-col gap-2">
                    <span
                        className={`block h-24 ${projet.couleur} ${index === 0 ? 'outline-3 outline-menthe outline-offset-3' : 'group-hover:outline-3 group-hover:outline-brume group-hover:outline-offset-3'}`}
                    ></span>
                    <span className={`text-[15px] ${index === 0 ? 'font-semibold text-craie' : 'text-brume'}`}>{projet.titre}</span>
                </a>
            ))}
        </nav>
    )
}
