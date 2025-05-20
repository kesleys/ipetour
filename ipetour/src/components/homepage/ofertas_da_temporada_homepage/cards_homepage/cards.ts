import HotelCardumas from "../../../../assets/hotel_cardumas.webp";
import HotelSaoPaulo from "../../../../assets/imagem_sao_paulo_cards_homepage.webp";

export interface CardInfo {
  id: string;
  desconto: number;
  partida: string;
  chegada: string;
  nomeHotel: string;
  imagemHotel: string;
  preco: number;
  precoAntigo: number;
  link: string;
}

export const cards: CardInfo[] = [
  {
    id: "Goiania-Argentina",
    desconto: 15,
    partida: "Goiânia/Argentina",
    chegada: "Buenos Aires",
    nomeHotel: "Hotel Cardumas",
    imagemHotel: HotelCardumas,
    preco: 650,
    precoAntigo: 820,
    link: "https://wa.me/556281872854",
  },
  {
    id: "Goiania-SaoPaulo",
    desconto: 30,
    partida: "Goiânia/São Paulo",
    chegada: "São Paulo",
    nomeHotel: "Hotel São Paulo",
    imagemHotel: HotelSaoPaulo,
    preco: 420,
    precoAntigo: 540,
    link: "https://wa.me/556281872854",
  },
  {
    id: "Goiania-SaoPaaaulo",
    desconto: 30,
    partida: "Goiânia/São Paulo",
    chegada: "São Paulo",
    nomeHotel: "Hotel São Paulo",
    imagemHotel: HotelSaoPaulo,
    preco: 420,
    precoAntigo: 540,
    link: "https://wa.me/556281872854",
  },
  {
    id: "Goiania-SaoPssssulo",
    desconto: 30,
    partida: "Goiânia/São Paulo",
    chegada: "São Paulo",
    nomeHotel: "Hotel São Paulo",
    imagemHotel: HotelSaoPaulo,
    preco: 420,
    precoAntigo: 540,
    link: "https://wa.me/556281872854",
  },
  {
    id: "Goiania-SaoPadddulo",
    desconto: 30,
    partida: "Goiânia/São Paulo",
    chegada: "São Paulo",
    nomeHotel: "Hotel São Paulo",
    imagemHotel: HotelSaoPaulo,
    preco: 420,
    precoAntigo: 540,
    link: "https://wa.me/556281872854",
  },
];
