import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navigationMenu.css'; 
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsX } from 'react-icons/bs';

const NavigationMenu = ({ openSidebarToggle, toggleSidebar }) => {
  // Function to handle the toggle of the sidebar
  const handleToggleSidebar = () => {
    toggleSidebar(); // Call the toggleSidebar function passed from the parent component
  };

  // Effect to update sidebar state based on screen width
  useEffect(() => {
    const handleResize = () => {
      // You can implement logic here if you want to change the sidebar behavior based on screen width
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header'/> SHOP
        </div>
        {openSidebarToggle && (
          <span className='icon close_icon' onClick={handleToggleSidebar}>
            <BsX />
          </span>
        )}
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/HomeA">
            <BsGrid1X2Fill className='icon'/> Dashboard
          </Link>         
        </li>
        <li className='sidebar-list-item'>
          <Link to="/dashboard/quotes/personal">
            <BsFillArchiveFill className='icon'/> Personal Quotes
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/dashboard/quotes/business">
            <BsFillGrid3X3GapFill className='icon'/> Business Quotes
          </Link>
        </li>
        {/* <li className='sidebar-list-item'>
          <Link to="/dashboard/quotes/house">
            <BsFillGrid3X3GapFill className='icon'/> House quotes
          </Link>
        </li> */}
        <li className='sidebar-list-item'>
          <Link to="/dashboard/views">
            <BsPeopleFill className='icon'/> Views
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/dashboard/quoteviews">
            <BsListCheck className='icon'/>Quotes Views
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/dashboard/messages">
            <BsMenuButtonWideFill className='icon'/> Messages
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGearFill className='icon'/> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default NavigationMenu;
