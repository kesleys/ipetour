import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import MelhorExperienciaEmViagens from "../components/quem_somos/a_melhor_experiencia_em_viagens_quem_somos/a_melhor_experiencia_em_viagens_quem_somos";
import DiretoDeGoiania from "../components/quem_somos/direto_de_goiania_quem_somos/direto_de_goiania_quem_somos";
import ImagemPaisagemQuemSomos from "../components/quem_somos/imagem_paisagem_quem_somos/imagem_paisagem_quem_somos";
import NossoCompromissoQuemSomos from "../components/quem_somos/nosso_compromisso_quem_somos/nosso_compromisso_quem_somos";
import SuaViagemSemComplicacoes from "../components/quem_somos/sua_viagem_sem_complicacoes_quem_somos/sua_viagem_sem_complicacoes_quem_somos";
import CardsTiposServicosQuemSomos from "../components/quem_somos/tipos_de_servicos_cards_quem_somos/tipos_de_servicos_cards_quem_somos";

export default function QuemSomosPage() {
  return (
    <div>
      <Header />
      <DiretoDeGoiania />
      <ImagemPaisagemQuemSomos />
      <MelhorExperienciaEmViagens />
      <SuaViagemSemComplicacoes />
      <NossoCompromissoQuemSomos />
      <CardsTiposServicosQuemSomos />
      <Footer />
    </div>
  );
}
