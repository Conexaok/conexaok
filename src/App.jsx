import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsApp from './components/WhatsApp/WhatsApp';
import Clientes from './components/Clientes/Clientes';
import Testimonials from './components/Testimonials/Testimonials';
import Gallery from './components/Gallery/Gallery'; // Importe o componente da galeria
import FooterWp from './components/Footer/FooterWp';

function App() {
  useEffect(() => {
    // Define o fundo do body para cobrir toda a área do site
    document.body.classList.add('bg-site-background', 'bg-cover', 'bg-center', 'min-h-screen');
    return () => {
      document.body.classList.remove('bg-site-background', 'bg-cover', 'bg-center', 'min-h-screen');
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

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
    setShowNavbar(location.pathname !== '/gallery');
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Renderiza o Navbar baseado no estado */}
      {showNavbar && <Navbar />}

      <main className="flex-grow"> {/* Área principal */}
        <Routes>
          <Route
            path="/"
            element={<></>}
          />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      
      {/* Footer será renderizado aqui */}
      <Footer />
      <FooterWp/>
    </div>
  );
}

export default App;
