import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/80 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">
          Portfolio
        </h1>

        {/* Liens */}
        <div className="flex items-center space-x-6 font-medium">
          <HashLink
            smooth
            to="/#about"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            À propos
          </HashLink>
          <Link
            to="/projects"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Projets
          </Link>
          <HashLink
            smooth
            to="/#skills"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Compétences
          </HashLink>
          <HashLink
            smooth
            to="/#contacts"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </HashLink>

          {/* Bouton Télécharger CV */}
          <a
            href="/cv_info.pdf"
            download
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all flex items-center gap-2"
          >
            CV
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;