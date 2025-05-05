import CardsHomeMain from "./cards_home_main/cards_home_main";
import "./main_home_cards.css";

{
  /* Cartões de viagens */
}

export default function MainHomeCards() {
  return (
    <div className="main_home_cards">
      {/* Título */}
      <div className="div_tittle_main_home_cards">
        <h1>Ofertas da temporada</h1>
      </div>

      {/* Cards */}
      <div className="cards_background_color_main_home_cards">
        <CardsHomeMain />
      </div>
    </div>
  );
}
