import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GeometricBackground from './GemoetricBackground-white';

// Importing all section components
const ServicesPage = () => {
  // Create refs for each section for smooth scrolling
  const heroSectionRef = useRef(null);
  const studioSectionRef = useRef(null);
  const teamSectionRef = useRef(null);
  const voicesSectionRef = useRef(null);
  
  // State to control visibility of back to top button
  const [showBackToTop, setShowBackToTop] = useState(false);
  // Animation states
  const [animate, setAnimate] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    studio: false,
    team: false, 
    voices: false
  });

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
  
  // Add scroll event listener to show/hide back to top button and trigger animations
  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px from the top
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
      
      // Trigger animation on initial render
      if (!animate) {
        setAnimate(true);
      }
      
      // Check which sections are visible
      const sections = {
        hero: isElementVisible(heroSectionRef.current),
        studio: isElementVisible(studioSectionRef.current),
        team: isElementVisible(teamSectionRef.current),
        voices: isElementVisible(voicesSectionRef.current)
      };
      
      setVisibleSections(sections);
    };
    
    // Function to check if element is visible in viewport
    const isElementVisible = (el) => {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.7 &&
        rect.bottom >= 0
      );
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Trigger initial animation after component mounts
    setTimeout(() => {
      setAnimate(true);
    }, 500);
    
    // Initial check for visible sections
    handleScroll();
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animate]);

  return (
    <div className="home-page" style={{ backgroundColor: '#fff' }}>
      {/* Hero Section */}
      <section 
        ref={heroSectionRef} 
        className="section hero-section-services"
        style={{ backgroundColor: '#fff', color: '#000000', position: 'relative', overflow: 'hidden' }}
      >
      
      
      {/* Breadcrumb for Services page */}
      <div className="breadcrumb-nav">
      <div className="nav-line"></div>
        <a href="/" className="breadcrumb-link">HOMEPAGE</a>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">SERVICES</span>
      </div>
        <GeometricBackground color="#EAEDEE" />
        <div 
          className="vertical-text" 
          style={{ 
            color: '#555', 
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}>
          Services
        </div>

        {/* Breadcrumb Navigation */}

        <div>
          <h1 style={{ 
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1s ease, transform 1s ease',
            transitionDelay: '0.2s'
          }}>
            Designing <span style={{ color: '#ff9500' }}>a Better</span><br />
            World <span style={{ color: '#ff9500' }}>Today</span>
          </h1>
          
          <div 
            className="hero-buttons"
            style={{ 
              opacity: animate ? 1 : 0,
              transform: animate ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1s ease, transform 1s ease',
              transitionDelay: '0.4s'
            }}
          >
            <button 
              onClick={() => scrollToSection(studioSectionRef)} 
              className="btn btn-primary-services"
              style={{ backgroundColor: '#ff9500', color: '#fff' }}
            >
              WHAT WE DO
            </button>
            
            <Link 
              to="/portfolio" 
              className="btn btn-secondary-services"
              style={{ borderColor: '#000', color: '#000' }}
            >
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
        
        <div 
          className="scroll-indicator" 
          onClick={() => scrollToSection(studioSectionRef)} 
          style={{ 
            color: '#555',
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease, transform 1s ease',
            transitionDelay: '0.6s'
          }}
        >
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
      <section 
        ref={studioSectionRef} 
        className="section studio-section"
        style={{ backgroundColor: '#fff', color: '#000', position: 'relative', overflow: 'hidden' }}
      >
        <div>
          <h2 style={{ 
            opacity: visibleSections.studio ? 1 : 0,
            transform: visibleSections.studio ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}>
            Discover<br />
            Our <span style={{ color: '#ff9500' }}>Studio</span>
          </h2>
                
          <div className="studio-content">
            <div 
              className="studio-text"
              style={{ 
                opacity: visibleSections.studio ? 1 : 0,
                transform: visibleSections.studio ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
                transitionDelay: '0.2s'
              }}
            >
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
                    
            <div 
              className="studio-image"
              style={{ 
                opacity: visibleSections.studio ? 1 : 0,
                transform: visibleSections.studio ? 'translateX(0)' : 'translateX(30px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
                transitionDelay: '0.4s'
              }}
            >
              {/* Placeholder for image */}
              <div className="image-placeholder" style={{
                width: '100%',
                height: '400px',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamSectionRef} 
        className="section team-section" 
        style={{ backgroundColor: '#fff', color: '#000', position: 'relative', overflow: 'hidden' }}
      >
        <div 
          className="team-header"
          style={{ 
            opacity: visibleSections.team ? 1 : 0,
            transform: visibleSections.team ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}
        >
          <h2>
            Meet<br />
            Our <span style={{ color: '#ff9500' }}>Team</span>
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
          <Link 
            to="/team" 
            className="btn btn-primary"
            style={{ backgroundColor: '#ff9500', color: '#fff' }}
          >
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
            <div 
              key={id} 
              className="team-member"
              style={{ 
                opacity: visibleSections.team ? 1 : 0,
                transform: visibleSections.team ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
                transitionDelay: `${0.2 + (id * 0.1)}s`
              }}
            >
              <div className="image-placeholder" style={{
                width: '100%',
                paddingBottom: '120%',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px'
              }}></div>
              <div className="member-name">Member {id}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Voices Section */}
      <section 
        ref={voicesSectionRef} 
        className="section voices-section" 
        style={{ backgroundColor: '#fff', color: '#000', position: 'relative', overflow: 'hidden' }}
      >
        <div 
          className="vertical-text" 
          style={{ 
            color: '#aaa',
            opacity: visibleSections.voices ? 1 : 0,
            transform: visibleSections.voices ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}
        >
          Services
        </div>
              
        <div 
          className="voices-header"
          style={{ 
            opacity: visibleSections.voices ? 1 : 0,
            transform: visibleSections.voices ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            transitionDelay: '0.2s'
          }}
        >
          <p style={{ color: '#555', textAlign: 'right', marginBottom: '1rem' }}>
            Customer reviews are a valuable source<br />
            of information for both businesses and consumers.
          </p>
          <h2>
            Customer Voices:<br />
            Hear What <span style={{ color: '#ff9500' }}>They Say!</span>
          </h2>
        </div>
              
        <div 
          className="testimonials"
          style={{ 
            opacity: visibleSections.voices ? 1 : 0,
            transition: 'opacity 0.8s ease',
            transitionDelay: '0.4s'
          }}
        >
          {/* Placeholder data for testimonials */}
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div 
              key={id} 
              className={`testimonial-avatar ${id === 1 ? 'active' : ''}`}
              style={{
                transform: visibleSections.voices ? 'scale(1)' : 'scale(0)',
                transition: 'transform 0.5s ease',
                transitionDelay: `${0.4 + (id * 0.1)}s`
              }}
            >
              <div className="image-placeholder" style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#f5f5f5',
                borderRadius: '50%'
              }}></div>
            </div>
          ))}
        </div>
              
        <div 
          style={{ 
            textAlign: 'center', 
            fontSize: '3rem', 
            color: '#ff9500', 
            marginTop: '2rem',
            opacity: visibleSections.voices ? 1 : 0,
            transform: visibleSections.voices ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            transitionDelay: '0.8s'
          }}
        >
          "
        </div>
              
        {/* Back to top button with conditional rendering based on scroll position */}
        {showBackToTop && (
          <div 
            className="vertical-back-to-top-services" 
            onClick={scrollToTop} 
            style={{ 
              color: '#000000', 
              cursor: 'pointer', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              position: 'fixed',
              right: '2rem',
              bottom: '2rem',
              zIndex: 1000,
              opacity: 0.8,
              transition: 'opacity 0.3s ease',
              animation: 'pulse 2s infinite'
            }}
          >
            <span style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}>
              BACK TO TOP
            </span>
          </div>
        )}

        {/* Add keyframes for pulse animation */}
        <style>
          {`
            @keyframes pulse {
              0% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0); }
            }
          `}
        </style>
      </section>
    </div>
  );
};

export default ServicesPage;