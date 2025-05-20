import "./mapa_contato_page.css";
import IconeTelefoneContatoPage from "../../../assets/icone_telefone_mapa_contato_page.webp";
import IconePinoContatoPage from "../../../assets/icone_pino_mapa_contato_page.webp";

export default function MapaContatoPage() {
  return (
    <div className="mapa_endereco_e_telefone_mapa_contato_page">
      <div className="fundo_cinza_mapa_contato_page"></div>

      <div className="limite_mapa_contato_page">
        <iframe
          className="mapa_contato_page"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8818087524764!2d-49.31666852390236!3d-16.682796845459887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef425fcb4e4ef%3A0xcd96c3683602535b!2sAv.%20Nero%20Macedo%2C%20400%20-%20Conj.%20Guadalajara%2C%20Goi%C3%A2nia%20-%20GO%2C%2074415-472!5e0!3m2!1spt-BR!2sbr!4v1746721964873!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="quina_colorida_mapa_contato_page"></div>
      </div>
      <div className="endereco_e_telefone_contato_page">
        <div className="telefone_contato_page">
          <img src={IconePinoContatoPage} alt="" />
          <div>
            <h4>Endereço</h4>{" "}
            <p>Av. Nero Macedo, 400 - Cidade Jardim, Goiânia - GO, 74423-250</p>
          </div>
        </div>
        <div className="telefone_contato_page">
          <img src={IconeTelefoneContatoPage} alt="" />
          <div>
            <h4>Telefone</h4>{" "}
            <p>
              Watssapp: (62) 98658-8511 <br /> Fixo: (62) 3845-2944
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
