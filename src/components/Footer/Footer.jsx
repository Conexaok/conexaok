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

// Componente Footer
const Footer = () => {
  return (
    <footer
      className="relative bg-sky-700 dark:bg-black py-12 w-full"
      style={{
        backgroundImage: `url(${FundoFooter1}), url(${FundoFooter2})`,
        backgroundPosition: "left, right top",
        backgroundSize: "50% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="container mx-auto px-4 text-black dark:text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Coluna 1: Logo e texto */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img
                src={LogoBranca}
                alt="Logo Conexx"
                className="max-w-[200px] dark:bg-white p-2 mb-3"
              />
            </a>

            <p className="text-[#00FF66] font-medium">
              Conectando ideias, marcas e pessoas!
            </p>
          </div>

          {/* Coluna 2: Informações de contato */}
          <div className="flex flex-col items-center md:items-start gap-4 md:ml-8">
            <ContactInfo icon={iconCel} text="81 9.9504-2474 / 81 9.9431-8149" />
            <ContactInfo icon={iconEmail} text="atendimento@conexaokf.com.br" />
            <ContactInfo icon={iconLoc} text="Rua Arthur Heleno de Souza, 111" />
          </div>


          {/* Coluna 3: Redes sociais, centralizada */}
          <div className="flex justify-center items-center gap-4">
            <SocialIcon
              href="https://www.instagram.com/conexaokeventos/"
              label="Instagram"
              Icon={FaInstagram}
            />
            <SocialIcon
              href="https://www.facebook.com/Conexaokshows"
              label="Facebook"
              Icon={FaFacebook}
            />
            <SocialIcon
              href="https://www.linkedin.com/in/conexaok/"
              label="LinkedIn"
              Icon={FaLinkedin}
            />
            <SocialIcon
              href="https://api.whatsapp.com/send?phone=558195042474"
              label="WhatsApp"
              Icon={FaWhatsapp}
            />
          </div>
        </div>
      </section>
    </footer>
  );
};

// Componente para renderizar cada ícone de contato
const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center gap-3">
    <img
      src={icon}
      alt=""
      className="w-5 h-5 filter-green"
    />
    <p className="text-[#27ea67] font-medium">{text}</p>
  </div>
);

// Componente para renderizar ícones de redes sociais com aria-label
const SocialIcon = ({ href, label, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="hover:text-sky-500"
  >
    <Icon className="text-3xl text-[#00FF66]" />
  </a>
);

export default Footer;
