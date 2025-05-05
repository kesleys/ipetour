import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header_conteiner">
        <Link className="header_name" to="/">
          <img src="src/assets/Logo_nome.png" alt="Logo Ipe Turismo" />
        </Link>
        <Link className="header_button" to="/quem-somos">
          Quem somos
        </Link>
        <Link className="header_button" to="/">
          Serviços
        </Link>
        <Link className="header_button" to="/destinos">
          Destinos
        </Link>
        <Link className="header_button" to="/contato">
          Contato
        </Link>
      </div>
    </header>
  );
}
