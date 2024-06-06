import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/conexaok2.png";
import Image2 from "../../assets/hero/conexaok1.png";
import Image3 from "../../assets/hero/conexaok3.png";
import Image4 from "../../assets/hero/conexaok4.jpg";
import Image5 from "../../assets/hero/conexao.jpg";
//

// Lista de imagens e informações para exibição no slider
const ImageList = [
  { id: 1, img: Image1 },
  { id: 3, img: Image2 },
  { id: 5, img: Image5 },
  { id: 4, img: Image3 },
  { id: 2, img: Image4 },
];

const Hero = ({ handleOrderPopup }) => {
  // Função para abrir o WhatsApp
  const openWhatsApp = () => {
    // Número de telefone completo com código do país e DDD
    const phoneNumber = '558195042474';
    // URL do link do WhatsApp com o número de telefone
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    // Abrir uma nova janela do navegador com o link do WhatsApp
    window.open(whatsappLink, '_blank');
  };

  // Configurações do slider
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1200,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 943000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    appendDots: dots => (
      <ul className="m-0 p-0"> {dots} </ul>
    ),
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* Padrão de fundo */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* Seção do herói */}
      <div className="container pb-8 sm:pb-0">
        {/* Slider */}
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Seção de conteúdo de texto */}
                
                </div>
                {/* Seção de imagem */}
                <div className="order-1 sm:order-1  ">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-1 "
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300%] h-[300%] sm:h-[450%] sm:w-[1150%] sm:scale-auto lg:scale-auto  rounded"
                    />
                  {data.id === 3 && (
                    <button
                      onClick={openWhatsApp}
                      className="absolute bottom-[10%] w-[20%] right-[30%] m-[3%] p-[4%] rounded-md text-black text-center font-bold shadow-lg  bg-transparent
                      hover:bg-blue-200  hover:opacity-30 hover:shadow-md transition duration-200"
                    >
                    </button>
                  )}
                  </div>
                </div>
              </div>
            
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;