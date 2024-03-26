import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
    setNavbarOpen(false); // Close the navbar when a link is clicked
  };

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen); // Toggle the navbar when the hamburger icon is clicked
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${navbarOpen ? 'open' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <img src={logo} alt="Healthcare Insurance" className="logo-img" />
      <div className="hamburger" onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={navbarOpen ? 'active' : ''}>
        <li><Link to="/" className={activeLink === 'home' ? 'active' : ''} onClick={() => handleClick('home')}>HOME</Link></li>
        <li><Link to="/aboutus" className={activeLink === 'about' ? 'active' : ''} onClick={() => handleClick('about')}>ABOUT US</Link></li>
        <li><Link to="/PersonalServices" className={activeLink === 'PersonalServices' ? 'active' : ''} onClick={() => handleClick('PersonalServices')}>Personal Services</Link></li>
        <li><Link to="/BusinessServices" className={activeLink === 'BusinessServices' ? 'active' : ''} onClick={() => handleClick('BusinessServices')}>Business Services</Link></li>
        <li><Link to="/contactus" className={activeLink === 'contact' ? 'active' : ''} onClick={() => handleClick('contact')}>CONTACT US</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
