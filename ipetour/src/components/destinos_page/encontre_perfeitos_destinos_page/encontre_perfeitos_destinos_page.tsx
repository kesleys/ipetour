import "./encontre_perfeitos_destinos_page.css";
import IconeAviaoAzulClaroRoxo from "../../../assets/icone_de_aviao_encontre_perfeitos_destinos_page.png";
import PetalasFlorAzul from "../../../assets/icone_flor_azul_encontre_perfeitos_destinos_page.png";

export default function EncontrePerfeitos() {
  return (
    <div className="encontre_perfeitos_destinos_page">
      <div
        className="aviao_icone_encontre_perfeitos_destinos_page"
        style={{ backgroundImage: `url(${IconeAviaoAzulClaroRoxo})` }}
      ></div>
      <p>
        Encontre o{" "}
        <span className="destaque_encontre_perfeitos_destinos_page">
          destino
        </span>{" "}
        perfeito em alguns clicks!
      </p>
      <div
        className="icone_flor_azul_encontre_perfeitos_destinos_page"
        style={{ backgroundImage: `url(${PetalasFlorAzul})` }}
      ></div>
    </div>
  );
}
