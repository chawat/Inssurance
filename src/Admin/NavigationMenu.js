import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navigationMenu.css'; 
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsX } from 'react-icons/bs';
  import { IoMdLogOut } from "react-icons/io";

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
      <Link to="/HomeA" className="sidebar-link">
        <li className='sidebar-list-item'>
          
            <BsGrid1X2Fill className='icon'/> Dashboard
                
        </li>
        </Link>
        <Link to="/dashboard/quotes/personal" className="sidebar-link"> 
        <li className='sidebar-list-item'>
          
            <BsFillArchiveFill className='icon'/> Personal Quotes
         
        </li>
        </Link>
        <Link to="/dashboard/quotes/business"  className="sidebar-link">
        <li className='sidebar-list-item'>
         
            <BsFillGrid3X3GapFill className='icon'/> Business Quotes
          
        </li>
        </Link>
        {/* <li className='sidebar-list-item'>
          <Link to="/dashboard/quotes/house">
            <BsFillGrid3X3GapFill className='icon'/> House quotes
          </Link>
        </li> */}
         <Link to="/dashboard/views" className="sidebar-link">
        <li className='sidebar-list-item'>
         
            <BsPeopleFill className='icon'/> Views
          
        </li>
        </Link>
        <Link to="/dashboard/quoteviews" className="sidebar-link">

        <li className='sidebar-list-item'>
            <BsListCheck className='icon'/>Quotes Views
        </li>
        </Link>
        <Link to="/dashboard/messages" className="sidebar-link">

        <li className='sidebar-list-item'>
            <BsMenuButtonWideFill className='icon'/> Messages
        </li>
        </Link>
        <Link to='/Login' className="sidebar-link">
        <li className='sidebar-list-item'>
         
        <IoMdLogOut  className='icon'/>   Logout
          
        </li>
        </Link>
      </ul>
    </aside>
  );
}

export default NavigationMenu;
