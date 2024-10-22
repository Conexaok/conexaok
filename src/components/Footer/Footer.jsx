import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";

const Footer = () => {
  return (
    // Div com a cor de fundo cyan-200 no modo claro e preto no modo escuro
    <div className="bg-sky-700 dark:bg-black">
      {/* Seção do rodapé */}
      <section className="container mx-auto text-black dark:text-white -mt-12 py-12">

        {/* Grid com três colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Coluna 1: Logo e texto à esquerda */}
          <div className="flex flex-col items-start">
            {/* Título com o nome da empresa e logo */}
            <h1 className="text-3xl font-bold flex items-center gap-3 mb-3">
              <div className="dark:bg-white p-2">
                <img
                  src={footerLogo}
                  alt="Logo"
                  className="max-w-[200px]"
                />
              </div>
            </h1>
            {/* Descrição da empresa */}
            <p className="text-left text-[#00FF66] font-medium">Conectando ideias, marcas e pessoas!</p>
          </div>

          {/* Coluna 2: Informações de contato no centro */}
          <div className="flex flex-col items-center gap-3">
            {/* Número de telefone */}
            <div className="flex items-center gap-3">
              <FaMobileAlt style={{ color: '#00FF66' }} />
              <p>81 9.9504-2474 / 81 9.9431-8149</p>
            </div>
            {/* Email */}
            <div className="flex items-center gap-3">
              <FaEnvelope style={{ color: '#00FF66' }} />
              <p>atendimento@conexaokf.com.br</p>
            </div>
            {/* Endereço */}
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt style={{ color: '#00FF66' }} />
              <p>Rua Arthur Heleno de Souza, 111</p>
            </div>

          </div>

          {/* Coluna 3: Ícones de redes sociais à direita */}
          <div className="flex justify-end gap-3">
            <a href="https://www.instagram.com/conexaokeventos/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-[#00FF66] hover:text-sky-500" />
            </a>
            <a href="https://www.facebook.com/Conexaokshows" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl text-[#00FF66] hover:text-sky-500" />
            </a>
            <a href="https://www.linkedin.com/in/conexaok/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-[#00FF66] hover:text-sky-500" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=558195042474" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-3xl text-[#00FF66] hover:text-sky-500" />
            </a>
          </div>

        </div>
      </section>

      <div className="text-center py-6 border-gray-300/50 bg-[#00FF66] font-sans font-medium">
        © 2024 Conexão K. Todos os direitos reservados.
      </div>
    </div>
  );
};

export default Footer;
