import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from '../Header';
import NavigationMenu from '../NavigationMenu';
import './Houseadmin.css'; // Import the CSS file

const Grouphealthadmin = () => {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get('http://localhost:3003/api/getPendingGroupHealthData');
      console.log('Response data:', response.data);
      setQuotes(response.data.groupHealthData); // Update the state directly with response data
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const updateStatus = async (id) => {
    try {
      await axios.put(`http://localhost:3003/api/businessinsurance/updatestatus/${id}`);
      setQuotes(quotes.filter(quote => quote._id !== id));
      window.alert('Status updated successfully');
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-containerhouse'>
      <Header toggleSidebar={toggleSidebar} />
      <NavigationMenu openSidebarToggle={openSidebarToggle} toggleSidebar={toggleSidebar} />
      <main className='main-containerhouse'>
        <div className="contenthouse">
          {quotes.length > 0 ? (
            <div className="quote-boxhouse">
              <h2>Group Health Insurance</h2>
              <table className="house-table">
                <thead>
                  <tr>
                    <th>CompanyName</th>
                    <th>BusinessType</th>
                    <th>NumberOfEmployees</th>
                    <th>ContactOfPerson</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Landline</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.map((quote, index) => (
                    <tr key={index}>
                      <td>{quote.CompanyName}</td>
                      <td>{quote.BusinessType}</td>
                      <td>{quote.NumberOfEmployees}</td>
                      <td>{quote.ContactOfPerson}</td>
                      <td>{quote.Email}</td>
                      <td>{quote.Mobile}</td>
                      <td>{quote.Landline}</td>
                      <td>
                        <button onClick={() => updateStatus(quote._id)}>Done</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="empty-message">No quotes available.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Grouphealthadmin;
