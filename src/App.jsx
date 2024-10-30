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

function App() {
  return (
    <div className="bg-site-background bg-cover bg-center min-h-screen flex flex-col">
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
      
      <div className="flex-grow"> {/* Este div permite que o conteúdo cresça */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <WhatsApp />
                <Clientes />
              </>
            }
          />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      
      {/* Footer será renderizado aqui */}
      <Footer />
    </>
  );
}

export default App;
