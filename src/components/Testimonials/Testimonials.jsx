import React from "react";
import Slider from "react-slick";
import trf1 from "../../assets/about/1.jpeg";
import trf2 from "../../assets/about/2.jpeg";
import trf3 from "../../assets/about/3.jpeg";

const TestimonialData = [
  {
    id: 1,
    name: "Karlus Demetrius",
    title: "Sócio",
    text: "A Conexão K não apenas transformou nossa visão em realidade; eles a catapultaram para o futuro. Com uma fusão única de criatividade e compromisso, cada detalhe foi meticulosamente trabalhado, não apenas para atender, mas para superar nossas expectativas. Aqui, a inovação não é apenas uma palavra - é o tecido do nosso sucesso.",
    img: trf1,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="Sobre" className="py-10 mb-10 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
            Sobre
          </h1>
        </div>

        <div className="mb-10 px-4">
          <h2 className="text-xl md:text-2xl font-medium text-center text-gray-800 dark:text-gray-200 leading-relaxed space-y-4">
            <span className="block font-bold">Missão:</span> 
            Conectar marcas e ideias através de soluções completas e personalizadas, com criatividade e excelência em cada detalhe.
            <br /><br />
            <span className="block font-bold">Visão:</span> 
            Ser uma empresa referência, reconhecida pelo profissionalismo, inovação e amplo portfólio, que conecta soluções para impulsionar o sucesso dos nossos clientes.
            <br /><br />
            <span className="block font-bold">Excelência:</span> Promovemos a mais alta qualidade em tudo que fazemos e ofertamos.
            <br /><br />
            <span className="block font-bold">Criatividade:</span> Sempre buscamos inovação e ousadia, através da pesquisa constante de novas ideias e soluções.
            <br /><br />
            <span className="block font-bold">Compromisso:</span> Somos dedicados aos nossos clientes e parceiros.
            <br /><br />
            <span className="block font-bold">Sustentabilidade:</span> Somos comprometidos em oferecer soluções que ofereçam o mínimo impacto ambiental possível.
            <br /><br />
            <span className="block font-bold">Conexão:</span> Acreditamos na força da conexão entre marcas, pessoas e soluções.
          </h2>
        </div>

        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col items-center gap-4 shadow-lg py-3 px-1 mx-1 rounded-xl dark:bg-gray-800 bg-white relative transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-full min-h-[400px] max-h-[400px]">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-24 h-24 object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="space-y-3 text-center">
                      <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {data.name}
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {data.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 transform translate-x-2 -translate-y-1">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
