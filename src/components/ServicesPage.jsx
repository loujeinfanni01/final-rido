import React, { useRef,  } from 'react';
import { Link } from 'react-router-dom';

// Importing all section components
const ServicesPage = () => {
  // Create refs for each section for smooth scrolling
  const heroSectionRef = useRef(null);
  const studioSectionRef = useRef(null);
  const teamSectionRef = useRef(null);
  const voicesSectionRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to handle "back to top" button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section ref={heroSectionRef} className="section hero-section">
        <div className="vertical-text">HOMEPAGE</div>
        
        <div>
          <h1>
            Designing <span>a Better</span><br />
            World <span>Today</span>
          </h1>
          
          <p>
            Welcome to our world of endless imagination and boundless
            creativity. Together, let's embark on a remarkable journey where
            dreams become tangible realities.
          </p>
          
          <div className="hero-buttons">
            <button onClick={() => scrollToSection(studioSectionRef)} className="btn btn-primary">
              WHAT WE DO
              <span className="btn-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            
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
        
        <div className="scroll-indicator" onClick={() => scrollToSection(studioSectionRef)}>
          <div className="scroll-indicator-text">SCROLL DOWN</div>
          <div className="scroll-indicator-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section ref={studioSectionRef} className="section studio-section">
        <div>
          <h2>
            Discover<br />
            Our <span>Studio</span>
          </h2>
                
          <div className="studio-content">
            <div className="studio-text">
              <p>
                At our design studio, we are a collective of talented individuals
                ignited by our unwavering passion for transforming ideas into
                reality. With a harmonious blend of diverse backgrounds and a
                vast array of skill sets, we join forces to create compelling
                solutions for our esteemed clients.
              </p>
                        
              <p>
                Collaboration is at the heart of what we do. Our team thrives on
                the synergy that arises when unique perspectives converge,
                fostering an environment of boundless creativity. By harnessing
                our collective expertise, we produce extraordinary results that
                consistently surpass expectations.
              </p>
            </div>
                    
            <div className="studio-image">
              {/* Placeholder for image */}
              <div className="image-placeholder" style={{
                width: '100%',
                height: '400px',
                backgroundColor: '#111',
                borderRadius: '8px'
              }}></div>
            </div>
          </div>
        </div>
        
     
      </section>

      {/* Team Section */}
      <section ref={teamSectionRef} className="section team-section" style={{ backgroundColor: '#fff', color: '#000' }}>
        <div className="team-header">
          <h2>
            Meet<br />
            Our <span>Team</span>
          </h2>
          <p style={{ color: '#555' }}>
            We are talented individuals who are passionate
            about bringing ideas to life. With a diverse range
            of backgrounds and skill sets, we collaborate to
            produce effective solutions for our clients.
          </p>
          <p style={{ color: '#555' }}>
            Together, our creative team is committed to
            delivering impactful work that exceeds
            expectations.
          </p>
          <Link to="/team" className="btn btn-primary">
            READ MORE
            <span className="btn-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
        
        <div className="team-grid">
          {/* Placeholder data for team members */}
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="team-member">
              <div className="image-placeholder" style={{
                width: '100%',
                paddingBottom: '120%',
                backgroundColor: '#eee',
                borderRadius: '8px'
              }}></div>
              <div className="member-name">Member {id}</div>
            </div>
          ))}
        </div>
        
       
      </section>

      {/* Voices Section */}
      <section ref={voicesSectionRef} className="section voices-section" style={{ backgroundColor: '#fff', color: '#000' }}>
        <div className="vertical-text" style={{ color: '#aaa' }}>HOMEPAGE</div>
              
        <div className="voices-header">
          <p style={{ color: '#555', textAlign: 'right', marginBottom: '1rem' }}>
            Customer reviews are a valuable source<br />
            of information for both businesses and consumers.
          </p>
          <h2>
            Customer Voices:<br />
            Hear What <span>They Say!</span>
          </h2>
        </div>
              
        <div className="testimonials">
          {/* Placeholder data for testimonials */}
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div key={id} className={`testimonial-avatar ${id === 1 ? 'active' : ''}`}>
              <div className="image-placeholder" style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#eee',
                borderRadius: '50%'
              }}></div>
            </div>
          ))}
        </div>
              
        <div style={{ textAlign: 'center', fontSize: '3rem', color: '#ff9500', marginTop: '2rem' }}>
          "
        </div>
              
        <div className="vertical-back-to-top" onClick={scrollToTop} style={{ color: '#fff', cursor: 'pointer' }}>
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