import "./fale_conosco_contato_page.css";
import IconeAviaoAzulClaroRoxo from "../../../assets/icone_de_aviao_encontre_perfeitos_destinos_page.png";

export default function FaleConoscoContatoPage() {
  return (
    <div className="fale_conosco_contato_page">
      <div
        className="aviao_icone_nosso_compromisso_quem_somos"
        style={{ backgroundImage: `url(${IconeAviaoAzulClaroRoxo})` }}
      ></div>
      <div className="tamanho_paragrafo_fale_conosco_contato_page">
        <h1>Fale com a gente!</h1>
        <p className="">
          Tem alguma dúvida sobre sua próxima viagem dos sonhos? Nossa equipe
          está pronta para responder qualquer pergunta e garantir que sua
          experiência seja incrível.{" "}
        </p>
      </div>
    </div>
  );
}
