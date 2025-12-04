import BgEdu from '../assets/bg-Edu.jpg';

function Education() {
  return (
    <section
      id="education"
      className="py-16 px-6 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${BgEdu})` }}
    >
      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenu */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* Titre centré */}
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Éducation
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Timeline à gauche */}
          <div className="relative text-white">
            <div className="space-y-8">
              {/* Lycée */}
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex-shrink-0"></div>
                <div className="ml-4">
                  <a
                    href="https://lyc-baudelaire-fosses.ac-versailles.fr"
                    className="text-xl font-semibold hover:text-blue-300 transition-colors"
                  >
                    Lycée Charles Baudelaire
                  </a>
                  <p className="text-gray-200">2021 - 2024</p>
                </div>
              </div>

             <div className="relative ml-2 h-12">
            {/* Ligne verticale */}
            <div className="absolute left-3 top-0 border-l-2 border-blue-400 h-full"></div>

            {/* Flèche SVG alignée */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 translate-x-[-11px] top-8 w-6 h-6 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
                />
            </svg>
            </div>

              {/* Université */}
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex-shrink-0"></div>
                <div className="ml-4">
                  <a
                    href="https://www.univ-spn.fr"
                    className="text-xl font-semibold hover:text-blue-300 transition-colors"
                  >
                    BUT Informatique - Université Exemple
                  </a>
                  <p className="text-gray-200">2024 - Présent</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite vide (ou texte supplémentaire si tu veux) */}
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Education;