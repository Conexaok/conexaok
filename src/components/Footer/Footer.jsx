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

const Footer = () => {
  return (
    <div className="bg-green-200 dark:bg-gray-950">
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-center mb-3 flex items-center justify-center md:justify-start gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Conexão K
            </h1>
            <p className="text-center md:text-left">Conectando ideias, marcas e pessoas!</p>
            <br />
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-3">
                <FaMobileAlt />
                <p>+55 81 9.9504-2474</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <p>Rua Arthur Heleno de Souza, 111</p>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/conexaokeventos/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-3xl hover:text-blue-500" />
                </a>
                <a href="https://www.facebook.com/Conexaokshows" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-3xl hover:text-blue-500" />
                </a>
                <a href="https://www.linkedin.com/in/conexaok/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-3xl hover:text-blue-500" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=558195042474" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-3xl hover:text-blue-500" />
                </a>
              </div>
            </div>
          </div>
          <div className="py-8 px-4 flex flex-col justify-center items-center">
            <h1 className="sm:text-xl text-xl font-bold text-center sm:text-right mb-3">
              Opções de Serviços
            </h1>
            <ul className={`flex flex-col gap-3 items-center md:items-start`}>
              {ServiceOptions.map((option, index) => (
                <li
                  key={index}
                  className="text-gray-500 text-left"
                >
                  <span>&#11162;</span>
                  <span>{option.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-8 px-4 flex flex-col justify-center items-center">
            <h1 className="sm:text-xl text-xl font-bold text-center sm:text-left mb-3">
              Links
            </h1>
            <ul className="flex flex-col gap-3 items-center md:items-start">
              {FooterLinks.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-gray-500 text-left transition-colors duration-300 hover:text-green-700"
                  onClick={() => window.location.href = link.link}
                >
                  <span>&#11162;</span>
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center py-10 border-t-2 border-gray-300/50">
          @copyright 2024
        </div>
      </section>
    </div>
  );
};

export default Footer;
