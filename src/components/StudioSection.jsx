import React from 'react';
// Removed react-router-dom import

const StudioSection = ({ studioSectionRef, scrollToSection, voicesSectionRef }) => {
  return (
    <section 
      ref={studioSectionRef} 
      className="section studio-section"
      style={{ 
        backgroundColor: '#fff', 
        color: '#000',
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 4rem',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Background with white geometry */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.4 }}>
        {/* WhiteGeometricBackground would be imported and used here */}
      </div>
      
      {/* Content with increased z-index */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <h2 style={{ color: '#000', fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2 }}>
          Discover<br />
          Our <span style={{ color: '#ff9500' }}>Studio</span>
        </h2>
              
        <div className="studio-content" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '3rem', 
          marginTop: '2rem' 
        }}>
          <div className="studio-text">
            <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.6 }}>
              At our design studio, we are a collective of talented individuals
              ignited by our unwavering passion for transforming ideas into
              reality. With a harmonious blend of diverse backgrounds and a
              vast array of skill sets, we join forces to create compelling
              solutions for our esteemed clients.
            </p>
                      
            <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Collaboration is at the heart of what we do. Our team thrives on
              the synergy that arises when unique perspectives converge,
              fostering an environment of boundless creativity. By harnessing
              our collective expertise, we produce extraordinary results that
              consistently surpass expectations.
            </p>
            
            <button 
              onClick={() => scrollToSection && scrollToSection(voicesSectionRef)} 
              className="btn" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2rem',
                borderRadius: '2rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                backgroundColor: '#ff9500',
                color: '#fff',
                border: 'none',
                marginTop: '2rem'
              }}
            >
              LEARN MORE
              <span style={{
                marginLeft: '0.5rem',
                width: '1.5rem',
                height: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: '#fff',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="#ff9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="#ff9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
                  
          <div className="studio-image">
            <div style={{
              width: '100%',
              height: '400px',
              backgroundColor: '#f1f1f1',
              borderRadius: '8px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}></div>
          </div>
        </div>
      </div>
      
      {/* Vertical text for section */}
      <div style={{
        position: 'absolute',
        top: '85%',
        left: '2rem',
        transform: 'translateY(-50%) rotate(180deg)',
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontSize: '0.8rem',
        color: '#aaa',
        zIndex: 3
      }}>
        Studio
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="scroll-indicator" 
        onClick={() => scrollToSection && scrollToSection(voicesSectionRef)}
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          zIndex: 3
        }}
      >
        <div style={{ 
          fontSize: '0.8rem', 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em', 
          color: '#aaa' 
        }}>
          SCROLL DOWN
        </div>
        <div style={{
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          backgroundColor: '#ff9500',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;