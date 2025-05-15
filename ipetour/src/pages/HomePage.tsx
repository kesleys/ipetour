import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import ImagensTopoMainHome from "../components/homepage/imagens_swaper_topo_main_home/imagens_swaper_topo_main_home";
import NossoCompromissoMain from "../components/homepage/main_home_nosso_compromisso/main_home_nosso_compromisso";
import CardsTiposTurismoHome from "../components/homepage/main_home_tipos_turismo_cards/main_home_tipos_turismo_cards";
import MainHomeTurismoTropical from "../components/homepage/main_home_turismo_tropical/main_home_turismo_tropical";
import MainVamosLa from "../components/homepage/main_home_vamos_la/main_home_vamos_la";
import CardsOfertasTemporada from "../components/homepage/ofertas_da_temporada_homepage/conteiner_cards_homepage";

export default function HomePage() {
  return (
    <div>
      <Header />
      <ImagensTopoMainHome />
      <MainVamosLa />
      <CardsOfertasTemporada />
      <MainHomeTurismoTropical />
      <NossoCompromissoMain />
      <CardsTiposTurismoHome />
      <Footer />
    </div>
  );
}
