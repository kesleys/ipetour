import NaoEncontrouAinda from "../components/destinos_page/ainda_nao_encontrou_destinos_page/ainda_nao_encontrou_destinos_page";
import EncontrePerfeitos from "../components/destinos_page/encontre_perfeitos_destinos_page/encontre_perfeitos_destinos_page";
import ExploreGoias from "../components/destinos_page/explore_goias_destino_page/explore_goias_destino_page";
import ImagensTopoDestinoPage from "../components/destinos_page/imagens_topo_destinos_page/imagens_topo_destinos_page";
import OutrosTopicos from "../components/destinos_page/outros_topicos_destinos_page/outros_topicos_destinos_page";
import TurismoInternacionalDestinos from "../components/destinos_page/turismos_internacional_destinos_page/turismo_internacional_destinos_page";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import nuvemCeuAberto from "../assets/nuvem-ceu-aberto.jpg";
import React from "react";

const nuvemFundoStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  width: "1512px",
  height: "950px",
  margin: "auto",
  backgroundImage: `url(${nuvemCeuAberto})`,
  justifyItems: "center",
  flexDirection: "column",
};

export default function DestinosPage() {
  return (
    <div>
      <Header />
      <ImagensTopoDestinoPage />
      <TurismoInternacionalDestinos />
      <div style={nuvemFundoStyle}>
        <EncontrePerfeitos />
        <ExploreGoias />
      </div>
      <NaoEncontrouAinda />
      <OutrosTopicos />
      <Footer />
    </div>
  );
}
