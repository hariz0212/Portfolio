import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from './compenent/Nav'
import Acceuil from "./Pages/Acceuil";
import Projets from "./Pages/PageProjet"

function App() {
  return (
   <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Acceuil />}/>
        <Route path="/projects" element={<Projets />}/>
      </Routes>
    </Router>
  )
}

export default App