import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import NavbarTablet from './NavbarTablet'; // Novo componente para tablets
import Slider from 'react-slick';

const Navbar = ({ handleOrderPopup }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);

  // Função para controlar a visibilidade da barra superior com base na rolagem
  useEffect(() => {
    const handleScroll = () => {
      setTopBarVisible(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Media queries para diferentes tamanhos de tela
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmallScreen = useMediaQuery({ maxWidth: 1285 });

  // Itens do Menu, com nomes adaptados para telas pequenas
  const Menu = [
    { id: 1, name: "Início", link: "/" },
    { id: 4, name: "Brindes", link: "#Brindes" },
    { id: 5, name: "Uniformes", link: "#Uniformes" },
    {
      id: 6,
      name: "Locações",
      dropdown: true,
      links: [
        { id: 1, name: "Móveis", link: "#Moveis" },
        { id: 2, name: "Estruturas", link: "#Stands" },
        { id: 3, name: "Equipamentos", link: "#Equipamentos" },
        { id: 4, name: "Galpões", link: "#Galpoes" },
      ]
    },
    {
      id: 7,
      name: "Gráfica",
      dropdown: true,
      links: [
        { id: 1, name: "Gráfica Digital", link: "#GraficaDigital" },
        { id: 2, name: "Gráfica-OffSet", link: "#GraficaOffset" },
      ]
    },
    { 
      id: 8, 
      name: isSmallScreen ? "Portfólio" : "Portfólio", 
      link: "/testimonials"  // Mudança aqui para a rota "/testimonials"
    },
    { 
      id: 9, 
      name: isSmallScreen ? "Clientes" : "Clientes", 
      link: "#Clientes" 
    },
    { id: 10, name: "Contato", link: "#Contato" }, // Corrigido o ID duplicado
  ];

  // Função para abrir o WhatsApp com um número pré-definido
  const openWhatsApp = () => window.open(`https://api.whatsapp.com/send?phone=558195042474`, '_blank');

  // Função para renderizar a barra superior com slider de mensagens
  const renderTopBar = () => {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 5000, // Ajustei a velocidade para uma leitura mais confortável
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000, // Mudança para aumentar o tempo de exibição de cada slide
      cssEase: 'ease-in-out',
      pauseOnHover: true,
    };

    return (
      <div className={`bg-blue-900 p-2 flex justify-center items-center text-xs text-white transition-transform duration-300 ${topBarVisible ? 'translate-y-0' : '-translate-y-full'} fixed top-0 left-0 w-full z-50`}>
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

  // Retorno condicional dos componentes de Navbar conforme o tamanho da tela
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
          className="fixed top-0 left-0 w-full z-50"
        />
      ) : isTablet ? (
        <NavbarTablet
          Menu={Menu}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          openWhatsApp={openWhatsApp}
          topBarVisible={topBarVisible}
          className="fixed top-0 left-0 w-full z-50"
        />
      ) : (
        <NavbarDesktop
          Menu={Menu}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          openWhatsApp={openWhatsApp}
          topBarVisible={topBarVisible}
          className="fixed top-0 left-0 w-full z-50"
        />
      )}
    </>
  );
};

export default Navbar;
