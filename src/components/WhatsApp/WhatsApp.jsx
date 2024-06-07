import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsApp = () => {
  const openWhatsApp = () => {
    const phoneNumber = '558195042474'; // Substitua pelo número de telefone desejado
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50 cursor-pointer flex items-center bg-white dark:bg-gray-800 py-2 px-4 rounded-full shadow-lg transition-colors duration-300"
      onClick={openWhatsApp}
    >
      <FontAwesomeIcon
        icon={faWhatsapp}
        size="2x"
        className="text-cyan-600 hover:text-cyan-800 transition-colors duration-300 mr-2"
      />
      <span className="text-cyan-600 hover:text-cyan-800 font-semibold transition-colors duration-300">
        Entre em contato
      </span>
    </div>
  );
};

export default WhatsApp;
