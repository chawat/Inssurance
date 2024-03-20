import React from 'react';
import './Header.css';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsJustify } from 'react-icons/bs';

const Header = ({ toggleSidebar, openSidebarToggle }) => {
  return (
    <header className='header'>
      <div className='header-content'>
        <div className='header-left'>
          { !openSidebarToggle && /* Render the menu icon only if sidebar is closed */
            <div className='menu-icon'>
              <BsJustify className='icon' onClick={toggleSidebar} />
            </div>
          }
        </div>
        <div className='header-right'>
          <BsPersonCircle className='icon' />
        </div>
      </div>
    </header>
  );
}

export default Header;
