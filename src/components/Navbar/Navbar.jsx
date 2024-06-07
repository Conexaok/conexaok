import React, { useState, useEffect } from "react";
import Logo from "../../assets/website/logo.png";
import { FaWhatsapp, FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import DarkMode from "../Navbar/DarkMode";  // Ajuste o caminho conforme necessário
import { Link } from "react-scroll";

// Itens do menu principal
const Menu = [
  { id: 1, name: "Início", link: "Inicio" },
  { id: 2, name: "Sobre", link: "Sobre" },
  { id: 3, name: "Stands", link: "Stands" },
  { id: 4, name: "Brindes", link: "Brindes" },
  { id: 5, name: "Gráfica", link: "Grafica" },
];

// Itens do dropdown
const DropdownLinks = [
  { id: 1, name: "Estruturas", link: "TopProducts" },
  { id: 2, name: "Movéis", link: "TopProducts" },
  { id: 3, name: "Eletro", link: "TopProducts" },
  { id: 4, name: "Equipamentos", link: "TopProducts" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = '558195042474';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappLink, '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`fixed top-0 left-0 w-full shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-50 ${isScrolled ? "bg-opacity-90" : "bg-opacity-100"}`}>
      {/* Navbar superior */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            {/* Logo */}
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-40" />
            </a>
          </div>

          {/* Barra de busca e botão de pedido */}
          <div className="flex justify-between items-center gap-4">
            {/* Botão de pedido */}
            <button
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Fale conosco
              </span>
              <FaWhatsapp className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>

            {/* Botão de menu móvel */}
            <div className="sm:hidden">
              <button onClick={toggleMobileMenu} className="text-xl">
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar inferior */}
      <div className={`flex justify-center sm:flex ${isMobileMenuOpen ? "block" : "hidden"} sm:block`}>
        <ul className="flex flex-col sm:flex-row items-center gap-4">
          {/* Itens do menu principal */}
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="inline-block px-4 py-2 hover:text-sky-500 duration-200 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {data.name}
              </Link>
            </li>
          ))}
          {/* Dropdown simples */}
          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-[2px] py-2 cursor-pointer">
              <Link
                to="TopProducts"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="flex items-center gap-[2px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Locações
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </Link>
            </div>
            {/* Itens do dropdown */}
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
