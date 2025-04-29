import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? 'menu-link active' : 'menu-link';
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">Rido.</Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu">
          <button className="menu-close" onClick={closeMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <ul className="menu-links">
            <li>
              <Link to="/" className={getLinkClass('/')} onClick={closeMenu}>
                Homepage
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className={getLinkClass('/portfolio')} onClick={closeMenu}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="./MenuSection.tsx" className={getLinkClass('/services')} onClick={closeMenu}>
                Services
              </Link>
            </li>
            
            <li>
              <Link to="../pages/ContactPage.jsx" className={getLinkClass('../pages/ContactPage.jsx')} onClick={closeMenu}>
               Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;