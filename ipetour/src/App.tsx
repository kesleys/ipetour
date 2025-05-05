import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContatoPage from "./pages/ContatoPage";
import DestinosPage from "./pages/DestinosPage";
import QuemSomosPage from "./pages/QuemSomosPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/destinos" element={<DestinosPage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
