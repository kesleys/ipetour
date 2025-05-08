import { Routes, Route } from "react-router-dom";
import ContatoPage from "./pages/ContatoPage";
import DestinosPage from "./pages/DestinosPage";
import QuemSomosPage from "./pages/QuemSomosPage";
import CongratulationsPage from "./pages/Feliz10Meses";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CongratulationsPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/destinos" element={<DestinosPage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
      </Routes>
    </>
  );
}

export default App;
