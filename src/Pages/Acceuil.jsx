import Hero from '../compenent/Hero.jsx';
import About from '../compenent/About.jsx';
import Skills from '../compenent/Skills.jsx';
import Projects from '../compenent/Projects.jsx';
import Contacts from '../compenent/Contacts.jsx';

function Acceuil() {
  return (
    <div className="bg-gray-50 text-gray-900 scroll-smooth">
  <Hero />

  <section id="about">
    <About />
  </section>

  <section id="skills">
    <Skills />
  </section>

  <section id="projects">
    <Projects />
  </section>

  <section id="contacts">
    <Contacts />
  </section>
</div>
  );
}

export default Acceuil;