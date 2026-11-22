import { PHOTOS } from '../../constants/constant';

// Galerie de mes photos, affichée seulement quand PHOTOS n'est pas vide
export default function Galerie() {
    if (PHOTOS.length === 0) return null;

    return (
        <section id="galerie" className="px-4 sm:px-10 lg:px-20 py-24 bg-sapin-clair">
            <div className="max-w-7xl mx-auto">
                <h2 className="titre-section mb-10">Galerie photo</h2>
                <ul className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                    {PHOTOS.map(({ src, legende }) => (
                        <li key={src} className="mb-4 break-inside-avoid">
                            <figure>
                                <img src={src} alt={legende} loading="lazy" className="w-full" />
                                <figcaption className="mt-2 font-hud text-sm text-gris-vert">{legende}</figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
