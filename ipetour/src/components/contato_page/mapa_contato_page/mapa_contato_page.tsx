import "./mapa_contato_page.css";
import IconeTelefoneContatoPage from "../../../assets/icone_telefone_mapa_contato_page.png";
import IconePinoContatoPage from "../../../assets/icone_pino_mapa_contato_page.png";

export default function MapaContatoPage() {
  return (
    <div className="mapa_endereco_e_telefone_mapa_contato_page">
      <div className="fundo_cinza_mapa_contato_page"></div>

      <div className="limite_mapa_contato_page">
        <iframe
          className="mapa_contato_page"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.356611902897!2d-49.33264041389827!3d-16.659028903851283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef5ad00f91ac9%3A0xcb454bbd74c52f23!2sPadre%20Pel%C3%A1gio!5e0!3m2!1spt-BR!2sbr!4v1746631378795!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
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
