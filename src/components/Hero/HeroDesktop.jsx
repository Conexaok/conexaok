import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image1 from "../../assets/hero/conexaok1.png";
import Image2 from "../../assets/hero/conexaok2.png";
import Image3 from "../../assets/hero/conexaok3.png";
import Image4 from "../../assets/hero/conexaok4.png";

// Lista de imagens
const ImageList = [
  { id: 1, img: Image1 },
  { id: 2, img: Image4 },
  { id: 3, img: Image2 },
  { id: 4, img: Image3 },
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden h-screen w-screen bg-sky-700 dark:bg-gray-950 dark:bg-sky-500 dark:text-white transition duration-200">
      {/* Padrão de fundo */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="h-full w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              el: '.swiper-pagination', // Definir um seletor personalizado para a paginação
            }}
            autoplay={{ delay: 5000 }}
            loop={true}
            speed={1200}
            className="h-full w-full"
          >
            {/* Mapeamento das imagens no Swiper */}
            {ImageList.map((data) => (
              <SwiperSlide key={data.id} className="flex justify-center items-center h-full w-full">
                <img
                  src={data.img}
                  alt={`Image ${data.id}`}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Paginação personalizada */}
          <div className="swiper-pagination flex justify-center mt-4 space-x-2">
            {ImageList.map((_, index) => (
              <div
                key={index}
                className="w-5 h-5 bg-white rounded-none border-2 border-green-500 active:bg-green-500"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
