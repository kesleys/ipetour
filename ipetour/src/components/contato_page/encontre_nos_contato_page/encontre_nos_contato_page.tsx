import "./encontre_nos_contato_page.css";
import PetalasFlorLaranja from "../../../assets/icone_flor_laranja_petalas_ipe.webp";

export default function EncontreNosContatoPage() {
  return (
    <div className="encontre_nos_contato_page">
      <div className="texto_encontre_nos_contato_page">
        <p>
          Encontre-nos no endereço a seguir e planeje sua próxima{" "}
          <span className="viagem_azul_encontre_nos_contato_page"> viagem</span>{" "}
          com{" "}
          <span className="a_gente_laranja_encontre_nos_contato_page">
            a gente!
          </span>{" "}
        </p>
      </div>
      <div
        className="icone_flor_laranja_encontre_nos_contato_page"
        style={{ backgroundImage: `url(${PetalasFlorLaranja})` }}
      ></div>
    </div>
  );
}
