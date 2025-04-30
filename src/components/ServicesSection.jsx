import React, { useEffect, useRef } from 'react';
import CirclesGeometricBackground from './ServicesGeometricBackground';

const ServicesSection = ({ servicesSectionRef }) => {
  // Services data with their respective sub-services
  const services = [
    {
      id: 1,
      title: "Branding and Identity Design",
      description: "Our creative agency is a team of professionals focused on helping your brand grow.",
      subServices: [
        "UX AUDITS", 
        "DESIGN THINKING", 
        "METHODOLOGIES", 
        "WIREFRAMING"
      ]
    },
    {
      id: 2,
      title: "Website Design and Development",
      description: "Our creative agency is a team of professionals focused on helping your brand grow.",
      subServices: [
        "UX AUDITS", 
        "DESIGN THINKING", 
        "METHODOLOGIES", 
        "WIREFRAMING"
      ]
    }
  ];

  // Create refs for each service item
  const serviceRefs = useRef(services.map(() => React.createRef()));
  const geometryRef = useRef(null);
  
  // Automatically trigger animations when component mounts
  useEffect(() => {
    // Add animation class to geometry element
    if (geometryRef.current) {
      geometryRef.current.classList.add('animate-on-scroll');
    }
    
    // Add animation class to each service item with staggered delay
    serviceRefs.current.forEach((ref, index) => {
      if (ref.current) {
        // Add small delay between each service animation
        setTimeout(() => {
          ref.current.classList.add('animate-service');
        }, 300 + (index * 200)); // 300ms base delay + 200ms per item
      }
    });
  }, []);

  return (
    <section ref={servicesSectionRef} className="section services-section">
      <div className="services-container">
        {/* Geometric left side with circles */}
        <div ref={geometryRef} className="services-geometry">
          <CirclesGeometricBackground />
        </div>
        
        {/* Services content on the right */}
        <div className="services-content">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-item"
              ref={serviceRefs.current[index]}
            >
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              
              <div className="service-details">
                {service.subServices.map((subService, idx) => (
                  <div 
                    key={idx} 
                    className="sub-service"
                    style={{ transitionDelay: `${0.3 + (idx * 0.1)}s` }}
                  >
                    {subService}
                  </div>
                ))}
              </div>
              
              <div className="read-more-container">
                <a href={`/services/${service.id}`} className="read-more-btn">
                  READ MORE
                  <span className="arrow-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;