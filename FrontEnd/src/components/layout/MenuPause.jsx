import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import useInterface from '../../hooks/useInterface';
import ListeMenu from '../ui/ListeMenu';

// Menu pause plein écran (bouton Menu ou touche Échap)
export default function MenuPause() {
    const { menuOuvert, setMenuOuvert } = useInterface();
    const premierLienRef = useRef(null);

    // Le focus va sur la première entrée à l'ouverture
    useEffect(() => {
        if (menuOuvert) premierLienRef.current?.focus();
    }, [menuOuvert]);

    if (!menuOuvert) return null;

    const fermer = () => setMenuOuvert(false);

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Menu pause"
            className="fixed inset-0 z-50 bg-sapin/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={fermer}
        >
            <div className="panneau-hud w-full max-w-sm p-5 border-2 border-mousse" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <p className="font-hud text-gris-vert">Pause</p>
                    <button
                        type="button"
                        onClick={fermer}
                        aria-label="Reprendre"
                        className="p-2 text-brume hover:text-menthe"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <ListeMenu onChoix={fermer} premierLienRef={premierLienRef} />
            </div>
        </div>
    )
}
