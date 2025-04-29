import React from 'react';
import { Link } from 'react-router-dom';

const TeamSection = () => {
  // Placeholder data for team members
  const teamMembers = [
    { id: 1, name: 'Member 1', image: 'placeholder1.jpg' },
    { id: 2, name: 'Member 2', image: 'placeholder2.jpg' },
    { id: 3, name: 'Member 3', image: 'placeholder3.jpg' },
    { id: 4, name: 'Member 4', image: 'placeholder4.jpg' },
  ];

  return (
    <section className="section" style={{ backgroundColor: '#fff', color: '#000' }}>
      
      
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
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            {/* Placeholder for image */}
            <div className="image-placeholder" style={{
              width: '100%',
              paddingBottom: '120%', // Aspect ratio for portrait images
              backgroundColor: '#eee',
              borderRadius: '8px'
            }}></div>
          </div>
        ))}
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

export default TeamSection;
