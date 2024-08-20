import React from "react";
import trf1 from "../../assets/about/1.jpeg";

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
  const settings = {
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
    <div id="Sobre" className="py-14 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        {/* Seção de cabeçalho */}
        <div className="text-center mb-10 max-w-[600px] mx-auto p-4 rounded-lg shadow-sm bg-gray-100 dark:bg-gray-700">
          <h1 data-aos="fade-up" className="text-4xl font-extrabold tracking-wide text-gray-900 dark:text-white drop-shadow-lg flex items-center justify-center">
            Sobre
          </h1>
        </div>

        {/* Seção de conteúdo */}
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
        {/* Seção de depoimentos */}
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TestimonialData.map((testimonial) => (
              <div
                key={testimonial.id}
                data-aos="fade-up"
                className="relative flex flex-col items-center justify-center rounded-lg bg-white dark:bg-gray-900 hover:bg-blue-100 dark:hover:bg-blue-800 shadow-md transition-transform duration-300 transform hover:scale-105 p-6"
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
