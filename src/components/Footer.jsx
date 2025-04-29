import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">Ashley.</div>
          <p style={{ color: '#aaa', marginBottom: '1rem' }}>Subscribe our newsletter:</p>
          <form className="newsletter-form">
            <input type="email" placeholder="ENTER YOUR EMAIL" className="newsletter-input" />
            <button type="submit" className="newsletter-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
          <div className="social-icons">
            {/* Using <a> for external social media links */}
            <a href="https://www.behance.net/" className="social-icon" target="_blank" rel="noopener noreferrer">Be</a>
            <a href="https://twitter.com/" className="social-icon" target="_blank" rel="noopener noreferrer">Tw</a>
            <a href="https://github.com/" className="social-icon" target="_blank" rel="noopener noreferrer">Gh</a>

            {/* Alternative: Using <Link> for internal routes (uncomment if needed) */}
            {/* <Link to="/behance" className="social-icon">Be</Link> */}
            {/* <Link to="/twitter" className="social-icon">Tw</Link> */}
            {/* <Link to="/github" className="social-icon">Gh</Link> */}
          </div>
          <p style={{ color: '#aaa', fontSize: '0.8rem', marginTop: '2rem' }}>
            © Copyright 2023 - ML. All Rights Reserved.
          </p>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1rem' }}>Links</h4>
          <ul className="footer-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1rem' }}>Legal</h4>
          <ul className="footer-nav">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms and conditions</Link></li>
            <li><Link to="/cookies">Cookie Policy</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1rem' }}>Contact</h4>
          <p style={{ color: '#aaa', marginBottom: '1rem' }}>
            <strong>Canada</strong><br />
            71 South Los Carneros Road,<br />
            California +51 174 705 811
          </p>
          <p style={{ color: '#aaa' }}>
            <strong>Germany</strong><br />
            Leehove 40, 2678 MC De Lier,<br />
            Netherlands +31 174 705 811
          </p>
        </div>
      </div>
      
      <div className="back-to-top">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;