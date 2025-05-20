import "./direto_de_goiania_quem_somos.css";
import IconeAviaoAzulClaroRoxo from "../../../assets/icone_de_aviao_encontre_perfeitos_destinos_page.webp";
import PetalasFlorLaranja from "../../../assets/icone_flor_laranja_petalas_ipe.webp";

export default function DiretoDeGoiania() {
  return (
    <div className="direto_de_goiania_quem_somos">
      <div
        className="aviao_icone_direto_de_goiania_quem_somos"
        style={{ backgroundImage: `url(${IconeAviaoAzulClaroRoxo})` }}
      ></div>
      <p>
        <span className="ipeturismos_laranja_direto_de_goiania_quem_somos">
          Ipeturismo
        </span>
        , direto de Goiânia para
        <span className="o_mundo_azul_direto_de_goiania_quem_somos">
          {" "}
          o Mundo
        </span>
        !
      </p>
      <div
        className="icone_flor_laranja_direto_de_goiania_quem_somos"
        style={{ backgroundImage: `url(${PetalasFlorLaranja})` }}
      ></div>
    </div>
  );
}
