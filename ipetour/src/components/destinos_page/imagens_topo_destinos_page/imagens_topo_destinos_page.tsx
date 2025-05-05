import "./imagens_topo_destinos_page.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import DestinosPortugues from "../../../assets/destinos_imperdiveis_lingua_portuguesa.jpg";
import LevarMala from "../../../assets/o_que_posso_levar_na_mala.jpg";
import DocumentosNecessarios from "../../../assets/quais_documentos_preciso.png";

function ImagensTopoDestinoPage() {
  const imagensCarrossel = [
    {
      id: "oQueLevarNaMala",
      image: LevarMala,
    },
    {
      id: "destinosImperdiveisLingPort",
      image: DestinosPortugues,
    },
    {
      id: "quaisDocumentosLevar",
      image: DocumentosNecessarios,
    },
  ];

  return (
    <div className="imagens_topo_destinos_page">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        speed={1000}
      >
        {imagensCarrossel.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt="Carrossel de Imagens"
              className="imagens_slider_imagens_topo_destinos_page"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImagensTopoDestinoPage;
