import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaWhatsapp, FaCaretDown, FaList, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";
import Logo from "../../assets/website/logo.png";

const TopBar = ({ isVisible }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 50000,
    slidesToShow: 1,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
  };

  return (
    <div className={`bg-blue-900 p-2 flex justify-center items-center text-xs text-white transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} fixed top-0 left-0 w-full z-40 hidden md:flex`}>
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          <div className="text-center font-bold">CONECTANDO IDÉIAS, MARCAS E PESSOAS.</div>
          <div className="text-center font-bold">
            Entre em contato conosco pelo número{' '}
            <a href="https://api.whatsapp.com/send?phone=5581994318149" className="underline" target="_blank" rel="noopener noreferrer">
              (81) 9.9431-8149
            </a>. Estamos prontos para atender você!
          </div>

          <div className="text-center font-bold">
            Para orçamento ou dúvidas, entre em contato pelo email{' '}
            <a href="mailto:atendimento@conexaokf.com.br" className="underline">atendimento@conexaokf.com.br</a>.
          </div>
        </Slider>
      </div>
    </div>
  );
};

const Navbar = ({ handleOrderPopup }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setTopBarVisible(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const openWhatsApp = () => window.open(`https://api.whatsapp.com/send?phone=558195042474`, '_blank');

  const Menu = [
    { id: 1, name: "Início", link: "#" },
    { id: 4, name: "Brindes", link: "#Brindes" },
    { id: 5, name: "Uniformes", link: "#Uniformes" },
    {
      id: 6, name: "Locações", dropdown: true, links: [
        { id: 1, name: "Móveis", link: "#Moveis" },
        { id: 2, name: "Estruturas", link: "#Stands" },
        { id: 3, name: "Equipamentos", link: "#Equipamentos" },
        { id: 4, name: "Galpões", link: "#Galpoes" },
      ]
    },
    {
      id: 7, name: "Gráfica", dropdown: true, links: [
        { id: 1, name: "Gráfica-OffSet", link: "#GraficaOffset" },
        { id: 2, name: "Gráfica Digital", link: "#GraficaDigital" },
      ]
    },
    { id: 8, name: "Comunicação Visual", link: "#Comunicacao" },
    { id: 9, name: "Eventos Realizados", link: "#Eventos" },
    { id: 10, name: "Contato", link: "#Contato" },
  ];

  const DrawerMenu = () => (
    <div className={`fixed top-0 left-0 z-50 h-screen p-2 transition-transform transform bg-white w-64 dark:bg-gray-800 ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <button type="button" onClick={() => setDrawerOpen(false)} className="absolute top-2 right-2">
        <FaTimes className="w-3 h-3" />
        <span className="sr-only">Close menu</span>
      </button>
      <ul className="space-y-2 font-medium">
        {Menu.map((item) => (
          <li key={item.id}>
            {item.dropdown ? (
              <div className="group relative cursor-pointer py-2 ml-3">
                <a href="#" className="flex items-center gap-2 text-sm font-medium uppercase">
                  {item.name} <FaCaretDown />
                </a>
                <ul className="hidden group-hover:block absolute z-[9999] bg-white dark:bg-gray-800 p-2 text-black dark:text-white shadow-md rounded-md">
                  {item.links.map(link => (
                    <li key={link.id}>
                      <a href={link.link} className="block p-2 hover:bg-primary/20 dark:hover:bg-primary/20 rounded-md text-sm font-medium uppercase">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <a href={item.link} className="relative mx-3 text-center text-gray-800 dark:text-white hover:text-blue-500 py-2 text-sm font-medium uppercase group">
                {item.name}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <TopBar isVisible={topBarVisible} />
      <nav className="shadow-md w-full fixed top-0 left-0 bg-white dark:bg-gray-900 transition-colors duration-300 ease-in-out text-xs font-medium uppercase" style={{ top: topBarVisible ? '2rem' : '0' }}>
        <div className="flex justify-between items-center py-5 px-4 md:px-8">
          <div className="flex items-center gap-4">
            <button className="text-primary dark:text-primary bg-transparent focus:ring-0 p-1.5 md:hidden" onClick={() => setDrawerOpen(true)}>
              <FaList className="text-lg" />
            </button>
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
        {drawerOpen && <DrawerMenu />}
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end">
          <div className="w-64 h-full bg-white dark:bg-gray-900 p-4">
            <button className="absolute top-4 right-4 text-gray-800 dark:text-white" onClick={toggleMobileMenu}>
              <FaTimes className="w-6 h-6" />
            </button>
            <ul className="space-y-4">
              {Menu.map((item) => (
                <li key={item.id}>
                  {item.dropdown ? (
                    <div className="cursor-pointer" onClick={() => setDropdownOpen(dropdownOpen === item.id ? null : item.id)}>
                      <a href="#" className="flex items-center justify-between text-sm font-medium uppercase">
                        {item.name} <FaCaretDown className={`transition ${dropdownOpen === item.id ? 'rotate-180' : 'rotate-0'}`} />
                      </a>
                      {dropdownOpen === item.id && (
                        <ul className="mt-2 pl-4 space-y-2">
                          {item.links.map(link => (
                            <li key={link.id}>
                              <a href={link.link} className="block p-2 text-gray-800 dark:text-white hover:bg-primary/20 dark:hover:bg-primary/20 rounded-md text-sm font-medium uppercase">
                                {link.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a href={item.link} className="block py-2 text-gray-800 dark:text-white hover:text-blue-500 text-sm font-medium uppercase">
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
