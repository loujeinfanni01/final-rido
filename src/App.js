import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import Footer from './components/Footer.jsx';
import GeometricBackground from './components/GeometricBackground.jsx';
import ContactPage from './components/ContactPage.jsx';

import ServicesPage from './components/ServicesPage.jsx';

import './styles/global.css';
import './styles/responsive.css';
import './styles/ServicesGemetric.css';
import './styles/Contact.css'

const App = () => {
  const studioSectionRef = useRef(null);

  return (
    <Router>
      <div className="app-container">
        {/* Fond géométrique animé */}
        <GeometricBackground />
       
        
        {/* Contenu principal */}
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection studioSectionRef={studioSectionRef} />
               
                
              </>
            } />
            
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;