import React from "react";
import Slider from "react-slick";

import Image1 from "../../assets/hero/conexaok2.png";
import Image2 from "../../assets/hero/conexaok1.png";
import Image3 from "../../assets/hero/conexaok3.png";
import Image4 from "../../assets/hero/conexaok4.png";

// Lista de imagens e informações para exibição no slider
const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Faça já Seu Orçamento Com a Melhor Produtora Do Mercado",
    description:
      "Transforme seu evento em uma experiência inesquecível com nosso aluguel de som, luz cênica e estrutura e muito mais Entre em contato e garanta a atmosfera perfeita para sua comemoração.",
  },
  {
    id: 2,
    img: Image4,
    title: "Temos Tudo Que Você Precisa Para Seu Evento",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image2,
    title: "Venha Para Conexão K",
    description:
      "Entre Em Contato Conosco e Solicite Já Seu Orçamento, Os Melhores Preços Do Mercado Você Encontra Aqui!",
  },
  {
    id: 4,
    img: Image3,
    title: "Não Perca Tempo e Corre, Que Temos Ótima Oportunidade Para Você",
    description:
      "Conexão K, conectando marcas, ideias e pessoas! 🚀",
  },
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
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1200,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
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
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    {/* Botão para solicitar orçamento */}
                    <button
                      onClick={openWhatsApp}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Solicite seu orçamento
                    </button>
                  </div>
                </div>
                {/* Seção de imagem */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
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
