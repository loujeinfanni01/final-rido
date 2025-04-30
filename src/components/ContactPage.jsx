import React, { useState } from 'react';
import "../styles/Contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="page-container">
      {/* Header */}
      <header>
        <a href="/" className="logo">A.</a>
        <button className="menu-toggle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </header>
      
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <a href="/" className="breadcrumb-link">HOMEPAGE</a>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">CONTACT</span>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="hero-section-contact">
        <h1 className="hero-title-contact ">Get in touch!</h1>
      </div>
      
      {/* Main Content */}
      <main className="main-content-contact">
        <div className="title-container-contact">
          <h2 className="title">Let's <span className="title-light">Talk</span></h2>
        </div>
        
        <div className="form-contact">
          {/* Contact Form */}
          <div className="contact-form-contact">
            <div className="input-group">
              <label htmlFor="name" className="input-label">WHAT'S YOUR NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="input-group-contact">
              <label htmlFor="email" className="input-label">YOUR EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="input-group-contact">
              <label htmlFor="message" className="input-label">TELL US ABOUT OUR PROJECT</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                rows="5"
              ></textarea>
            </div>
            
            <div>
              <button 
                onClick={handleSubmit}
                className="send-button"
              >
                SEND MESSAGE
                <span className="button-circle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L20 12L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-section">
              <h2>Let's talk</h2>
              <p>
                We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="contact-details">
              <div className="contact-item">
                <h3>Email</h3>
                <p>info@agency.com</p>
              </div>
              
              <div className="contact-item">
                <h3>Phone</h3>
                <p>+1 (234) 567-8900</p>
              </div>
              
              <div className="contact-item">
                <h3>Address</h3>
                <div>
                  <p>
                    <strong>Headquarters</strong><br />
                    123 Design Street,<br />
                    New York, NY 10001
                  </p>
                  <br />
                  <p>
                    <strong>Europe Office</strong><br />
                    456 Creative Avenue,<br />
                    Berlin, Germany
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Side Text */}
      <div className="side-text">
        <span>CONTACT</span>
      </div>
      
      {/* Back to Top Button */}
      <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default ContactPage;