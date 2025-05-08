import { Routes, Route } from "react-router-dom";
import ContatoPage from "./pages/ContatoPage";
import DestinosPage from "./pages/DestinosPage";
import QuemSomosPage from "./pages/QuemSomosPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/destinos" element={<DestinosPage />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
