import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "auto",
    width: "100%",
  };

  const FooterLinks = [
    {
      title: "Inicio",
      link: "/#",
    },
    {
      title: "Sobre",
      link: "/#about",
    },
    {
      title: "Stand",
      link: "/#contact",
    },
    {
      title: "Brindes",
      link: "/#blog",
    },
    {
      title: "Gráfica",
      link: "/#blog",
    },
    {
      title: "Contato",
      link: "/#blog",
    },
  ];

  return (
    <div style={BannerImg} className="text-white">
      <div className="container pb-16 flex justify-center">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-5 pt-5">
          {/* company details */}
          <div className="py-3 px-2 text-center">
            <h1 className="sm:text-3xl text-xl font-bold mb-3 flex items-center justify-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[60px]" />
              Conexão <strong>k</strong>
            </h1>
            <p className="text-lg">
              Conectando ideias, marcas e pessoas!
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 justify-center">
            <div>
              <div className="py-3 px-2 text-center">
                <h1 className="sm:text-xl text-lg font-bold mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-blue-500 hover:underline duration-300 text-white text-center"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6 justify-center">
                <a href="https://www.instagram.com/conexaokeventos/" target="blank">
                  <FaInstagram className="text-3xl hover:text-blue-500" />
                </a>
                <a href="https://www.facebook.com/Conexaokshows" target="_blank">
                  <FaFacebook className="text-3xl hover:text-blue-500" />
                </a>
                <a href="https://www.linkedin.com/in/conexaok/" target="_blank">
                  <FaLinkedin className="text-3xl hover:text-blue-500" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=558195042474" target="_blank">
                  <FaWhatsapp className="text-3xl hover:text-blue-500" />
                </a>
              </div>
              <div className="mt-6 text-center">
                <div className="flex items-center gap-3 justify-center">
                  <FaLocationArrow className="hover:text-blue-500" />
                  <p>Rua Arthur Heleno de Souza, 111</p>
                </div>
                <div className="flex items-center gap-3 mt-3 justify-center">
                  <FaMobileAlt className="hover:text-blue-500" />
                  <p>+55 81 9.9504-2474</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
