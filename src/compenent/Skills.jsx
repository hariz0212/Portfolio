import htmlLogo from '../assets/html_logo.png';
import pythonLogo from '../assets/python_logo.png';
import cssLogo from '../assets/css_logo.png';
import jsLogo from '../assets/javascript_logo.png';
import reactLogo from '../assets/react_logo.svg.png';
import tailwindLogo from '../assets/Tailwind_logo.svg.png';
import sqlLogo from '../assets/Sql_logo.png';
import gitLogo from '../assets/git_logo.png';
import githubLogo from '../assets/github_logo.png';
import javaLogo from '../assets/Java_Logo.png';

function Skills() {
  const skills = [
    { name: 'Python', img: pythonLogo },
    { name: 'HTML', img: htmlLogo },
    { name: 'CSS', img: cssLogo },
    { name: 'Javascript', img: jsLogo },
    { name: 'JAVA', img: javaLogo },
    { name: 'REACT.js', img: reactLogo },
    { name: 'Tailwind', img: tailwindLogo },
    { name: 'SQL', img: sqlLogo },
    { name: 'GIT', img: gitLogo },
    { name: 'Github', img: githubLogo }
  ];

  // On duplique le tableau pour créer l’effet infini
  const loopSkills = [...skills, ...skills];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100" id="skills">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
         Compétences
      </h2>

      <div className="overflow-hidden">
        <div className="flex animate-slide">
          {loopSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[150px] mx-4 bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={skill.img}
                alt={`${skill.name} logo`}
                className="w-16 h-16 object-contain mb-2"
              />
              <span className="font-semibold text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;