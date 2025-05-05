import "./main_home_turismo_tropical.css";
import IconeFlorLaranRoxoAzul from "../../../assets/icon-flor-laranja-roxo-azul.png";
import ImagemTurismoTropical from "../../../assets/imagem_main_home_turismo_tropical.jpg";

export default function MainHomeTurismoTropical() {
  return (
    <div className="main_home_turismo_tropical">
      <div
        className="imagem_main_home_turismo_tropical"
        style={{ backgroundImage: `url(${ImagemTurismoTropical})` }}
      ></div>
      <div className="texto_main_home_turismo_tropical">
        <h1 id="titulo_main_home_turismo_tropical">Turismo tropical</h1>
        <p id="paragrafo_main_home_turismo_tropical">
          Que tal explorar lugares incríveis e encontrar o cenário perfeito para
          sua próxima aventura? Aqui, você fica por dentro das últimas novidades
          sobre destinos surpreendentes, tendências de viagem e experiências
          imperdíveis ao redor do mundo.
        </p>
        <a id="saiba_maismain_home_turismo_tropical" href="/">
          saiba mais
        </a>
      </div>
      <img
        src={IconeFlorLaranRoxoAzul}
        alt="logo flor de ipê"
        className="icon_flor_laranja_roxo_azul_main_home_turismo_tropical"
      />
    </div>
  );
}
