import "./turismo_internacional_destinos_page.css";
import ImagemTurismoInternacionalGarotoCachorro from "../../../assets/imagem_turismo_internacional_garoto_viagens_Mesa_de_trabajo.jpg";

export default function TurismoInternacionalDestinos() {
  return (
    <div className="turismo_internacional_destinos_page">
      <div className="limite_turismo_internacional_destinos_page">
        <div
          className="imagem_turismo_internacional_destinos_page"
          style={{
            backgroundImage: `url(${ImagemTurismoInternacionalGarotoCachorro})`,
          }}
        ></div>
        <div className="texto_turismo_internacional_destinos_page">
          <h1>Turismo internancional</h1>
          <p>
            Que tal explorar lugares incríveis e encontrar o cenário perfeito
            para sua próxima aventura? Aqui, você fica por dentro das últimas
            novidades sobre destinos surpreendentes, tendências de viagem e
            experiências imperdíveis ao redor do mundo.
          </p>
          <a href="/">Saiba Mais</a>
        </div>
      </div>
    </div>
  );
}
