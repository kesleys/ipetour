import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import ImagensTopoMainHome from "../components/homepage/imagens_swaper_topo_main_home/imagens_swaper_topo_main_home";
import MainHomeCards from "../components/homepage/main_home_cards/main_home_cards";
import NossoCompromissoMain from "../components/homepage/main_home_nosso_compromisso/main_home_nosso_compromisso";
import CardsTiposTurismoHome from "../components/homepage/main_home_tipos_turismo_cards/main_home_tipos_turismo_cards";
import MainHomeTurismoTropical from "../components/homepage/main_home_turismo_tropical/main_home_turismo_tropical";
import MainVamosLa from "../components/homepage/main_home_vamos_la/main_home_vamos_la";

export default function HomePage() {
  return (
    <div>
      <Header />
      <ImagensTopoMainHome />
      <MainVamosLa />
      <MainHomeCards />
      <MainHomeTurismoTropical />
      <NossoCompromissoMain />
      <CardsTiposTurismoHome />
      <Footer />
    </div>
  );
}
