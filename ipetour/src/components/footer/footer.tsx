import "./footer.css";
import InstagramIcon from "../../assets/icone_instagram_footer.png";
import WhatsappIcon from "../../assets/icone_whatsapp_footer.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="conteudo_footer">
        <div className="texto_footer">
          <div className="footer_infos">
            <h4 className="footer_tittles">Empresa</h4>
            <a className="footer_topicos" href="/">
              Sobre Nós
            </a>
            <a className="footer_topicos" href="/">
              Blog
            </a>
            <a className="footer_topicos" href="/">
              Como Trabalhamos
            </a>
          </div>
          <div className="footer_infos">
            <h4 className="footer_tittles">Contato</h4>
            <a className="footer_topicos" href="/">
              E-mail{" "}
            </a>
            <a className="footer_topicos" href="/">
              WhatsApp{" "}
            </a>
          </div>
          <div className="footer_infos">
            <h4 className="footer_tittles">Mais</h4>
            <a className="footer_topicos" href="/">
              Serviços{" "}
            </a>
            <a className="footer_topicos" href="/">
              Destinos{" "}
            </a>
          </div>
        </div>
        <div className="redes_sociais_footer">
          <a
            href="https://wa.me/556281872854"
            className="instagram_icone_footer"
            target="_blank"
            style={{ backgroundImage: `url(${InstagramIcon})` }}
          ></a>
          <a
            href="https://wa.me/556281872854"
            className="whatsapp_icone_footer"
            target="_blank"
            style={{ backgroundImage: `url(${WhatsappIcon})` }}
          ></a>
        </div>
      </div>
    </footer>
  );
}
