import "./main_home_vamos_la.css";
import ImagemRioDeJaneiroVamosLaHomepage from "../../../assets/imagem_rio_de_janeiro_vamos_la_homepage.webp";

{
  /* Texto e imagens introdutórios */
}

export default function MainVamosLa() {
  return (
    <div className="main_vamos_la">
      <div className="quadrante_1_vamos_la">
        <h1 className="titulo_vamos_la">
          Compre pacotes completos de viagem, com segurança{" "}
        </h1>
        <p className="texto_vamos_la">
          tenha facilidade com os pocessos de transferencia de moedas
          diretamente da sua casa
        </p>
        <a
          className="button_vamos_la"
          href="https://wa.me/556281872854"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vamos la!
        </a>
      </div>

      <div className="quadrante_2_vamos_la">
        <img
          className="imagem_vamos_la"
          src={ImagemRioDeJaneiroVamosLaHomepage}
          alt="copa cabana"
        />
      </div>
    </div>
  );
}
