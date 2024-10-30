import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import LogoBranca from "../../assets/website/LogoBranca.png";
import FundoFooter1 from "../../assets/website/FundoFooter1.png";
import FundoFooter2 from "../../assets/website/FundoFooter2.png";
import iconCel from "../../assets/website/icoCel.png";
import iconEmail from "../../assets/website/iconEmail.png";
import iconLoc from "../../assets/website/iconLoc.png";

const Footer = () => {
  return (
    <div
      className="relative bg-sky-700 dark:bg-black py-12 w-full"
      style={{
        backgroundImage: `url(${FundoFooter1}), url(${FundoFooter2})`,
        backgroundPosition: "left, right top",
        backgroundSize: "50% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="container mx-auto text-black dark:text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Coluna 1: Logo e texto */}
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold flex items-center gap-3 mb-3">
              <img
                src={LogoBranca}
                alt="Logo Conexx"
                className="max-w-[200px] dark:bg-white p-2"
              />
            </h1>
            <p className="text-left text-[#00FF66] font-medium">
              Conectando ideias, marcas e pessoas!
            </p>
          </div>

          {/* Coluna 2: Informações de contato */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <img
                src={iconCel}
                alt="Ícone Celular"
                className="w-5 h-5"
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(82%) sepia(94%) saturate(625%) hue-rotate(70deg) brightness(96%) contrast(93%)',
                }}
              />
              <p className="text-[#27ea67] font-medium">
                81 9.9504-2474 / 81 9.9431-8149
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={iconEmail}
                alt="Ícone Email"
                className="w-5 h-5"
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(82%) sepia(94%) saturate(625%) hue-rotate(70deg) brightness(96%) contrast(93%)',
                }}
              />
              <p className="text-[#27ea67] font-medium">
                atendimento@conexaokf.com.br
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={iconLoc}
                alt="Ícone Localização"
                className="w-5 h-5"
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(82%) sepia(94%) saturate(625%) hue-rotate(70deg) brightness(96%) contrast(93%)',
                }}
              />
              <p className="text-[#27ea67] font-medium">
                Rua Arthur Heleno de Souza, 111
              </p>
            </div>
          </div>

          {/* Coluna 3: Redes sociais */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/conexaokeventos/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500"
            >
              <FaInstagram className="text-3xl text-[#00FF66]" />
            </a>
            <a
              href="https://www.facebook.com/Conexaokshows"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500"
            >
              <FaFacebook className="text-3xl text-[#00FF66]" />
            </a>
            <a
              href="https://www.linkedin.com/in/conexaok/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500"
            >
              <FaLinkedin className="text-3xl text-[#00FF66]" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=558195042474"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500"
            >
              <FaWhatsapp className="text-3xl text-[#00FF66]" />
            </a>
          </div>
        </div>
      </section>

      <div className="text-center py-6 bg-[#00FF66] font-sans font-medium">
        © 2024 Conexão K. Todos os direitos reservados.
      </div>
    </div>
  );
};

export default Footer;
