import React from 'react';
import './PaginaMobileTemporaria.css';
import logoIpeTour from '../assets/logo_ipeturismo_centralizada.png';
import ImagemViagemSemComplicacoesCasal from "../assets/imagem_turistas_sua_viagem_sem_complicacoes.webp";
import InstagramIcon from "../assets/icone_instagram_footer.webp";
import WhatsappIcon from "../assets/icone_whatsapp_footer.webp";
import JanelaAviao from "../assets/imagem_janela_aviao_planos_internacionais_cards.webp";
import Mesquita from "../assets/imagem_mesquita_turismo_religioso_cards.webp";
import Motorista from "../assets/imagem_motorista_locadora_de_veiculos_cards.webp";
import QuartoHotel from "../assets/imagem_quarto_hotel_hotelaria_cards.webp";
import ServiceCard from '../components/cards_horizontal/cards_horizontal.tsx'; // Ajuste o caminho
import { ServiceCardData } from '../components/cards_horizontal/cards_horizontal.tsx'; // Ajuste o caminho
import ImagemNuvemFundoMobile from "../assets/imagem_fundo_nuvem_mobile.webp";



const initialServiceCards: ServiceCardData[] = [
  {
    id: 'turismo-religioso',
    title: 'Turismo Religioso',
    description: 'Turismo religioso é um segmento de mercado do turismo, o qual difere dos demais porque tem como motivação fundamental a fé.',
    imageUrl: Mesquita,
    imageAlt: 'Mesquita representando turismo religioso',
  },
  {
    id: 'alugar-veiculos',
    title: 'Alugar Veículos',
    description: '100% brasileiro, não pague IOF, alugue online e pague somente a retirada. Faça tudo de forma simples, rápida e segura!',
    imageUrl: Motorista,
    imageAlt: 'Motorista dirigindo carro, representando aluguel de veículos',
  },
  {
    id: 'hotelaria',
    title: 'Hotelaria',
    description: 'Reserve hotéis ao melhor preço. Escolha o seu hotel preferido na Ipêturismo!',
    imageUrl: QuartoHotel,
    imageAlt: 'Quarto de Hotel confortável',
  },
  {
    id: 'planos-internacionais',
    title: 'Planos Internacionais',
    description: 'Encontre o Pacote Ideal para você e passagens aéreas com até 50% de Desconto.',
    imageUrl: JanelaAviao,
    imageAlt: 'Janela de Avião com vista para as nuvens',
  },
];



  const seuEmail = "comercial@ipetour.com";
  const numeroWhatsapp = "5562995774183";
  const mensagemPadraoWhatsapp = "Olá! Vim do site e gostaria de mais informações sobre roteiros e orçamentos de viagem.";

  const handleWhatsAppRedirect = () => {
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemPadraoWhatsapp)}`;
    window.open(urlWhatsapp, '_blank', 'noopener,noreferrer'); // Isso abrirá em uma nova aba
  };

  const serviceCards = initialServiceCards;

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

    <div className="cards_de_serviços_mobile" style={{backgroundImage: `url(${ImagemNuvemFundoMobile})`,}}>
      <div className='fundo_branco_transparente_mobile'></div>
      <div className="conteiner_cards_mobile">
        {serviceCards.map((card) => (
          <ServiceCard key={card.id} cardData={card} />
        ))}
      </div>
    </div>




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
