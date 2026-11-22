import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Acceuil from './pages/Acceuil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
