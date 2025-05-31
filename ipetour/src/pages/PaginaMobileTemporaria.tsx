import React from 'react';
import './PaginaMobileTemporaria.css';
import logoIpeTour from '../assets/logo_ipetour_operadora_icone_header.webp';
import ImagemViagemSemComplicacoesCasal from "../assets/imagem_turistas_sua_viagem_sem_complicacoes.webp";
import InstagramIcon from "../assets/icone_instagram_footer.webp";
import WhatsappIcon from "../assets/icone_whatsapp_footer.webp";

  const seuEmail = "comercial@ipetour.com";
  const numeroWhatsapp = "5562995774183";
  const mensagemPadraoWhatsapp = "Olá! Vim do site e gostaria de mais informações sobre roteiros e orçamentos de viagem.";

  const handleWhatsAppRedirect = () => {
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemPadraoWhatsapp)}`;
    window.open(urlWhatsapp, '_blank', 'noopener,noreferrer'); // Isso abrirá em uma nova aba
  };

const PaginaMobileTemporaria: React.FC = () => {

  return (

    <div>
      
      <header className="header_mobile">
          <img src={logoIpeTour} alt="Logo Ipe Turismo" />
      </header>

      <h1 className='titulo_mobile_h1'>
        <span className='laranja_titulo_mobile_h1'>Ipeturismo</span>, direto 
        de Goiânia para <span className='azul_titulo_mobile_h1'>o Mundo</span>!
      </h1>
      <img className='imagem_dois_turistas_mobile' src={ImagemViagemSemComplicacoesCasal} alt="Desenho de Casal viajando" />
      <p className='paragrafo_mobile_descricao'>
        Se você busca uma agência de turismo confiável, 
        com atendimento de qualidade e roteiros incríveis, 
        a Ipeturismo é a escolha certa! 
        Localizada em Goiânia, a empresa se destaca no mercado por 
        oferecer os melhores serviços de turismo, garantindo viagens
        inesquecíveis, com conforto, segurança e praticidade.
      </p>
      <a className='botao_converse_com_um_agente_mobile' onClick={handleWhatsAppRedirect} >Converse com um Agente!</a>










      <footer className="footer_mobile">
          
          <div className="footer_infos_mobile">
            <h4 className="footer_tittles_mobile">Contato</h4>
            <a href={`mailto:${seuEmail}`}className="footer_topicos_mobile">Email: {seuEmail}</a>
            <a className="footer_topicos_mobile" onClick={handleWhatsAppRedirect}>WhatsApp</a>
          </div>

        <div className="redes_sociais_footer">
          <a href='https://wa.me/556281872854' target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt="Ícone do Instagram"/></a>
          <img src={WhatsappIcon} onClick={handleWhatsAppRedirect} alt="icone de whatsapp" />
        </div>
    </footer>
    </div>

  );
};

export default PaginaMobileTemporaria;
