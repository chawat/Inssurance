import React, { useState, useEffect } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import './HomeA.css';
import Header from './Header';
import NavigationMenu from './NavigationMenu';
import axios from 'axios';
import { Link } from 'react-router-dom';
const HomeA = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const [viewsCount, setViewsCount] = useState(null);
  const [personalQuotesCount, setPersonalQuotesCount] = useState(null);
  const [sumOfQuotes, setSumOfQuotes] = useState(null);
  const [messageCount, setMessageCount] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3003/api/getViewsLength')
      .then(response => {
        setViewsCount(response.data.totalViewsLength);
      })
      .catch(error => {
        console.error('Error fetching views count:', error);
      });
    
    axios.get('http://localhost:3003/api/getAllInsuranceCount')
      .then(response => {
        setPersonalQuotesCount(response.data.totalCount);
      })
      .catch(error => {
        console.error('Error fetching personal quotes count:', error);
      });

    axios.get('http://localhost:3003/api/getsumbusinessquote')
      .then(response => {
        setSumOfQuotes(response.data.totalCount);
      })
      .catch(error => {
        console.error('Error fetching sum:', error);
      });

    axios.get('http://localhost:3003/api/engthmessages')
      .then(response => {
        setMessageCount(response.data.messageLength);
      })
      .catch(error => {
        console.error('Error fetching message count:', error);
      });
  }, []);

  return (
    <div className='grid-containerhom'>
      <Header toggleSidebar={toggleSidebar} />
      <NavigationMenu openSidebarToggle={openSidebarToggle} toggleSidebar={toggleSidebar} />
      <main className='main-containerhom'>
        <div className='main-cards'>
          <div className='cardee'>
          <Link to="/dashboard/quotes/personal">
            <div className='card-inner'>
              <h3>Personal Quotes</h3>
              <BsFillArchiveFill className='card_icon'/>
            </div>
            <h1>{personalQuotesCount !== null ? personalQuotesCount : 'Loading...'}</h1>
            </Link>
          </div>
          <div className='cardee'>
          <Link to="/dashboard/quotes/business">
            <div className='card-inner'>
              <h3>Business Quotes</h3>
              <BsFillGrid3X3GapFill className='card_icon'/>
            </div>
            <h1>{sumOfQuotes !== null ? sumOfQuotes : 'Loading...'}</h1>
            </Link>
          </div>
          <div className='cardee'>
          <Link to="/dashboard/views">

            <div className='card-inner'>
              <h3>Views</h3>
              <BsPeopleFill className='card_icon'/>
            </div>
            <h1>{viewsCount !== null ? viewsCount : 'Loading...'}</h1>
            </Link>
          </div>
          <div className='cardee'>
          <Link to="/dashboard/messages">

            <div className='card-inner'>
              <h3>Messages</h3>
              <BsFillBellFill className='card_icon'/>
            </div>
            <h1>{messageCount !== null ? messageCount : 'Loading...'}</h1>
            </Link>
          </div>
        </div>
        <div className='charts'>
          {/* Charts will be added here */}
        </div>
      </main>
    </div>
  );
}

export default HomeA;
