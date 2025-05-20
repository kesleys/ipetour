import { useState } from "react";
import "./botao_converse_com_um_agente.css";
import ShoppingBag from "../../assets/shopping-bag.webp";
import ShoppingBagHover from "../../assets/shopping-bag_hover.webp";

export default function BotaoConverseComUmAgente() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      className="botao_converse_com_um_agente"
      href="https://wa.me/556281872854"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#fff" : "#1486c9",
        border: "1px solid #1486c9",
      }}
    >
      <div
        className="icon_botao_converse_com_um_agente"
        style={{
          backgroundImage: `url(${hovered ? ShoppingBagHover : ShoppingBag})`,
        }}
      />
      <p
        className="text_botao_converse_com_um_agente"
        style={{
          color: hovered ? "#1486c9" : "rgba(255,255,255,0.95)",
        }}
      >
        Converse com um agente
      </p>
    </a>
  );
}
