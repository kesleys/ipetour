import "./imagens_swaper_topo_main_home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import ImagemOfertasImperdiveis from "../../../assets/ofertas_imperdiveis_imagem_principal.jpg";
import ImagemPacoteRioDeJaneiro from "../../../assets/pacote_rio_de_janeiro_ofertas_especiais.jpg";

function ImagensTopoMainHome() {
  const imagensCarrossel = [
    {
      id: "ofertasImperdiveis",
      image: ImagemOfertasImperdiveis,
    },
    {
      id: "ofertaRioDeJaneiro",
      image: ImagemPacoteRioDeJaneiro,
    },
  ];

  return (
    <div className="imagens_swaper_topo_main_home">
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
              alt="ofertas especiais"
              className="imagens_imagens_swaper_topo_main_home"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImagensTopoMainHome;
