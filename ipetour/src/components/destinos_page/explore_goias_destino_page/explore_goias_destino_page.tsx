import "./explore_goias_destino_page.css";
import CachoeiraGoias from "../../../assets/cachoeira_em_goias.webp";

export default function ExploreGoias() {
  return (
    <div className="explore_goias_destino_page">
      <div className="texto_explore_goias_destino_page">
        <h1>Explore Goiás</h1>
        <p>
          Se você busca um destino que une natureza exuberante, cidades
          históricas e experiências únicas, Goiás é o lugar perfeito para você!
          Seja para relaxar em águas termais, explorar cachoeiras incríveis ou
          mergulhar na cultura local, esse estado surpreende a cada parada.
        </p>
        <a href="/">Saiba Mais</a>
      </div>{" "}
      <img
        src={CachoeiraGoias}
        alt="cachoeira em Goiás"
        className="imagem_explore_goias_destino_page"
      />
    </div>
  );
}
