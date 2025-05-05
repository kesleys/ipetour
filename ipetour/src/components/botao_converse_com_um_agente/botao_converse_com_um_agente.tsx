import "./botao_converse_com_um_agente.css";

export default function BotaoConverseComUmAgente() {
  return (
    <a
      className="botao_converse_com_um_agente"
      href="https://wa.me/556281872854"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="icon_botao_converse_com_um_agente"></div>
      <p className="text_botao_converse_com_um_agente">
        Converse com um agente
      </p>
    </a>
  );
}
