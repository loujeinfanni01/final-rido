import React from 'react';

const StudioSection = () => {
  return (
    <section className="section">
      *
      
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
            {/* Image placeholder - in a real implementation, you would use an actual image */}
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
  );
};

export default StudioSection;
