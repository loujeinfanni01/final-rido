import React from 'react';
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

  return (
    <section ref={servicesSectionRef} className="section services-section">
      <div className="services-container">
        {/* Geometric left side with circles from CirclesGeometricBackground */}
        <div className="services-geometry">
          <CirclesGeometricBackground />
        </div>
        
        {/* Services content on the right */}
        <div className="services-content">
          {services.map((service) => (
            <div key={service.id} className="service-item">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              
              <div className="service-details">
                {service.subServices.map((subService, index) => (
                  <div key={index} className="sub-service">
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