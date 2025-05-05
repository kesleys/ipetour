import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header_conteiner">
        <a className="header_name" href="/">
          <img src="src\assets\Logo_nome.png" alt="Logo Ipe Turismo" />
        </a>
        <a className="header_button" href="/quem-somos">
          Quem somos
        </a>
        <a className="header_button" href="/">
          Serviços
        </a>
        <a className="header_button" href="/destinos">
          Destinos
        </a>
        <a className="header_button" href="/contato">
          Contato
        </a>
      </div>
    </header>
  );
}
