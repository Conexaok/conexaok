import React from "react";
import footerLogo from "../../assets/logo.png";
import {  FaMobileAlt, FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="text-white bg-gradient-to-b from-primary to-secondary">
      <div className="container py-8">
        <div data-aos="zoom-in" className="grid md:grid-cols-2">
          {/* Detalhes da empresa */}
          <div className="py-10 px-8 text-center">
            <h1 className="sm:text-3xl text-xl font-bold mb-3 flex items-center justify-center gap-4">
              <img src={footerLogo} alt="" className="max-w-[60px]" />
              Conexão K
            </h1>
            <p className="text-lg">Conectando ideias, marcas e pessoas!</p>

            {/* Informações de contato */}
            <div className="flex flex-col gap-3 items-center mt-8">
              <div className="flex items-center gap-3 justify-center">
                <CiLocationOn className="text-2xl hover:text-blue-500" />
                <p>R. Artur Heleno de Souza, 111 - JangaPaulista - PE, 53435-310</p>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <FaMobileAlt className="text-2xl hover:text-blue-500" />
                <p>+55 81 9.9504-2474</p>
              </div>
              <div className="flex items-center gap-3 justify-center">
                < MdOutlineMail className="text-2xl hover:text-blue-500" />
                <p>contato@conexaokeventos.com</p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="py-4 text-center">
            <iframe
              title="Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197156.56391517725!2d-34.917058985696835!3d-7.989526293910779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab16518ebfe3c7%3A0x5ad4568054b0179d!2sR.%20Artur%20Heleno%20de%20Souza%2C%20111%20-%20JangaPaulista%2C%20Paulista%20-%20PE%2C%2053435-310!5e0!3m2!1sen!2sbr!4v1649714655733!5m2!1sen!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Links Sociais */}
      <div className="text-center py-4">
        <div className="flex justify-center gap-4">
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
      </div>
    </div>
  );
};

export default Footer;
