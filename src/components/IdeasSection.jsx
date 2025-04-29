import React from 'react';
import { Link } from 'react-router-dom';

const IdeasSection = () => {
  return (
    <section className="section" style={{ backgroundColor: '#000' }}>
     
      
      <div className="ideas-header">
        <div className="ideas-image-placeholder" style={{ width: '150px', height: '50px', backgroundColor: '#111', borderRadius: '25px', marginBottom: '1rem' }}></div>
        <h2>
          Unique <span>Ideas</span><br />
          For Your <span>Business.</span>
        </h2>
        <Link to="/services" className="btn btn-primary">
          WHAT WE DO
          <span className="btn-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Link>
      </div>
      
      <div className="services-grid">
        <div className="service-card">
          <h3>Branding and Identity Design</h3>
        </div>
        <div className="service-card">
          <h3>Website Design and Development</h3>
        </div>
        <div className="service-card">
          <h3>Advertising and Marketing Campaigns</h3>
        </div>
        <div className="service-card">
          <h3>Creative Consulting and Development</h3>
        </div>
      </div>
      
      <div className="back-to-top">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default IdeasSection;
