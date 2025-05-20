import React, { useState } from "react";
import type { CardInfo } from "./cards";
import AviaoLogo from "../../../../assets/aviao_logo.webp";
import Sacola from "../../../../assets/shopping-bag.webp";
import SacolaHover from "../../../../assets/shopping-bag_hover.webp";
import "./cards_homepage.css";

export const Card: React.FC<CardInfo> = ({
  desconto,
  partida,
  chegada,
  nomeHotel,
  imagemHotel,
  preco,
  precoAntigo,
  link,
}) => {
  const [emHover, setEmHover] = useState(false);
  const precoReal = preco.toFixed(2);
  const precoAntigoFormatado = precoAntigo.toFixed(2);

  return (
    <div className="card_homepage">
      <div className="quina_colorida_cards_homepage" />
      <div className="topo_cards_homepage">
        <div className="fundo_icone_aviao_cards_homepage">
          <img src={AviaoLogo} alt="Avião" />
        </div>
        <div className="desconto_percentual_cards_homepage">
          {desconto}% off
        </div>
      </div>
      <div className="rota_cards_homepage">
        <div className="partida_cards_homepage">{partida}</div>
        <div className="chegada_cards_homepage">{chegada}</div>
        <div className="tracejado_cards_homepage" />
      </div>
      <div className="info_hotel_cards_homepage">
        <h4>{nomeHotel}</h4>
        <img src={imagemHotel} alt={nomeHotel} />
        <p>Diária pra 1 adulto</p>
        <div className="precos_cards_homepage">
          <span className="preco_atual_cards_homepage">R$ {precoReal}</span>
          <span className="preco_antigo_cards_homepage">
            R$ {precoAntigoFormatado}
          </span>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="botao_disponibilidade_cards_homepage"
        onMouseEnter={() => setEmHover(true)}
        onMouseLeave={() => setEmHover(false)}
      >
        <div
          className="icone_botao_disponibilidade_cards_homepage"
          style={{
            backgroundImage: `url(${emHover ? SacolaHover : Sacola})`,
          }}
        />
        <span className="texto_botao_disponibilidade_cards_homepage">
          Verificar Disponibilidade
        </span>
      </a>
    </div>
  );
};
