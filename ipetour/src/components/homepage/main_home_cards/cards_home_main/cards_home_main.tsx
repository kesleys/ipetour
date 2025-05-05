import { useState } from "react";
import "./cards_home_main.css";
import AviaoLogo from "../../../../assets/aviao_logo.png";
import HotelCardumas from "../../../../assets/hotel_cardumas.png";
import ImagemSaoPauloCardsHomepage from "../../../../assets/imagem_sao_paulo_cards_homepage.png";
import ShoppingBag from "../../../../assets/shopping-bag.png";
import ShoppingBagHover from "../../../../assets/shopping-bag_hover.png";

export default function CardsHomeMain() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="roll_limit_cards_main_home_cards">
      {/* Card Buenos Aires */}
      <div className="cards_main_home">
        <div className="quina_colorida_cards_main_home"></div>
        <div className="topo_cards_main_home">
          <div className="fundo_aviao_cards_main_home">
            <img src={AviaoLogo} alt="icone" />
          </div>
          <div className="por_cem_desconto_cards_main_home">15% off</div>
        </div>

        <div className="destino_cards_main_home">
          <div className="partida_destino_cards_main_home">
            Goiânia/Argentina
          </div>
          <div className="chegada_cards_main_home">Buenos Aires</div>
          <div className="tracejado_cards_main_home"></div>
        </div>

        <div className="div_hotel_cards_main_home">
          <h4 className="hotel_cards_main_home">Hotel Cardumas</h4>
          <div className="div_hotel_imagem_cards_main_home">
            <img
              className="hotel_imagem_cards_main_home"
              src={HotelCardumas}
              alt="hotel cardumas"
            />
          </div>
          <p className="descricao_diaria_cards_main_home">
            Diária pra 1 adulto
          </p>
          <div className="valor_diaria_cards_main_home">
            <p className="preco_final_cards_main_home">R$ 650,00</p>
            <p className="preco_desconto_cards_main_home"> R$ 820,00</p>
          </div>
        </div>

        <div className="div_disponibilidade_button_cards_main_home">
          <a
            className="disponibilidade_button_cards_main_home"
            href="https://wa.me/556281872854"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className="disponibilidade_button_icon_cards_main_home"
              style={{
                backgroundImage: `url(${
                  hoveredCard === 0 ? ShoppingBagHover : ShoppingBag
                })`,
              }}
            ></div>
            <p
              className="disponibilidade_button_text_cards_main_home"
              style={{
                color:
                  hoveredCard === 0 ? "#1486c9" : "rgba(255, 255, 255, 0.95)",
              }}
            >
              Verificar Disponibilidade
            </p>
          </a>
        </div>
      </div>

      {/* Card São Paulo */}
      <div className="cards_main_home">
        <div className="quina_colorida_cards_main_home"></div>
        <div className="topo_cards_main_home">
          <div className="fundo_aviao_cards_main_home">
            <img src={AviaoLogo} alt="icone" />
          </div>
          <div className="por_cem_desconto_cards_main_home">30% off</div>
        </div>

        <div className="destino_cards_main_home">
          <div className="partida_destino_cards_main_home">
            Goiânia/São Paulo
          </div>
          <div className="chegada_cards_main_home">São Paulo</div>
          <div className="tracejado_cards_main_home"></div>
        </div>

        <div className="div_hotel_cards_main_home">
          <h4 className="hotel_cards_main_home">Hotel São Paulo </h4>
          <div className="div_hotel_imagem_cards_main_home">
            <img
              className="hotel_imagem_cards_main_home"
              src={ImagemSaoPauloCardsHomepage}
              alt="hotel são paulo"
            />
          </div>
          <p className="descricao_diaria_cards_main_home">
            Diária pra 1 adulto
          </p>
          <div className="valor_diaria_cards_main_home">
            <p className="preco_final_cards_main_home">R$ 420,00</p>
            <p className="preco_desconto_cards_main_home">R$ 540,00</p>
          </div>
        </div>

        <div className="div_disponibilidade_button_cards_main_home">
          <a
            className="disponibilidade_button_cards_main_home"
            href="https://wa.me/556281872854"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredCard(1)} // ou 1 no segundo card
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className="disponibilidade_button_icon_cards_main_home"
              style={{
                backgroundImage: `url(${
                  hoveredCard === 1 ? ShoppingBagHover : ShoppingBag
                })`,
              }}
            ></div>
            <p
              className="disponibilidade_button_text_cards_main_home"
              style={{
                color:
                  hoveredCard === 1 ? "#1486c9" : "rgba(255, 255, 255, 0.95)",
              }}
            >
              Verificar Disponibilidade
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
