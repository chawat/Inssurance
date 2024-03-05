
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="navbar">
      {/* <h2 className="logo"> <img src={logo} alt="Healthcare Insurance" /></h2> */}
      <h2 className="logo"> NEXTGUARD</h2>
      <ul>
        <li><Link to="/" className={activeLink === 'home' ? 'active' : ''} onClick={() => handleClick('home')}>HOME</Link></li>
        <li><Link to="/aboutus" className={activeLink === 'about' ? 'active' : ''} onClick={() => handleClick('about')}>ABOUT US</Link></li>
        <li><Link to="/PersonalServices" className={activeLink === 'PersonalServices' ? 'active' : ''} onClick={() => handleClick('PersonalServices')}>Personal Services</Link></li>
        <li><Link to="/BusinessServices" className={activeLink === 'BusinessServices' ? 'active' : ''} onClick={() => handleClick('BusinessServices')}>Business Services</Link></li>
        <li><Link to="/contactus" className={activeLink === 'contact' ? 'active' : ''} onClick={() => handleClick('contact')}>CONTACT US</Link></li>
        {/* <li><Link to="/Login" className={activeLink === 'Login' ? 'active' : ''} onClick={() => handleClick('Login')}>Login</Link></li> */}

      </ul>
    </div>
  );
};

export default Navbar;
