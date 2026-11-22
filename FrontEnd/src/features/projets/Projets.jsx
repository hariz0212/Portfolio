import { PROJETS } from '../../constants/constant';
import ProjetCarte from './ProjetCarte';

export default function Projets() {
    return (
        <section id="projets" className="px-4 sm:px-10 lg:px-20 py-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="titre-section">Projets</h2>
                <p className="mt-3 mb-10 max-w-2xl text-lg text-gris-vert">
                    Des projets de stage, de cours et personnels. Le code de chacun est sur GitHub.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {PROJETS.map((projet) => (
                        <ProjetCarte key={projet.titre} projet={projet} />
                    ))}
                </div>
            </div>
        </section>
    )
}
