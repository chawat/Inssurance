import React from 'react';
import { useState } from 'react';
import NavigationMenu from './NavigationMenu';
import HomeA from './HomeA';
import Header from './Header'
const DashboardPage = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <NavigationMenu openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <HomeA />
      {/* Other content of the dashboard page */}
    </div>
  );
};

export default DashboardPage;
