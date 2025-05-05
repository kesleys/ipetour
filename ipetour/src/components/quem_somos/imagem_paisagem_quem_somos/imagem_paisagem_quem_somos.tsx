import "./imagem_paisagem_quem_somos.css";
import PaisagemQuemSomos from "../../../assets/imagem_paisagem_quem_somos.jpg";

export default function ImagemPaisagemQuemSomos() {
  return (
    <img
      src={PaisagemQuemSomos}
      alt="Imagem de Praia"
      className="imagem_paisagem_quem_somos"
    />
  );
}
