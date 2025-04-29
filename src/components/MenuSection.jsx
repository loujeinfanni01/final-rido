import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="home-page-container">
      <div className="vertical-text">SERVICES</div>
      
      <div>
        <h1>
          Designing <span>a Better</span><br />
          World <span>Today</span>
        </h1>
        <p style={{ color: '#aaa', marginBottom: '0.5rem' }}>HOMEPAGE / CONTACT</p>
        <p>
          Welcome to our world of endless imagination and boundless
          creativity. Together, let's embark on a remarkable journey where
          dreams become tangible realities.
        </p>
        
        <div className="hero-buttons">
          <Link to="/services" className="btn btn-primary">
            WHAT WE DO
            <span className="btn-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
          
          <Link to="/portfolio" className="btn btn-secondary">
            VIEW WORKS
            <span className="btn-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-indicator-text">SCROLL DOWN</div>
        <div className="scroll-indicator-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
