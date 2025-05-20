import "./ainda_nao_encontrou_destinos_page.css";
import AindaNaoEncontrou from "../../../../src/assets/ainda_nao_encontrou_imagem.webp";

export default function NaoEncontrouAinda() {
  return (
    <div className="ainda_nao_encontrou_destinos_page">
      <img
        src={AindaNaoEncontrou}
        alt="cachoeira em Goiás"
        className="imagem_ainda_nao_encontrou_destinos_page"
      />
      <div className="texto_ainda_nao_encontrou_destinos_page">
        <h1>
          Ainda não encontrou o <span>destino perfeito</span>?
        </h1>
        <p>
          Nossa equipe especializada está sempre disponível para entender suas
          preferências e criar o roteiro ideal para você. Seja aventura,
          descanso, cultura ou diversão, temos o pacote perfeito para tornar sua
          viagem inesquecível.
        </p>
        <div>
          <a
            className="botao_converse_com_um_agente_ainda_nao_encontrou_destinos_page"
            href="https://wa.me/556281872854"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text_botao_converse_com_um_agente_ainda_nao_encontrou_destinos_page">
              Converse com um agente
            </div>
          </a>
        </div>
      </div>{" "}
    </div>
  );
}
