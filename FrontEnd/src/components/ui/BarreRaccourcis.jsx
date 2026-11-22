const RACCOURCIS = [
    { touche: '←  →', action: 'Sections' },
    { touche: 'Échap', action: 'Menu' },
    { touche: 'C', action: 'CV', accent: true },
    { touche: 'P', action: 'Mode photo' },
];

// Aide des raccourcis en bas de l'écran, seulement sur ordinateur (clavier et souris)
export default function BarreRaccourcis() {
    return (
        <aside
            aria-label="Raccourcis clavier"
            className="hidden lg:[@media(hover:hover)]:flex fixed bottom-0 inset-x-0 z-30 h-12 justify-end items-center gap-7 px-10 bg-sapin/90 font-hud text-sm text-brume"
        >
            {RACCOURCIS.map(({ touche, action, accent }) => (
                <span key={action} className="flex items-center gap-2">
                    <kbd className={`touche ${accent ? 'text-menthe' : ''}`}>{touche}</kbd>
                    {action}
                </span>
            ))}
        </aside>
    )
}
