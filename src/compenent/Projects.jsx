import { Link } from "react-router-dom";
function Projects() {
  return (
    <section className="py-10 px-6 bg-gray-100" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">Mes Projets</h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        
        <div className="bg-white p-9 rounded-xl shadow w-full sm:w-auto max-w-sm">
          <h3 className="text-xl font-semibold mb-2">Jeux d'echec</h3>
          <p className="text-gray-600">
            Création d'un jeu d'échec en JAVA pour pour un projet Scolaire
          </p>
        </div>

        <div className="bg-white p-9 rounded-xl shadow w-full sm:w-auto max-w-sm">
          <h3 className="text-xl font-semibold mb-2">Portfolio en React+Vite</h3>
          <p className="text-gray-600">
            Développement de mon portfolio personnel avec React et TailwindCSS.
          </p>
        </div>


      </div>
      <section className="py-20 bg-gray-100">
    <div className="flex justify-center">
      <div className="relative p-0.5 inline-flex items-center font-bold overflow-hidden group rounded-md">
        <div className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></div>
        
        <div className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
          <Link 
          to="/projects" 
          className="relative text-white"
          >
            En savoir plus
          </Link>
        </div>
        </div>
      </div>
    </section>
    </section>
  );
}

export default Projects;
