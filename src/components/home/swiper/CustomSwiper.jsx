import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Button } from "react-bootstrap";
import "./CustomSwiper.css";
import { Link } from "react-router-dom";

function CustomSwiper({ Slide_de_proyectos }) {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
      setActiveIndex(activeIndex + 1);
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleSlideChange = () => {
    if (swiper) {
      setActiveIndex(swiper.activeIndex);
    }
  };

  return (
    <div>
      <h3 className="text-center text-light custom-swiper mt-5">Proyectos</h3>
      <Swiper
        spaceBetween={10}
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        slidesPerView={1} // 3
        onSwiper={(s) => setSwiper(s)}
        onSlideChange={handleSlideChange}
        centeredSlides="true"
        className="swiper_container mb-5"
      >
        {Slide_de_proyectos.map((proyectos) => (
          <SwiperSlide key={proyectos.id} className="carousel_proyecto">
            <img src={proyectos.Imagen} alt={proyectos.id} />
            <div className="informacion-proyecto d-flex flex-column text-light px-5">
              <h3>{proyectos.Nombre}</h3>
              <p>{proyectos.Descripcion}</p>
              <a href={proyectos.Link} target="_blank" className="d-flex">
                <Button variant="success">Ir a la Página</Button>
              </a>
            </div>
          </SwiperSlide>
        ))}

        <div className="slider_controller d-flex">
          <div className="swiper_button_prev slider_arrow">
            <Button
              onClick={() => {
                goPrev();
              }}
            >
              &lt;
            </Button>
          </div>
          <div className="swiper_button_next slider_arrow">
            <Button
              onClick={() => {
                goNext();
              }}
            >
              &gt;
            </Button>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default CustomSwiper;
