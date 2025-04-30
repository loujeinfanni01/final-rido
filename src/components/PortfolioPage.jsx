import React, { useRef, useState, useEffect } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import GeometricBackground from './GemoetricBackground-white';

// Portfolio data with image paths in public folder
const portfolioItems = [
  {
    id: 1,
    category: 'DESIGN',
    date: 'MAY 24 2023',
    title: 'Kemia Honest Skincare',
    imageUrl: '/kemia-skincare.jpg',
    gridClass: 'portfolio-item-span-row-1',
    showMore: true,
  },
  {
    id: 2,
    category: 'PHOTOGRAPHY',
    date: 'MAY 24 2023',
    title: 'Cascade of Lava',
    imageUrl: '/cascade-lava.jpg',
    gridClass: 'portfolio-item-span-row-2',
    showMore: false,
  },
  {
    id: 3,
    category: 'BRANDING',
    date: 'MAY 24 2023',
    title: 'Interior design studio',
    imageUrl: '/interior-design.jpg',
    gridClass: 'portfolio-item-span-row-2',
    showMore: true,
  },
  {
    id: 4,
    category: 'DESIGN',
    date: 'MAY 24 2023',
    title: 'Home Security Camera',
    imageUrl: '/security-camera.jpg',
    gridClass: 'portfolio-item-span-row-1',
    showMore: false,
  },
  {
    id: 5,
    category: 'DESIGN',
    date: 'MAY 24 2023',
    title: 'Air Pro by Molekule',
    imageUrl: '/air-pro.jpg',
    gridClass: 'portfolio-item-span-row-2',
    showMore: true,
  },
  {
    id: 6,
    category: 'DESIGN',
    date: 'MAY 24 2023',
    title: "Tony's Chocolonely",
    imageUrl: '/tonys-choco.jpg',
    gridClass: 'portfolio-item-span-row-1',
    showMore: false,
  },
];

const PortfolioPage = () => {
  const worksRef = useRef(null);
  const heroSectionRef = useRef(null);
  
  // State to control visibility of back to top button
  const [showBackToTop, setShowBackToTop] = useState(false);
  // Animation states
  const [animate, setAnimate] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    works: false,
    contact: false
  });

  const scrollToWorks = () => {
    worksRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        works: isElementVisible(worksRef.current)
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
    <div className="portfolio-page-container" style={{ backgroundColor: '#fff' }}>
      {/* Hero Section */}
      <section 
        ref={heroSectionRef} 
        className="section hero-section-portfolio"
        style={{ backgroundColor: '#fff', color: '#000000', position: 'relative', overflow: 'hidden' }}
      >
        {/* Geometric Background */}
       
        <GeometricBackground color="#EAEDEE" />
        {/* Vertical Text */}
        <div 
          className="vertical-text" 
          style={{ 
            color: '#555', 
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}>
          PORTFOLIO
        </div>

        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-nav">
          <div className="nav-line"></div>
          <a href="/" className="breadcrumb-link">HOMEPAGE</a>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">PORTFOLIO</span>
        </div>

        <div className="portfolio-hero-content">
          <h1 
            className="portfolio-hero-title"
            style={{ 
              opacity: animate ? 1 : 0,
              transform: animate ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1s ease, transform 1s ease',
              transitionDelay: '0.2s'
            }}
          >
            Designing <span style={{ color: '#ff9500' }}>a Better</span><br />
            World <span style={{ color: '#ff9500' }}>Today</span>
          </h1>

          <div 
            style={{ 
              opacity: animate ? 1 : 0,
              transform: animate ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1s ease, transform 1s ease',
              transitionDelay: '0.4s'
            }}
          >
            <button 
              onClick={scrollToWorks} 
              className="btn btn-primary-services"
              style={{ backgroundColor: '#ff9500', color: '#fff' }}
            >
              OUR WORKS
              <span className="btn-icon-portfolio">
                <ArrowDown size={16} />
              </span>
            </button>
          </div>
        </div>
        
        <div 
          className="scroll-indicator" 
          onClick={scrollToWorks}
          style={{ 
            color: '#555',
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease, transform 1s ease',
            transitionDelay: '0.6s'
          }}
        >
         
          
        </div>
      </section>

      {/* Works Section */}
      <section 
        id="works" 
        ref={worksRef} 
        className="portfolio-works-section"
        style={{ 
          opacity: visibleSections.works ? 1 : 0,
          transform: visibleSections.works ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          opacity: visibleSections.works ? 1 : 0,
          transform: visibleSections.works ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>
          Our <span style={{ color: '#ff9500' }}>Works</span>
        </h2>
        
        <div className="portfolio-grid" style={{ gridAutoRows: 'minmax(300px, auto)' }}>
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`portfolio-item ${item.gridClass || ''}`}
              style={{ 
                opacity: visibleSections.works ? 1 : 0,
                transform: visibleSections.works ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
                transitionDelay: `${0.2 + (index * 0.1)}s`
              }}
            >
              {/* Image container */}
              <div className="portfolio-item-image-container">
                {/* Faint Background Circle */}
                {(item.id === 1 || item.id === 4) && (
                  <div className="portfolio-item-bg-circle"></div>
                )}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="portfolio-item-image"
                  loading="lazy"
                />
                {/* More Button Overlay */}
                {item.showMore && (
                  <div className="portfolio-item-more-overlay">
                    <button className="portfolio-item-more-button">MORE</button>
                  </div>
                )}
              </div>
              {/* Text Content */}
              <div className="portfolio-item-text">
                <p className="portfolio-item-category">
                  {item.category} <span className="portfolio-item-date">{item.date}</span>
                </p>
                <h3 className="portfolio-item-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

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
             <div className="back-to-top" style={{ backgroundColor: '#fff', color: '#fff' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
               
             </div>
           </section>
     

      {/* Footer */}
      <footer className="portfolio-footer" style={{ textAlign: 'center', padding: '2rem 0', backgroundColor: '#f5f5f5' }}>
        © {new Date().getFullYear()} Rido. All rights reserved.
      </footer>

      {/* Back to top button with conditional rendering based on scroll position */}
      {showBackToTop && (
        <div 
          className="vertical-back-to-top" 
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
          <ArrowUp size={16} />
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
    </div>
  );
};

export default PortfolioPage;