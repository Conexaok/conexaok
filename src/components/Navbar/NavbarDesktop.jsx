import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import Logo from "../../assets/website/logo.png";

const NavbarDesktop = ({ Menu, dropdownOpen, setDropdownOpen, openWhatsApp, topBarVisible }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1078) {
        setMobileMenuOpen(true);
      } else {
        setMobileMenuOpen(false);
      }
    };

    // Adiciona o listener no resize
    window.addEventListener('resize', handleResize);

    // Verifica inicialmente o tamanho da tela
    handleResize();

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="shadow-md w-full fixed top-0 left-0 bg-white dark:bg-gray-900 transition-colors duration-300 ease-in-out text-xs font-medium uppercase" style={{ top: topBarVisible ? '2rem' : '0' }}>
      <div className="flex justify-between items-center py-5 px-4 md:px-8">
        <div className="flex items-center gap-4">
          <a href="#" className="text-2xl font-bold md:text-3xl">
            <img src={Logo} alt="Logo" className="w-32 h-auto object-contain" />
          </a>
        </div>
        <div className={`flex-1 flex items-center justify-center ${mobileMenuOpen ? 'block' : 'hidden'} md:flex`}>
          <div className="flex flex-col md:flex-row md:items-center">
            {Menu.map(item => (
              <React.Fragment key={item.id}>
                {item.dropdown ? (
                  <div className="group relative cursor-pointer py-2 ml-3" onClick={() => setDropdownOpen(dropdownOpen === item.id ? null : item.id)}>
                    <a href="#" className="flex items-center gap-2 text-sm font-medium uppercase">
                      {item.name} <FaCaretDown className={`transition ${dropdownOpen === item.id ? 'rotate-180' : 'rotate-0'}`} />
                    </a>
                    {dropdownOpen === item.id && (
                      <ul className="absolute z-[9999] bg-white dark:bg-gray-800 p-2 text-black dark:text-white shadow-md rounded-md">
                        {item.links.map(link => (
                          <li key={link.id}>
                            <a href={link.link} className="block p-2 hover:bg-primary/20 dark:hover:bg-primary/20 rounded-md text-sm font-medium uppercase">
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a href={item.link} className="relative mx-3 text-center text-gray-800 dark:text-white hover:text-blue-500 py-2 text-sm font-medium uppercase group">
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  </a>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={openWhatsApp}
            className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-full flex items-center gap-3 hover:bg-primary/90 transition hidden md:flex"
          >
            Fale com CEO <FaWhatsapp className="text-lg" />
          </button>
          <DarkMode className="hidden md:block p-2" />
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
