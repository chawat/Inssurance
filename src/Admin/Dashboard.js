import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li>
            <Link to="/dashboard/quotes" >Quotes</Link>
               <ul>
               <Link to="/dashboard/quotes/personal" >Personal Quotes</Link>
               <Link to="/dashboard/quotes/business" >Business Quotes</Link>

                </ul>
          </li>
          <li>
            <Link to="/dashboard/views">Views</Link>
          </li>
          <li>
            <Link to="/dashboard/messages">Messages</Link>
          </li>
        </ul>
      </div>
      <div className="main-content">
        {/* Content for the selected menu item */}
        {/* You can render different components based on the selectedMenuItem state */}
      </div>
    </div>
  );
};

export default Dashboard;
