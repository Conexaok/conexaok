import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import Logo from "../../assets/website/logo.png";
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom'; // Importa o hook useLocation para verificar a rota

const NavbarDesktop = ({ Menu = [], dropdownOpen, setDropdownOpen, openWhatsApp, topBarVisible }) => {  // Inicializa Menu como um array vazio
  const isSmallScreen = useMediaQuery({ maxWidth: 1110 });
  const isVerySmallScreen = useMediaQuery({ maxWidth: 1196 });

  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation(); // Usa o hook useLocation para obter a rota atual

  // Verifica se estamos na página de galeria
  if (location.pathname === '/galeria') {
    return null; // Não renderiza o NavbarDesktop na página da galeria
  }

  const handleMouseEnter = (id) => {
    setDropdownOpen(id);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  // Monitora a rolagem da página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 left-0 bg-white dark:bg-gray-900 transition-colors duration-300 ease-in-out text-xs font-medium uppercase ${hasScrolled ? 'shadow-md' : ''
          } ${isVerySmallScreen ? 'text-xs' : 'text-sm'}`}
        style={{ top: topBarVisible ? '2rem' : '0', zIndex: 100 }}
      >
        <div className={`flex justify-between items-center py-5 px-3 md:px-6 ${isVerySmallScreen ? 'flex-wrap' : ''}`}>
          <div className="flex items-center gap-2">
            <a href="#" className="text-2xl font-bold md:text-3xl">
              <img src={Logo} alt="Logo" className={`w-${isVerySmallScreen ? '24' : '32'} h-auto object-contain`} />
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className={`flex flex-col md:flex-row md:items-center ${isVerySmallScreen ? 'space-y-4 md:space-y-0' : ''}`}>
              {/* Adicionando a verificação se Menu é um array válido antes de mapear */}
              {Array.isArray(Menu) && Menu.length > 0 ? (
                Menu.map(item => (
                  <React.Fragment key={item.id}>
                    {item.dropdown ? (
                      <div
                        className="group relative cursor-pointer py-2 ml-6"
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="#" className="flex items-center gap-2 text-sm font-medium uppercase">
                          {item.name} <FaCaretDown className={`transition ${dropdownOpen === item.id ? 'rotate-180' : 'rotate-0'}`} />
                        </a>
                        {dropdownOpen === item.id && (
                          <ul className="absolute z-[9999] bg-white dark:bg-gray-800 p-2 text-black dark:text-white shadow-md rounded-md w-44">
                            {item.links.map(link => (
                              <li key={link.id}>
                                <a href={link.link} className="block p-3 hover:bg-primary/20 dark:hover:bg-primary/20 rounded-md text-sm font-medium uppercase">
                                  {link.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <a href={item.link} className="relative mx-6 text-center text-gray-800 dark:text-white hover:text-blue-500 py-2 text-sm font-medium uppercase group">
                        {item.name}
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                      </a>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <p>No menu items available</p> // Mensagem de fallback caso não tenha itens no menu
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Espaçamento para o conteúdo não ficar escondido atrás do Navbar */}
      <div style={{ marginTop: '6rem' }}></div>

    </>
  );
};

export default NavbarDesktop;
