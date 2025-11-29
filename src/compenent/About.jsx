function About() {
  return (
    <section
      className="py-10 px-10 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50"
      id="about"
    >
      <div className="max-w-6xl mx-auto text-left animate-fadeIn">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-800">
          À propos
        </h2>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Je m’appelle <span className="font-semibold text-blue-600">Hariz </span> 
            et je suis actuellement en deuxième année de BUT Informatique.
          </p>

          <p>
            Au fil de ma formation, j’ai eu l’occasion de travailler avec différents langages et technologies,
            mais <span className="font-semibold text-blue-600">Java</span> reste celui que je préfère pour son organisation,
            sa logique et la qualité qu’il apporte au développement applicatif.
          </p>

          <p>
            J’ai notamment réalisé un simulateur d’échiquier, un projet qui m’a permis d’approfondir la programmation orientée objet.
          </p>

          <p>
            Même si Java est mon langage de prédilection, je m’intéresse aussi au développement web et j’ai déjà travaillé avec
            <span className="font-semibold text-blue-600"> JavaScript</span> et <span className="font-semibold text-blue-600">React</span>.
          </p>

          <p>
            Motivé et curieux, je cherche à progresser constamment et à créer des applications fiables, claires et bien conçues.
          </p>
        </div>

        <div className="mt-10 flex gap-6">
          <a
            href="#contacts"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Me contacter
          </a>
          <a
            href="#skills"
            className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            Voir mes compétences →
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;