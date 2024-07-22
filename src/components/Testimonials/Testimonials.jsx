import React from "react";


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
      </div>
    </div>
  );
};

export default Testimonials;
