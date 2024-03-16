// Header.js
import React from 'react';
import './Header.css';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

const Header = ({ toggleSidebar }) => {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={toggleSidebar} />
      </div>
      <div className='header-content'>
        <BsSearch className='icon' />
        <div className='header-right'>
          <BsFillBellFill className='icon' />
          <BsFillEnvelopeFill className='icon' />
          <BsPersonCircle className='icon' />
        </div>
      </div>
    </header>
  );
}

export default Header;
