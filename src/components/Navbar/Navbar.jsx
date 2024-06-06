import React, { useState } from 'react';
import Logo from "../../assets/website/logo.png";
import { FaWhatsapp, FaBars, FaTimes, FaCaretDown, FaList } from "react-icons/fa";
import DarkMode from "./DarkMode";
import clsx from "clsx";

const Navbar = ({ handleOrderPopup }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openWhatsApp = () => {
    const phoneNumber = '558195042474';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappLink, '_blank');
  };

  const Menu = [
    { id: 1, name: "Início", link: "/#Inicio" },
    { id: 2, name: "Sobre", link: "/#Sobre" },
    { id: 3, name: "Stands", link: "/#Stands" },
    { id: 4, name: "Brindes", link: "/#Brindes" },
    { id: 5, name: "Gráfica", link: "/#Grafica" },
  ];

  const DropdownLinks = [
    { id: 1, name: "Estruturas", link: "/#" },
    { id: 2, name: "Móveis", link: "/#" },
    { id: 3, name: "Eletro", link: "/#" },
    { id: 4, name: "Equipamentos", link: "/#" },
  ];

  const DrawerMenu = () => (
    <div className={`fixed top-0 left-0 z-40 h-screen p-4 transition-transform transform bg-white w-64 dark:bg-gray-800 ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`} tabIndex="-1" aria-labelledby="drawer-navigation-label">
      <button type="button" onClick={() => setDrawerOpen(false)} aria-controls="drawer-navigation" className="absolute top-2.5 right-2.5">
        <FaTimes className="w-3 h-3" />
        <span className="sr-only">Close menu</span>
      </button>
      <ul className="space-y-2 font-medium">
        {Menu.map((item, index) => (
          <li key={item.id} className="flex items-center">
            <a href={item.link} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 font-sans text-sm font-medium uppercase">
              <span>{item.name}</span>
            </a>
          </li>
        ))}
        {DropdownLinks.map((item, index) => (
          <li key={item.id} className="flex items-center">
            <a href={item.link} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 font-sans text-sm font-medium uppercase">
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <nav className='shadow-md w-full fixed top-0 left-0 bg-white dark:bg-gray-900 transition-colors duration-300 ease-in-out font-sans text-sm font-medium uppercase'>
      <div className='flex justify-between items-center p-5'>
        <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
          <img src={Logo} alt="Logo" className="w-40" /> 
        </a>
        <div className={`flex-1 md:flex items-center justify-center ${mobileMenuOpen ? 'block' : 'hidden'} md:static absolute bg-white dark:bg-gray-900 w-full md:w-auto transition-all duration-300 ease-in-out`}>
          <div className="flex flex-col md:flex-row md:items-center">
            {Menu.map((item, index) => (
              <React.Fragment key={item.id}>
                <a href={item.link} className='mx-6 text-center text-gray-800 dark:text-white hover:text-blue-500 py-2 font-sans text-sm font-medium uppercase'>
                  {item.name}
                </a>
                {index < Menu.length - 1 && <span className="hidden md:inline text-gray-500">|</span>}
              </React.Fragment>
            ))}
            <div className="group relative cursor-pointer py-2 md:py-0">
              <a href="#" className="flex items-center gap-2 font-sans text-sm font-medium uppercase" onClick={() => setDropdownOpen(!dropdownOpen)}>
                Locações <FaCaretDown className={`transition ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
              </a>
              {dropdownOpen && (
                <ul className="md:absolute z-[9999] bg-white dark:bg-gray-800 p-2 text-black dark:text-white shadow-md rounded-md md:top-full md:left-0">
                  {DropdownLinks.map(({ id, name, link }, index) => (
                    <li key={id} className="flex items-center">
                      <a href={link} className="block p-2 hover:bg-primary/20 dark:hover:bg-primary/20 rounded-md font-sans text-sm font-medium uppercase">
                        {name}
                      </a>
                      {index < DropdownLinks.length - 1 && <span className="mx-2 text-gray-500"></span>}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={openWhatsApp} className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-full flex items-center gap-2 hover:bg-primary/90 transition">
            Fale conosco <FaWhatsapp className="text-xl" />
          </button>
          <div className="hidden md:block">
            <DarkMode />
          </div>
          <button className="text-primary dark:text-primary bg-transparent focus:ring-0 p-2.5 md:hidden" type="button" onClick={() => setDrawerOpen(true)}>
            <FaList className="text-xl" />
          </button>
        </div>
      </div>
      {drawerOpen && <DrawerMenu />}
    </nav>
  );
};

export default Navbar;
