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
      description: "Développement de mon portfolio personnel avec React et TailwindCSS.",
      link: "https://github.com/hariz0212/Portfolio"
    },
    {
      title: "Création et implémentation d'une Base de Donée",
      description: "Création d'un script de création de base de Donée mais Aussi d'un MEA",
      link: "https://github.com/hariz0212/hariz0212/tree/main/S1/Sql"
    },
    {
      title: "Etude de communautés dans un réseau social",
      description: "Nous avons étudier les communauté dans un réseau sociaux Avec du python, elle contient Deux version une plus avancé.",
      link: "https://github.com/hariz0212/hariz0212/tree/main/S1/python"
    },
    {
      title: "Receuil de besoin",
      description: "Enquête pour l'amélioration  de l'espace conacré à la vie étudiante et à la formation au sein de l'IUT",
      link: "https://github.com/hariz0212/hariz0212/tree/main/S1/receuil%20de%20besoin"
    },
    {
      title: "Economie",
      description: "Un projet qui répond a la question de comment l'entreprise Nintendo a-t-elle réussi à réduire son empreinte numérique",
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