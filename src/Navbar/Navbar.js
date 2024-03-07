import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [navbarBg, setNavbarBg] = useState('transparent');
  const handleClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBg('white'); // Change background color to white when scrolled
      } else {
        setNavbarBg('transparent'); // Set back to transparent when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${navbarBg === 'white' ? 'scrolled' : ''}`}>
      <img src={logo} alt="Healthcare Insurance" className='logo-img' />
      <ul>
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
