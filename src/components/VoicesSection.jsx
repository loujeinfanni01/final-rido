import React from 'react';

const VoicesSection = () => {
  // Placeholder data for testimonials
  const testimonials = [
    { id: 1, image: 'avatar1.jpg', active: true },
    { id: 2, image: 'avatar2.jpg' },
    { id: 3, image: 'avatar3.jpg' },
    { id: 4, image: 'avatar4.jpg' },
    { id: 5, image: 'avatar5.jpg' },
    { id: 6, image: 'avatar6.jpg' },
  ];

  return (
    <section className="section" style={{ backgroundColor: '#fff', color: '#000' }}>
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
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={`testimonial-avatar ${testimonial.active ? 'active' : ''}`}>
            {/* Placeholder for avatar image */}
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
        ”
      </div>
      
      <div className="back-to-top" style={{ backgroundColor: '#000', color: '#fff' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default VoicesSection;
