

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './navigationMenu.css'; // Import CSS file

// const NavigationMenu = () => {
//   const [showSubmenu, setShowSubmenu] = useState(false);

//   const toggleSubmenu = () => {
//     setShowSubmenu(!showSubmenu);
//   };

//   return (
//     <ul className="menu">
//       <li className="menu-item">
//         <div className="menu-link" onMouseEnter={toggleSubmenu} onMouseLeave={toggleSubmenu}>
//           Quote
//           {showSubmenu && (
//             <ul className="submenu">
//               <li className="submenu-item"><Link to="/dashboard/quotes/personal" className="submenu-link">Personal Quotes</Link></li>
//               <li className="submenu-item"><Link to="/dashboard/quotes/business" className="submenu-link">Business Quotes</Link></li>
//             </ul>
//           )}
//         </div>
//       </li>
//       <li className="menu-item"><Link to="/dashboard/views" className="menu-link">Views</Link></li>
//       <li className="menu-item"><Link to="/dashboard/quoteviews" className="menu-link">Quotes Views</Link></li>
//       <li className="menu-item"><Link to="/dashboard/messages" className="menu-link">Messages</Link></li>
//     </ul>
//   );
// };

// export default NavigationMenu;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigationMenu.css'; 
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

const NavigationMenu= ({openSidebarToggle, OpenSidebar}) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> SHOP
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
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
            <li className='sidebar-list-item'>
            <Link to="/dashboard/views">
                    <BsPeopleFill className='icon'/> Views</Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to="/dashboard/quoteviews">
                    <BsListCheck className='icon'/>Quotes Views</Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to="/dashboard/messages">
                    <BsMenuButtonWideFill className='icon'/> Messages</Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default NavigationMenu