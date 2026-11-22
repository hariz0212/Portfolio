// Paysage dessiné, affiché tant qu'aucune photo n'est choisie dans constant.js
export default function Paysage({ className = '' }) {
    return (
        <svg
            viewBox="0 0 1280 1000"
            preserveAspectRatio="xMidYMid slice"
            className={className}
            aria-hidden="true"
        >
            <rect width="1280" height="1000" fill="#2B4A3A" />
            <rect width="1280" height="460" fill="#7FA3B5" />
            <rect y="300" width="1280" height="200" fill="#A9C2C6" />
            <circle cx="880" cy="380" r="70" fill="#EEF3F2" />
            <path d="M0 520 L80 380 L140 470 L210 330 L290 460 L360 360 L440 480 L520 350 L610 470 L700 390 L790 500 L880 410 L960 500 L1060 380 L1150 470 L1280 400 L1280 1000 L0 1000Z" fill="#1E3A2C" />
            <path d="M0 700 L70 560 L150 660 L230 540 L320 680 L410 580 L500 700 L600 590 L700 710 L800 600 L900 720 L1000 610 L1100 720 L1200 620 L1280 690 L1280 1000 L0 1000Z" fill="#10231A" />
        </svg>
    )
}
