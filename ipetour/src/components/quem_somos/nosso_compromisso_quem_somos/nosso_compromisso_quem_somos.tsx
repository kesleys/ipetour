import "./nosso_compromisso_quem_somos.css";
import IconeAviaoAzulClaroRoxo from "../../../assets/icone_de_aviao_encontre_perfeitos_destinos_page.webp";

export default function NossoCompromissoQuemSomos() {
  return (
    <div className="nosso_compromisso_quem_somos">
      <div
        className="aviao_icone_nosso_compromisso_quem_somos"
        style={{ backgroundImage: `url(${IconeAviaoAzulClaroRoxo})` }}
      ></div>

      <p className="tamanho_paragrafo_nosso_compromisso_quem_somos">
        Nosso{" "}
        <span className="compromisso_azul_nosso_compromisso_quem_somos">
          {" "}
          compromisso{" "}
        </span>{" "}
        é tornar a{" "}
        <span className="sua_viagem_laranja_nosso_compromisso_quem_somos">
          sua viagem
        </span>{" "}
        ainda mais especial!
      </p>
    </div>
  );
}
