import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsApp from './components/WhatsApp/WhatsApp';
import Hero from './components/Hero/Hero';
import Brindes from './components/Brindes/Brindes';
import Uniformes from './components/Uniformes/Uniformes';
import Galpoes from './components/Galpoes/Galpoes';
import Clientes from './components/Clientes/Clientes';
import Subscribe from './components/Subscribe/Subscribe';
import Grafica from './components/Grafica/grafica';
import GraficaOffset from './components/GraficaOffset/GraficaOffset';
import ComunicacaoVisual from './components/ComunicacaoVisual/ComunicacaoVisual';
import Moveis from './components/Moveis/Moveis';
import Stands from './components/Stands/Stands';
import Equipamentos from './components/Equipamentos/Equipamentos';
import Testimonials from './components/Testimonials/Testimonials';
import Gallery from './components/Gallery/Gallery'; // Importe o componente da galeria

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true); // Estado para controlar a visibilidade do Navbar

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // Controle explícito da visibilidade do Navbar com base na rota atual
  useEffect(() => {
    if (location.pathname === '/gallery') {
      setShowNavbar(false); // Oculta o Navbar quando estiver na rota da galeria
    } else {
      setShowNavbar(true); // Mostra o Navbar nas outras rotas
    }
  }, [location.pathname]); // Atualiza o estado sempre que a rota muda

  return (
    <>
      {/* Renderiza o Navbar baseado no estado */}
      {showNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <WhatsApp />
              <Hero />
              <Clientes />
              <Footer />
            </>
          }
        />
        <Route path="/testimonials" element={<Testimonials />} />
        {/* Adiciona a rota para a galeria */}
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
