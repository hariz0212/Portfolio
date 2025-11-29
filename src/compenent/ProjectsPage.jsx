import { Link } from "react-router-dom";

function ProjectsPage() {
  // Tableau de projets
  const projects = [
    {
      title: "Jeu d’échecs en Java",
      description: "Un simulateur d’échiquier réalisé en Java pour un projet scolaire.",
      link: "#"
    },
    {
      title: "Portfolio en React",
      description: "Développement de mon portfolio personnel avec React et TailwindCSS.",
      link: "#"
    },
    {
      title: "Application Web",
      description: "Une petite application web pour gérer des tâches quotidiennes.",
      link: "#"
    },
    {
      title: "Projet 4",
      description: "Description rapide du projet 4...",
      link: "#"
    },
    {
      title: "Projet 5",
      description: "Description rapide du projet 5...",
      link: "#"
    },
    {
      title: "Projet 6",
      description: "Description rapide du projet 6...",
      link: "#"
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Tous mes projets
        </h2>

        {/* Grille de projets */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-600 font-medium hover:underline"
              >
                Voir plus →
              </a>
            </div>
          ))}
        </div>

        {/* Bouton retour */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            ← Retour à l’accueil
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;