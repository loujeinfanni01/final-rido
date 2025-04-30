import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServicesSection from './ServicesSection';
import GeometricBackground from './GeometricBackground';

const HomePage = () => {
  // Create ref for the services section to scroll to
  const servicesSectionRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Function to handle scrolling to services section
  const handleScrollToServices = () => {
    if (servicesSectionRef.current) {
      servicesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Update scroll position for animation and control back-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setShowBackToTop(window.scrollY > 300); // Show back to top after scrolling 300px
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Geometric background */}
        <div className="hero-geometry">
          <GeometricBackground />
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title">This is what <span>we do </span>best</h1>
          <p className="hero-description">
            Welcome to our world of endless imagination and boundless
            creativity. Together, let's embark on a remarkable journey where
            dreams become tangible realities.
          </p>
          <div className="vertical-text" onClick={scrollToTop}>Home Page</div>
          <button onClick={handleScrollToServices} className="btn-primary-home">
            OUR SERVICES
            <span className="btn-icon-services">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 12L12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
        
        {/* Scroll circle button with rotation animation */}
        <div 
          className={`scroll-circle-button ${scrollPosition > 50 ? 'active' : ''}`} 
          onClick={handleScrollToServices}
          style={{
            transform: `rotate(${scrollPosition / 2}deg)`, // Keep rotation based on scroll
          }}
        >
          <div className="circle-text-container">
            <div className="circle-text-rotate">
              <svg viewBox="0 0 100 100" className="circle-text">
                <path id="curve" fill="transparent" d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"/>
                <text>
                  <textPath xlinkHref="#curve" className="circle-textpath">
                    SCROLL DOWN • SCROLL DOWN • SCROLL DOWN •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <div className="circle-outer">
            <div className="circle-inner">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12L12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section with geometric background and animations */}
      <ServicesSection servicesSectionRef={servicesSectionRef} />

      {/* Contact CTA Section */}
      <section className="section contact-cta-section" style={{ backgroundColor: '#fff', color: '#000' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2>
            Let's make an <span>impact</span><br />
            together. Ready <span>when you are</span>
          </h2>
          <Link
            to="/contact"
            className="btn btn-primary-contact"
            style={{ marginTop: "2rem" }}
            onClick={() => {
              // Force un petit délai pour s'assurer que la navigation a lieu d'abord
              setTimeout(() => window.scrollTo(0, 0), 10);
            }}
          >
            CONTACT US
            <span className="btn-icon-contact">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
        <div className="back-to-top" style={{ backgroundColor: '#000', color: '#fff' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          
        </div>
      </section>

      {/* Vertical "Back to Top" text that appears when scrolling */}
      {showBackToTop && (
        <div 
          className="vertical-back-to-top"
          onClick={scrollToTop}
        >
          <span>BACK TO TOP</span>
        </div>
      )}
    </div>
  );
};

export default HomePage;