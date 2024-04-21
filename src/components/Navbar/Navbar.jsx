import React from "react";
import Logo from "../../assets/logo.png";
import { FaWhatsapp } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

// Itens do menu principal
const Menu = [
  {
    id:1,
    name: "Início", 
    link: "/#Inicio",
  },
  {
    id:2,
    name: "Sobre",
    link: "/#Sobre",
  },
  {
    id: 3,
    name: "Stands",
    link: "/#Stands",
  },
  {
    id: 4,
    name: "Brindes",
    link: "/#Brindes",
  },
  {
    id: 5,
    name: "Gráfica",
    link: "/#Grafica",
  },
];

// Itens do dropdown
const DropdownLinks = [
  {
    id: 1,
    name: "Estruturas",
    link: "/#",
  },
  {
    id: 2,
    name: "Movéis",
    link: "/#",
  },
  {
    id: 3,
    name: "Eletro",
    link: "/#",
  },
  {
    id: 3,
    name: "Equipamentos",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Navbar superior */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            {/* Logo */}
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Conexão K
            </a>
          </div>

          {/* Barra de busca e botão de pedido */}
          <div className="flex justify-between items-center gap-4">
            {/* Botão de pedido */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
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
          </div>
        </div>
      </div>

      {/* Navbar inferior */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {/* Itens do menu principal */}
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Dropdown simples */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Locações
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            {/* Itens do dropdown */}
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
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
