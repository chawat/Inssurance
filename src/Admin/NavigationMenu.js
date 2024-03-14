import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <ul>
      <li>
        <Link to="/dashboard/quotes">Quotes</Link>
        <ul>
          <li><Link to="/dashboard/quotes/personal">Personal Quotes</Link></li>
          <li><Link to="/dashboard/quotes/business">Business Quotes</Link></li>
        </ul>
      </li>
      <li><Link to="/dashboard/views">Views</Link></li>
      <li><Link to="/dashboard/quoteviews">Quotes Views</Link></li>
      <li><Link to="/dashboard/messages">Messages</Link></li>
    </ul>
  );
};

export default NavigationMenu;
