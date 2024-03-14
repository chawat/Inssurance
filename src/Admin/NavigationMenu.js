// NavigationMenu.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigationMenu.css'; // Import CSS file

const NavigationMenu = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <ul className="menu">
      <li className="menu-item">
        <div className="menu-link" onMouseEnter={toggleSubmenu} onMouseLeave={toggleSubmenu}>
          Quote
          {showSubmenu && (
            <ul className="submenu">
              <li className="submenu-item"><Link to="/dashboard/quotes/personal" className="submenu-link">Personal Quotes</Link></li>
              <li className="submenu-item"><Link to="/dashboard/quotes/business" className="submenu-link">Business Quotes</Link></li>
            </ul>
          )}
        </div>
      </li>
      <li className="menu-item"><Link to="/dashboard/views" className="menu-link">Views</Link></li>
      <li className="menu-item"><Link to="/dashboard/quoteviews" className="menu-link">Quotes Views</Link></li>
      <li className="menu-item"><Link to="/dashboard/messages" className="menu-link">Messages</Link></li>
    </ul>
  );
};

export default NavigationMenu;
