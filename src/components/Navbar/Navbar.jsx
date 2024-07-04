import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaWhatsapp, FaBars, FaTimes, FaCaretDown, FaList, FaPhone, FaEnvelope } from "react-icons/fa";
import DarkMode from "./DarkMode";
import Logo from "../../assets/website/logo.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TopBar = ({ isVisible }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 60000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
  };

  return (
    <div className={`bg-blue-900 p-2 flex justify-center items-center text-xs text-white transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} fixed top-0 left-0 w-full z-50`}>
      <div className="w-full md:w-auto overflow-hidden">
        <Slider {...settings}>
          <div className="text-center font-bold">CONECTANDO IDÉIAS MARCAS E PESSOAS.</div>
          <div className="text-center font-bold">atendimento@conexaokf.com.br</div>
          <div className="text-center font-bold">(81) 9.9504-2474</div>
        </Slider>
      </div>
    </div>
  );
};

const Navbar = ({ handleOrderPopup }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopBarVisible(true);
      } else {
        setTopBarVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openWhatsApp = () => {
    const phoneNumber = '558195042474';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappLink, '_blank');
  };

  const Menu = [
    { id: 1, name: "Início", link: "/#Inicio" },
    { id: 2, name: "Sobre", link: "/#Sobre" },
    { id: 4, name: "Brindes", link: "/#Brindes" },
    { id: 5, name: "Uniformes", link: "/#" },
    //Locações
    { id: 6, name: "Gráfica-OffSet", link: "/#Grafica" },
    { id: 7, name: "Comunicação Visual", link: "/#" },
    { id: 7, name: "eventos realizados", link: "/#" },
    { id: 7, name: "como chegar", link: "/#" },
  ];

  const DropdownLinks = [
    { id: 2, name: "Móveis", link: "/#" },
    { id: 4, name: "Estruturas", link: "/#Stands" },
    { id: 5, name: "Equipamentos", link: "/#" },
  ];

  const DrawerMenu = () => (
    <div className={`fixed top-0 left-0 z-40 h-screen p-4 transition-transform transform bg-white w-64 dark:bg-gray-800 ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`} tabIndex="-1" aria-labelledby="drawer-navigation-label">
      <button type="button" onClick={() => setDrawerOpen(false)} aria-controls="drawer-navigation" className="absolute top-2.5 right-2.5">
        <FaTimes className="w-3 h-3" />
        <span className="sr-only">Close menu</span>
      </button>
      <ul className="space-y-2 font-medium">
        {Menu.map((item) => (
          <li key={item.id} className="flex items-center">
            <a href={item.link} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 font-sans text-sm font-medium uppercase">
              <span>{item.name}</span>
            </a>
          </li>
        ))}
        {DropdownLinks.map((item) => (
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
    <div>
      <TopBar isVisible={topBarVisible} />
      <nav className='shadow-md w-full fixed top-0 left-0 bg-white dark:bg-gray-900 transition-colors duration-300 ease-in-out font-sans text-sm font-medium uppercase' style={{ top: topBarVisible ? '2rem' : '0' }}>
        <div className='flex flex-col md:flex-row justify-between items-center p-5'>
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 ml-4">
            <img src={Logo} alt="Logo" className="w-40 h-auto object-contain" />
          </a>
          <div className={`flex-1 md:flex items-center justify-center ${mobileMenuOpen ? 'block' : 'hidden'} md:static absolute bg-white dark:bg-gray-900 w-full md:w-auto transition-all duration-300 ease-in-out`}>
            <div className="flex flex-col md:flex-row md:items-center">
              {Menu.map((item) => (
                <React.Fragment key={item.id}>
                  <a href={item.link} className='relative mx-6 text-center text-gray-800 dark:text-white hover:text-blue-500 py-2 font-sans text-sm font-medium uppercase group'>
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  </a>
                </React.Fragment>
              ))}
              <div
                className="group relative cursor-pointer py-2 md:py-0 ml-4"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a href="#" className="flex items-center gap-2 font-sans text-sm font-medium uppercase">
                  Locações <FaCaretDown className={`transition ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                </a>
                {dropdownOpen && (
                  <ul className="md:absolute z-[9999] bg-white dark:bg-gray-800 p-2 text-black dark:text-white shadow-md rounded-md md:top-full md:left-0">
                    {DropdownLinks.map(({ id, name, link }) => (
                      <li key={id} className="flex items-center">
                        <a href={link} className="block p-2 hover:bg-primary/20 dark:hover:bg-primary/20 rounded-md font-sans text-sm font-medium uppercase">
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Botão de menu móvel */}
              <div className="sm:hidden">
                <button onClick={toggleMobileMenu} className="text-xl">
                  {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={openWhatsApp} className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-full flex items-center gap-2 hover:bg-primary/90 transition">
              Fale com CEO <FaWhatsapp className="text-xl" />
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
    </div>
  );
};

export default Navbar;
