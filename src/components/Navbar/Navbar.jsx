import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaWhatsapp, FaBars, FaTimes, FaCaretDown, FaList } from "react-icons/fa";
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
      <div className="w-full md:w-auto overflow-hidden">
        <Slider {...settings}>
          <div className="text-center font-bold">CONECTANDO IDÉIAS, MARCAS E PESSOAS.</div>
          <div className="text-center font-bold">
            Entre em contato conosco pelo número{' '}
            <a href="tel:+5581995042474" className="underline">
              (81) 9.9504-2474
            </a>. Estamos prontos para atender você!
          </div>
          <div className="text-center font-bold">
            Para realizar seu orçamento ou tirar dúvidas sobre o que você deseja realizar, entre em contato pelo email{' '}
            <a href="mailto:atendimento@conexaokf.com.br" className="underline">
              atendimento@conexaokf.com.br
            </a>. Estamos à disposição para ajudar!
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
    { id: 1, name: "Início", link: "#" },
    { id: 2, name: "Sobre", link: "#Sobre" },
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
    { id: 7, name: "Gráfica", dropdown: true, links: [
      { id: 1, name: "Gráfica-OffSet", link: "#GraficaOffset" },
      { id: 2, name: "Gráfica Digital", link: "#GraficaDigital" },
    ]
    },
    { id: 8, name: "Comunicação Visual", link: "#Comunicacao" },
    { id: 9, name: "Eventos Realizados", link: "#Eventos" },
    { id: 10, name: "Contato", link: "#Contato" },
  ];

  const DrawerMenu = () => (
    <div className={`fixed top-0 left-0 z-50 h-screen p-2 transition-transform transform bg-white w-64 dark:bg-gray-800 ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`} tabIndex="-1" aria-labelledby="drawer-navigation-label">
      <button type="button" onClick={() => setDrawerOpen(false)} aria-controls="drawer-navigation" className="absolute top-2 right-2">
        <FaTimes className="w-3 h-3" />
        <span className="sr-only">Close menu</span>
      </button>
      <ul className="space-y-2 font-medium">
        {Menu.map((item) => (
          <li key={item.id} className="flex items-center">
            {item.dropdown ? (
              <div className="group relative cursor-pointer py-2 md:py-1 ml-3">
                <a href="#" className="flex items-center gap-2 font-sans text-sm font-medium uppercase">
                  {item.name} <FaCaretDown className="transition" />
                </a>
                <ul className="hidden group-hover:block md:absolute z-[9999] bg-white dark:bg-gray-800 p-2 text-black dark:text-white shadow-md rounded-md md:top-full md:left-0">
                  {item.links.map((link) => (
                    <li key={link.id} className="flex items-center">
                      <a href={link.link} className="block p-2 hover:bg-primary/20 dark:hover:bg-primary/20 rounded-md font-sans text-sm font-medium uppercase">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <a href={item.link} className='relative mx-3 text-center text-gray-800 dark:text-white hover:text-blue-500 py-2 font-sans text-sm font-medium uppercase group'>
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
      <nav className='shadow-md w-full fixed top-0 left-0 bg-white dark:bg-gray-900 transition-colors duration-300 ease-in-out font-sans text-xs font-medium uppercase' style={{ top: topBarVisible ? '2rem' : '0' }}>
        <div className='flex flex-row justify-between items-center py-5'>
          <div className="flex items-center gap-4">
            <button className="text-primary dark:text-primary bg-transparent focus:ring-0 p-1.5 md:hidden" type="button" onClick={() => setDrawerOpen(true)}>
              <FaList className="text-lg" />
            </button>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 ml-3">
              <img src={Logo} alt="Logo" className="w-32 h-auto object-contain" />
            </a>
          </div>
          <div className={`flex-1 md:flex items-center justify-center ${mobileMenuOpen ? 'block' : 'hidden'} md:static absolute bg-white dark:bg-gray-900 w-full md:w-auto transition-all duration-300 ease-in-out`}>
            <div className="flex flex-col md:flex-row md:items-center">
              {Menu.map((item) => (
                <React.Fragment key={item.id}>
                  {item.dropdown ? (
                    <div
                      className="group relative cursor-pointer py-2 md:py-1 ml-3"
                      onMouseEnter={() => setDropdownOpen(item.id)}
                      onMouseLeave={() => setDropdownOpen(null)}
                    >
                      <a href="#" className="flex items-center gap-2 font-sans text-sm font-medium uppercase">
                        {item.name} <FaCaretDown className={`transition ${dropdownOpen === item.id ? 'rotate-180' : 'rotate-0'}`} />
                      </a>
                      {dropdownOpen === item.id && (
                        <ul className="md:absolute z-[9999] bg-white dark:bg-gray-800 p-2 text-black dark:text-white shadow-md rounded-md md:top-full md:left-0">
                          {item.links.map((link) => (
                            <li key={link.id} className="flex items-center">
                              <a href={link.link} className="block p-2 hover:bg-primary/20 dark:hover:bg-primary/20 rounded-md font-sans text-sm font-medium uppercase">
                                {link.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a href={item.link} className='relative mx-3 text-center text-gray-800 dark:text-white hover:text-blue-500 py-2 font-sans text-sm font-medium uppercase group'>
                      {item.name}
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </a>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={openWhatsApp} className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-5 rounded-full flex items-center gap-3 hover:bg-primary/90 transition">
              Fale com CEO <FaWhatsapp className="text-lg" />
            </button>
            <div className="hidden md:block">
              <DarkMode />
            </div>
          </div>
        </div>
        {drawerOpen && <DrawerMenu />}
      </nav>
    </div>
  );
};

export default Navbar;
