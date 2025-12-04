import { Link } from "react-router-dom";
import {HashLink} from "react-router-hash-link";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Portfolio</h1>

        {/* Liens */}
        <div className="flex space-x-6 font-medium">
          <HashLink  smooth to="/#about" className="hover:text-blue-600">À propos</HashLink>
          <Link to="/projects" className="hover:text-blue-600">Projets</Link>
          <HashLink smooth to="/#skills" className="hover:text-blue-600">Compétences</HashLink>
          <HashLink smooth to="/#contacts" className="hover:text-blue-600">Contact</HashLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;