import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/conexaok1.png";
import Image2 from "../../assets/hero/conexaok2.png";
import Image3 from "../../assets/hero/conexaok3.png";
import Image4 from "../../assets/hero/conexaok4.png";

// Lista de imagens e informações para exibição no slider
const ImageList = [
  { id: 1, img: Image1 },
  { id: 2, img: Image4 },
  { id: 3, img: Image2 },
  { id: 4, img: Image3 },
];

const HeroMobile = () => {
  // Configurações do slider (ajustadas para mobile)
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    appendDots: dots => (
      <ul className="m-0 p-0"> {dots} </ul>
    ),
  };

  return (
    <div className="relative overflow-hidden min-h-[400px] bg-sky-700 flex justify-center items-center dark:bg-gray-950 dark:bg-sky-500 dark:text-white duration-200 mt-8">
      {/* Seção do herói */}
      <div className="container pb-8 mx-auto px-4">
        {/* Slider */}
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="flex justify-center items-center">
                <div
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className="relative z-1 w-full h-full"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="w-full h-auto max-h-[300px] object-contain rounded mx-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroMobile;
