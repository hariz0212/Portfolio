import { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';
import { SUCCES } from '../../constants/constant';
import useInterface from '../../hooks/useInterface';

// Notification « Succès débloqué », affichée quelques secondes à l'arrivée sur le site
export default function NotificationSucces() {
    const { modePhoto } = useInterface();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const minuteur = setTimeout(() => setVisible(false), 6000);
        return () => clearTimeout(minuteur);
    }, []);

    if (!visible || modePhoto) return null;

    return (
        <div
            role="status"
            className="animate-succes fixed right-4 sm:right-10 top-24 z-40 flex items-center gap-3 bg-craie text-sapin px-4 py-3 font-hud shadow-[6px_6px_0px_#5EE0C2]"
        >
            <Trophy className="w-8 h-8 text-[#1E5A46]" aria-hidden="true" />
            <div>
                <p className="text-sm font-semibold text-[#1E5A46]">Succès débloqué</p>
                <p className="font-bold">{SUCCES}</p>
            </div>
        </div>
    )
}
