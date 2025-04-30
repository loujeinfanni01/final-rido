import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhiteTheme, setIsWhiteTheme] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if we're on the services OR portfolio page
    if (location.pathname === '/services' || location.pathname === '/Portfolio'|| location.pathname === '/contact') {
      setIsWhiteTheme(true);
    } else {
      setIsWhiteTheme(false);
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? 'menu-link active' : 'menu-link';
  };

  // Define styles based on theme
  const navbarStyle = {
    backgroundColor: isWhiteTheme ? '#fff' : '#000',
    color: isWhiteTheme ? '#000' : '#fff'
  };

  const menuToggleStyle = {
    color: isWhiteTheme ? '#000' : '#fff'
  };

  return (
    <>
      <nav className={`navbar ${isWhiteTheme ? 'navbar-white' : 'navbar-dark'}`} style={navbarStyle}>
        <Link to="/" className="logo" style={{ color: isWhiteTheme ? '#000' : '#fff' }}>Rido.</Link>
        <button className="menu-toggle" onClick={toggleMenu} style={menuToggleStyle}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu" style={{ backgroundColor: isWhiteTheme ? '#fff' : '#000', color: isWhiteTheme ? '#000' : '#fff' }}>
          <button className="menu-close" onClick={closeMenu} style={{ color: isWhiteTheme ? '#000' : '#fff' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <ul className="menu-links">
            <li>
              <Link to="/" className={getLinkClass('/')} onClick={closeMenu} style={{ color: isWhiteTheme ? '#000' : '#fff' }}>
                Homepage
              </Link>
            </li>
            <li>
              <Link to="/Portfolio" className={getLinkClass('/Portfolio')} onClick={closeMenu} style={{ color: isWhiteTheme ? '#000' : '#fff' }}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/services" className={getLinkClass('/services')} onClick={closeMenu} style={{ color: isWhiteTheme ? '#000' : '#fff' }}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className={getLinkClass('/contact')} onClick={closeMenu} style={{ color: isWhiteTheme ? '#000' : '#fff' }}>
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