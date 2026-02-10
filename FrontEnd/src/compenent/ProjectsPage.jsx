import { Link } from "react-router-dom";

function ProjectsPage() {
  const projects = [
    {
      title: "Jeu d’échecs en Java",
      description: "Un simulateur d’échiquier réalisé en Java pour un projet scolaire.",
      link: "https://github.com/hariz0212/echec"
    },
    {
      title: "Portfolio en React+Vite",
      description: "Développement de mon portfolio personnel avec React et Tailwind CSS.",
      link: "https://github.com/hariz0212/Portfolio"
    },
    {
      title: "Création et implémentation d'une base de données",
      description: "Script de création de base de données et conception d'un Modèle Entité-Association (MEA).",
      link: "https://github.com/hariz0212/hariz0212/tree/main/S1/Sql"
    },
    {
      title: "Étude de communautés dans un réseau social",
      description: "Analyse de communautés sur un réseau social en Python. Comprend deux versions, dont une avancée.",
      link: "https://github.com/hariz0212/hariz0212/tree/main/S1/python"
    },
    {
      title: "Recueil de besoins",
      description: "Enquête pour l'amélioration de l'espace consacré à la vie étudiante et à la formation au sein de l'IUT.",
      link: "https://github.com/hariz0212/hariz0212/tree/main/S1/receuil%20de%20besoin"
    },
    {
      title: "Économie numérique",
      description: "Analyse de la stratégie de Nintendo pour réduire son empreinte numérique au fil des années.",
      link: "https://github.com/hariz0212/hariz0212/tree/main/S1/économie"
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Tous mes projets
        </h2>
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
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                Voir plus →
              </a>
            </div>
          ))}
        </div>

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