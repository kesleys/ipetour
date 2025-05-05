import "./outros_topicos_destinos_page.css";

export default function OutrosTopicos() {
  return (
    <div className="outros_topicos_destinos_page">
      {" "}
      <img
        src="src/assets/quais_vacinas_tomar_antes.png"
        alt="Quais vacinas devo tomar antes de viajar?"
      />{" "}
      <img
        src="src/assets/qual_a_melhor_epoca_pra_viajar.png"
        alt="Qual a melhor época para viajar para o exterior?"
      />
      <div className="texto_outros_topicos_destinos_page">
        <h2>Outros tópicos</h2>
        <a href="" className="links_texto_outros_topicos_destinos_page">
          Praias com as aguas mais tranquilas
        </a>
        <a href="" className="links_texto_outros_topicos_destinos_page">
          Quais vacinas devo tomar antes de viajar?
        </a>
        <a href="" className="links_texto_outros_topicos_destinos_page">
          Em quais países o passaporte Brasileiro é aceito
        </a>
        <a href="" className="links_texto_outros_topicos_destinos_page">
          Consigo viajar sem saber falar inglês?
        </a>
      </div>
    </div>
  );
}
