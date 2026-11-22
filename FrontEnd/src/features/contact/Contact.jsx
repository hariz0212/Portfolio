import { Mail } from 'lucide-react';
import { LIENS } from '../../constants/constant';
import { GithubIcone, LinkedinIcone } from '../../components/ui/Icones';

const CONTACTS = [
    { label: 'Email', texte: LIENS.email, href: `mailto:${LIENS.email}`, Icone: Mail },
    { label: 'LinkedIn', texte: 'Hariz Piratheepan', href: LIENS.linkedin, Icone: LinkedinIcone },
    { label: 'GitHub', texte: 'hariz0212', href: LIENS.github, Icone: GithubIcone },
];

export default function Contact() {
    return (
        <section id="contact" className="px-4 sm:px-10 lg:px-20 pt-24 pb-32 bg-sapin-clair">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
                <div className="max-w-xl">
                    <h2 className="titre-section">Contact</h2>
                    <p className="mt-5 text-2xl leading-snug text-craie">
                        Vous proposez un stage de fin d’études à partir de mars 2027 ? Écrivez-moi, je réponds vite.
                    </p>
                </div>

                <ul className="flex flex-col gap-6">
                    {CONTACTS.map((contact) => {
                        const { label, texte, href, Icone } = contact;
                        return (
                        <li key={label}>
                            <p className="font-hud text-sm text-gris-vert mb-1">{label}</p>
                            <a
                                href={href}
                                target={href.startsWith('mailto:') ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 text-xl font-bold text-menthe hover:text-craie break-all"
                            >
                                <Icone className="w-5 h-5 shrink-0" aria-hidden="true" />
                                {texte}
                            </a>
                        </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    )
}
