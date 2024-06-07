import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMobileAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";

// Definindo opções de serviços da empresa
const ServiceOptions = [
  {
    title: "Serviços da Empresa",
  },
  {
    title: "Serviço de Gráfica",
  },
  {
    title: "Confecções de Brindes",
  },
  {
    title: "Mão de Obra Especializada",
  },
  {
    title: "Áudio e Vídeo",
  },
];

// Definindo links do rodapé
const FooterLinks = [
  {
    title: "Início",
    link: "/#",
  },
  {
    title: "Sobre",
    link: "/#Sobre",
  },
  {
    title: "Stands",
    link: "/#Stands",
  },
  {
    title: "Gráfica",
    link: "/#Grafica",
  },
  {
    title: "Locações",
    link: "/#blog",
  },
];

// Componente do rodapé
const Footer = () => {
  return (
    // Div com a cor de fundo cyan-200 no modo claro e preto no modo escuro
    <div className="bg-sky-700 dark:bg-black">
      {/* Seção do rodapé */}
      <section className="container mx-auto text-black dark:text-white">
        {/* Grid com três colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-5 justify-items-center">
          {/* Coluna 1: Informações de contato */}
          <div className="py-8 px-4">
            {/* Título com o nome da empresa e logo */}
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-center mb-3 flex items-center justify-center gap-3">
              <div className="dark:bg-white p-2">
                <img
                  src={footerLogo}
                  alt="Logo"
                  className="max-w-[200px]"
                />
              </div>
            </h1>
            {/* Descrição da empresa */}
            <p className="text-center">Conectando ideias, marcas e pessoas!</p>
            <br />
            {/* Informações de contato */}
            <div className="flex flex-col items-center gap-3">
              {/* Número de telefone */}
              <div className="flex items-center gap-3">
                <FaMobileAlt />
                <p>+55 81 9.9504-2474</p>
              </div>
              {/* Endereço */}
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <p>Rua Arthur Heleno de Souza, 111</p>
              </div>
              {/* Links para redes sociais e WhatsApp */}
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/conexaokeventos/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-3xl hover:text-sky-500" />
                </a>
                <a href="https://www.facebook.com/Conexaokshows" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-3xl hover:text-sky-500" />
                </a>
                <a href="https://www.linkedin.com/in/conexaok/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-3xl hover:text-sky-500" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=558195042474" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-3xl hover:text-sky-500" />
                </a>
              </div>
            </div>
          </div>
          {/* Coluna 2: Opções de serviços */}
          <div className="py-8 px-4 flex flex-col justify-center items-center">
            {/* Título */}
            <h1 className="sm:text-xl text-xl font-bold text-center mb-3">
              Opções de Serviços
            </h1>
            {/* Lista de opções de serviços */}
            <ul className="flex flex-col gap-3 items-center">
              {ServiceOptions.map((option, index) => (
                <li key={index} className="text-gray-950 text-center dark:text-white">
                  <span>&#11162;</span>
                  <span>{option.title}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Coluna 3: Links */}
          <div className="py-8 px-4 flex flex-col justify-center items-center">
            {/* Título */}
            <h1 className="sm:text-xl text-xl font-bold text-center mb-3">
              Links
            </h1>
            {/* Lista de links */}
            <ul className="flex flex-col gap-3 items-center">
              {FooterLinks.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-gray-950 text-center transition-colors duration-300 hover:text-sky-500 dark:text-white"
                  onClick={() => (window.location.href = link.link)}
                >
                  <span>&#11162;</span>
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Rodapé com o ano de copyright */}
        <div className="text-center py-10 border-t-2 border-gray-300/50">
          &copy; 2024 Conexão K. Todos os direitos reservados.
        </div>
      </section>
    </div>
  );
};

export default Footer;
