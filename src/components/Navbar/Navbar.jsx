import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import Slider from 'react-slick';

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

  const isMobile = useMediaQuery({ maxWidth: 767 });

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

  const openWhatsApp = () => window.open(`https://api.whatsapp.com/send?phone=558195042474`, '_blank');

  const renderTopBar = () => {
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

    return isMobile ? (
      <div className={`bg-blue-900 p-2 flex justify-center items-center text-xs text-white transition-transform duration-300 ${topBarVisible ? 'translate-y-0' : '-translate-y-full'} fixed top-0 left-0 w-full z-40 md:hidden`}>
        <div className="text-center font-bold">
          CONECTANDO IDÉIAS, MARCAS E PESSOAS.
        </div>
      </div>
    ) : (
      <div className={`bg-blue-900 p-2 flex justify-center items-center text-xs text-white transition-transform duration-300 ${topBarVisible ? 'translate-y-0' : '-translate-y-full'} fixed top-0 left-0 w-full z-40 hidden md:flex`}>
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

  return (
    <>
      {renderTopBar()}
      {isMobile ? (
        <NavbarMobile
          Menu={Menu}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
        />
      ) : (
        <NavbarDesktop
          Menu={Menu}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          openWhatsApp={openWhatsApp}
          topBarVisible={topBarVisible}
        />
      )}
    </>
  );
};

export default Navbar;
