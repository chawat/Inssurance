// BusinessQuotes.jsx

import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavigationMenu from '../NavigationMenu';
import './businessQuotes.css'; // Import the CSS file
import Header from '../Header';

const BusinessQuotes = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/getbusinessdatapending');
        setQuotes(response.data);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
  }, []);

  const handleDoneClick = async (id) => {
    try {
      await axios.put(`http://localhost:3003/api/businessinsurance/updatestatus/${id}`);
      setQuotes(quotes.filter(quote => quote._id !== id));
      window.alert('Status updated successfully');
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-containerbus'>
      <Header OpenSidebar={OpenSidebar}/>
      <NavigationMenu openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <main className='main-containerbus'>
        <div className="contentbus">
          {quotes.length ? (
            <ul className="quote-list">
              {quotes.map((quote, index) => (
                <li key={index}>
                  <div className="quote-boxbus">
                    <h1>{quote.Type}</h1>
                    <div>Company Name: {quote.CompanyName}</div>
                    <div>Business Type: {quote.BusinessType}</div>
                    <div>Number of Employees: {quote.NumberOfEmployees}</div>
                    <div>Contact Of Person: {quote.ContactOfPerson}</div>
                    <div>Email: {quote.Email}</div>
                    <div>Mobile: {quote.Mobile}</div>
                    <div>LandLine: {quote.Landline}</div>
                    <button onClick={() => handleDoneClick(quote._id)}>Done</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-quote">No quotes available.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default BusinessQuotes;
