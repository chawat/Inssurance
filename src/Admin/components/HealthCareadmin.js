import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from '../Header';
import NavigationMenu from '../NavigationMenu';
import './Houseadmin.css'; // Import the CSS file

const Healthcareadmin = () => {
  const [quotes, setQuotes] = useState({
    Data: []
  });

  const fetchQuotes = async () => {
    try {
      const response = await axios.get('http://localhost:3003/api/getHealthCare');
      console.log('Response data:', response.data);
      setQuotes({ Data: response.data }); // Update the state directly with response data
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const updateStatus = async (schema, id) => {
    try {
      const response = await axios.put(`http://localhost:3003/api/insurance/${schema}/updatestatus/${id}`);
      // Remove the quote with the given id from the state
      setQuotes(prevState => ({
        Data: prevState.Data.filter(quote => quote._id !== id)
      }));
      window.alert('Status updated successfully');
      console.log(response.data);
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
          {quotes.Data.length > 0 ? (
            <div className="quote-boxhouse">
              <h2>Healthcare Insurance</h2>
              <table className="house-table">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Father Name</th>
                    <th>Email</th>
                    <th>Landline</th>
                    <th>Mobile</th>
                    <th>Date of Birth</th>
                    <th>Occupation</th>
                    <th>Hospital Network</th>
                    <th>Hospitalization Class</th>
                    <th>Cover type</th>
                    <th>Additional Cover</th>
                    <th>Optional Cover</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.Data.map((quote, index) => (
                    <tr key={index}>
                      <td>{quote.matchedPersonals && quote.matchedPersonals[0].FirstName}</td>
                      <td>{quote.matchedPersonals && quote.matchedPersonals[0].LastName}</td>
                      <td>{quote.matchedPersonals && quote.matchedPersonals[0].FatherName}</td>
                      <td>{quote.matchedPersonals && quote.matchedPersonals[0].Email}</td>
                      <td>{quote.matchedPersonals && quote.matchedPersonals[0].LandLine}</td>
                      <td>{quote.matchedPersonals && quote.matchedPersonals[0].Mobile}</td>
                      <td>{quote.matchedPersonals && quote.matchedPersonals[0].DateOfBirth}</td>
                      <td>{quote.matchedPersonals && quote.matchedPersonals[0].Occupation}</td>
                      <td>{quote.HospitalNetwork}</td>
                      <td>{quote.HospitalizationClass}</td>
                      <td>{quote.Covertype}</td>
                      <td>
                        {quote.AdditionalCover && (
                          <ul>
                            {quote.AdditionalCover.map((cover, coverIndex) => (
                              <li key={coverIndex}>{cover}</li>
                            ))}
                          </ul>
                        )}
                      </td>
                      <td>
                        {quote.OptionalCover && (
                          <ul>
                            {quote.OptionalCover.map((cover, coverIndex) => (
                              <li key={coverIndex}>{cover}</li>
                            ))}
                          </ul>
                        )}
                      </td>
                      <td>
                        <button onClick={() => updateStatus('healthcare', quote._id)}>Done</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="empty-message">No healthcare insurance quotes available.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Healthcareadmin;
