import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ServicesSection from './ServicesSection';

const HomePage = () => {
  // Create ref for the services section to scroll to
  const servicesSectionRef = useRef(null);

  // Function to handle scrolling to services section
  const handleScrollToServices = () => {
    if (servicesSectionRef.current) {
      servicesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">This is what <span>we do </span>best</h1>
          <p className="hero-description">
            Welcome to our world of endless imagination and boundless
            creativity. Together, let's embark on a remarkable journey where
            dreams become tangible realities.
          </p>
          <div className="vertical-text">Home Page</div>
          <button onClick={handleScrollToServices} className="btn-primary-Services">
            OUR SERVICES
            <span className="btn-icon-services">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 12L12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
        
        <div className="scroll-indicator">
          <span>SCROLL DOWN</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12L12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>
      
      {/* Services Section with geometric background */}
      <ServicesSection servicesSectionRef={servicesSectionRef} />

      {/* Contact CTA Section */}
      <section className="section contact-cta-section" style={{ backgroundColor: '#fff', color: '#000' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#555', textAlign: 'right', marginBottom: '1rem' }}>
            Looking to make your mark? We'll help you turn<br />
            your project into a success story.
          </p>
          <h2>
            Let's make an <span>impact</span><br />
            together. Ready <span>when you are</span>
          </h2>
          <Link to="/contact" className="btn btn-primary-contact" style={{ marginTop: '2rem' }}>
            CONTACT US
            <span className="btn-icon-contact">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
        <div className="back-to-top" style={{ backgroundColor: '#000', color: '#fff' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default HomePage;