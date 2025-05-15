import { cards } from "./cards_homepage/cards";
import { Card } from "./cards_homepage/cards_homepage";
import "./conteiner_cards_homepage.css";

{
  /* Cartões de viagens */
}

export default function CardsOfertasTemporada() {
  return (
    <div className="main_home_cards">
      {/* Título */}
      <div className="div_tittle_main_home_cards">
        <h1>Ofertas da temporada</h1>
      </div>

      {/* Cards */}
      <div className="cards_background_color_main_home_cards">
        <div className="limite_cards__ofestas_homepage">
          {cards.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
