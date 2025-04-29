import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="page-container">
      {/* Section Titre */}
      <section className="section hero-section-contact" style={{ minHeight: '60vh' }}>
        <div className="vertical-text">CONTACT</div>
        <div>
          <p style={{ color: '#aaa', marginBottom: '0.5rem' }}>HOMEPAGE / CONTACT</p>
          <h1>
            Let's make an <span>impact</span><br />
            together. Ready <span>when you are</span>
          </h1>
        </div>
      </section>

      {/* Section Formulaire de Contact */}
      <section className="section contact-form-section">
        <div className="vertical-text">CONTACT</div>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.</p>
            
            <div className="contact-details" style={{ marginTop: '2rem' }}>
              <div className="contact-item" style={{ marginBottom: '1.5rem' }}>
                <h4>Email</h4>
                <p>info@ashley.com</p>
              </div>
              
              <div className="contact-item" style={{ marginBottom: '1.5rem' }}>
                <h4>Phone</h4>
                <p>+51 174 705 811</p>
              </div>
              
              <div className="contact-item">
                <h4>Address</h4>
                <p>
                  <strong>Canada</strong><br />
                  71 South Los Carneros Road,<br />
                  California
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <strong>Germany</strong><br />
                  Leehove 40, 2678 MC De Lier,<br />
                  Netherlands
                </p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your name" 
                  style={{ 
                    width: '100%', 
                    padding: '1rem', 
                    backgroundColor: '#111', 
                    border: '1px solid #333',
                    borderRadius: '0.5rem',
                    color: '#fff'
                  }} 
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your email" 
                  style={{ 
                    width: '100%', 
                    padding: '1rem', 
                    backgroundColor: '#111', 
                    border: '1px solid #333',
                    borderRadius: '0.5rem',
                    color: '#fff'
                  }} 
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Subject" 
                  style={{ 
                    width: '100%', 
                    padding: '1rem', 
                    backgroundColor: '#111', 
                    border: '1px solid #333',
                    borderRadius: '0.5rem',
                    color: '#fff'
                  }} 
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows="5" 
                  style={{ 
                    width: '100%', 
                    padding: '1rem', 
                    backgroundColor: '#111', 
                    border: '1px solid #333',
                    borderRadius: '0.5rem',
                    color: '#fff',
                    resize: 'vertical'
                  }}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%' }}
              >
                SEND MESSAGE
                <span className="btn-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
        
        <div className="back-to-top">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
