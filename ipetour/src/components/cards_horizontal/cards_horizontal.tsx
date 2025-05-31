// src/components/ServiceCard/ServiceCard.tsx
import React from 'react';
import "./cards_horizontal.css";


const numeroWhatsapp = "5562995774183";
  const mensagemPadraoWhatsapp = "Olá! Vim do site e gostaria de mais informações sobre roteiros e orçamentos de viagem.";

  const handleWhatsAppRedirect = () => {
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemPadraoWhatsapp)}`;
    window.open(urlWhatsapp, '_blank', 'noopener,noreferrer'); // Isso abrirá em uma nova aba
  };

export interface ServiceCardData {
  id: string | number; // Para a key do React e futura edição
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  // Você pode adicionar mais campos aqui se necessário, como uma cor específica para a "quina"
  // quinaColor?: string;
}

interface ServiceCardProps {
  cardData: ServiceCardData;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ cardData }) => {
  const { title, description, imageUrl, imageAlt } = cardData;

  return (
    <div className="cards_mobile">
      <div className="quina_colorida_cards_mobile"></div>
      <div className="texto_cards_mobile">
        <h1 className="titulo_cards_mobile">{title}</h1>
        <div className="paragrafo_cards_mobile">
          <p>{description}</p>
        </div>
        <div className="service-card__button-container">
          <a className='botao_converse_com_um_agente_cards_mobile' onClick={handleWhatsAppRedirect} >Mais Informações</a>
        </div>
      </div>
      <div className='limite_imagem_cards_mobile'>
      <img
        className="imagem_cards_mobile"
        src={imageUrl}
        alt={imageAlt}
      />
      </div>
    </div>
  );
};

export default ServiceCard;