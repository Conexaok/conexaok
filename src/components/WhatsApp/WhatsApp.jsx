import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsApp = () => {
  const openWhatsApp = () => {
    const phoneNumber = '558195042474'; // Substitua pelo número de telefone desejado
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappLink, '_blank');
  };
};

export default WhatsApp;
