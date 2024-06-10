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
  {
    id: 2,
    name: "Ana Paula",
    title: "Sócia",
    text: "Parceira inigualável, a Conexão K não apenas nos proporcionou uma experiência incrível, mas também nos impulsionou rumo ao sucesso. Sua abordagem profissional e apaixonada vai além do esperado, entregando resultados que transcendem a excepcionalidade. Aqui, cada projeto é uma jornada de excelência e inovação, moldada pela determinação de criar um impacto duradouro.",
    img: trf2,
  },
  {
    id: 3,
    name: "Cristina Severina",
    title: "Atendimento",
    text: "A sinergia da equipe da Conexão K é um verdadeiro catalisador para o sucesso. Com uma mentalidade inovadora e uma dedicação incomparável, eles não apenas compreendem as necessidades do cliente, mas as antecipam, transformando cada evento em uma experiência memorável. Aqui, a excelência é a norma e a criatividade é o combustível que alimenta nossa jornada em direção ao extraordinário.",
    img: trf3,
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
            Conectar ideias, marcas e pessoas de maneira inovadora e memorável, criando experiências que inspiram e transformam.
            <br /><br />
            <span className="block font-bold">Visão:</span> 
            Ser a agência líder em eventos e marketing, reconhecida por nossa criatividade, qualidade excepcional e compromisso inabalável com a satisfação de nossos clientes.
            <br /><br />
            <span className="block font-bold mt-2">Valores / Criatividade:</span> Buscamos constantemente soluções inovadoras e inspiradoras para atender às necessidades de nossos clientes e surpreender o público.
            <br /><br />
            <span className="block font-bold">Excelência:</span> Comprometemo-nos com padrões de qualidade excepcionais em todos os aspectos do nosso trabalho, desde o planejamento até a execução.
            <br /><br />
            <span className="block font-bold">Integridade:</span> Agimos com honestidade, ética e transparência em todos os relacionamentos e transações, construindo confiança duradoura.
            <br /><br />
            <span className="block font-bold">Trabalho em Equipe:</span> Acreditamos que a colaboração é essencial para o sucesso e valorizamos a diversidade de talentos e perspectivas em nossa equipe.
            <br /><br />
            <span className="block font-bold">Compromisso com o Cliente:</span> Colocamos os interesses e as necessidades de nossos clientes em primeiro lugar, sempre nos esforçando para superar suas expectativas.
            <br /><br />
            <span className="block font-bold">Responsabilidade Social e Ambiental:</span> Assumimos a responsabilidade de sermos cidadãos corporativos conscientes, contribuindo para o bem-estar da comunidade e minimizando nosso impacto no meio ambiente.
            <br /><br />
            <span className="block font-bold">Aprendizado Contínuo:</span> Buscamos constantemente novos conhecimentos e aprendizado, adaptando-nos às mudanças no mercado e mantendo-nos atualizados com as tendências mais recentes.
            <br /><br />
            Essa missão, visão e valores refletem o compromisso da Agência Conexão K com a excelência, a inovação e a integridade em tudo o que fazemos, enquanto mantemos um foco contínuo na satisfação de nossos clientes e no impacto positivo que criamos em nossa comunidade.
          </h2>
        </div>

        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col items-center gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-white relative transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
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
