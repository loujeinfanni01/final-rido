import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div className="page-container">
      {/* Section Titre */}
      
      {/* Section Détails des Services */}
      <section className="section services-details-section">
    *
        <div className="services-grid-detailed">
          {/* Service 1: Branding */}
          <div className="service-detail-item">
            <div className="service-detail-content">
              <h3>Branding and Identity Design</h3>
              <p>Our creative agency is a team of professionals focused on helping your brand grow.</p>
              <ul>
                <li>UX AUDITS</li>
                <li>DESIGN THINKING</li>
                <li>METHODOLOGIES</li>
                <li>WIREFRAMING</li>
              </ul>
              <Link to="/services/branding" className="btn btn-secondary">
                READ MORE
                <span className="btn-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>
            <div className="service-detail-visual">{/* Placeholder for visual element */}</div>
          </div>

          {/* Service 2: Web Design */}
          <div className="service-detail-item">
            <div className="service-detail-content">
              <h3>Website Design and Development</h3>
              <p>Our creative agency is a team of professionals focused on helping your brand grow.</p>
              <ul>
                <li>UX AUDITS</li>
                <li>DESIGN THINKING</li>
                <li>METHODOLOGIES</li>
                <li>WIREFRAMING</li>
              </ul>
              <Link to="/services/web-design" className="btn btn-secondary">
                READ MORE
                <span className="btn-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>
             <div className="service-detail-visual">{/* Placeholder for visual element */}</div>
          </div>

          {/* Service 3: Advertising */}
          <div className="service-detail-item">
            <div className="service-detail-content">
              <h3>Advertising and Marketing Campaigns</h3>
              <p>Our creative agency is a team of professionals focused on helping your brand grow.</p>
              <ul>
                <li>UX AUDITS</li>
                <li>DESIGN THINKING</li>
                <li>METHODOLOGIES</li>
                <li>WIREFRAMING</li>
              </ul>
              <Link to="/services/advertising" className="btn btn-secondary">
                READ MORE
                <span className="btn-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>
             <div className="service-detail-visual">{/* Placeholder for visual element */}</div>
          </div>

          {/* Service 4: Creative Consulting */}
          <div className="service-detail-item">
            <div className="service-detail-content">
              <h3>Creative Consulting Concept Development</h3>
              <p>Our creative agency is a team of professionals focused on helping your brand grow.</p>
              <ul>
                <li>UX AUDITS</li>
                <li>DESIGN THINKING</li>
                <li>METHODOLOGIES</li>
                <li>WIREFRAMING</li>
              </ul>
              <Link to="/services/consulting" className="btn btn-secondary">
                READ MORE
                <span className="btn-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>
             <div className="service-detail-visual">{/* Placeholder for visual element */}</div>
          </div>
        </div>
        <div className="back-to-top">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* Section Contact CTA */}
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
             <span className="btn-icon">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </span>
           </Link>
         </div>
         <div className="back-to-top" style={{ backgroundColor: '#000', color: '#fff' }}>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
         </div>
      </section>
    </div>
  );
};

export default ServicesPage;

