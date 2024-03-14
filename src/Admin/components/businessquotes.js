// BusinessQuotes.jsx

import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavigationMenu from '../NavigationMenu';
import './businessQuotes.css'; // Import the CSS file

const BusinessQuotes = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        // Fetch quotes data from your backend API
        const fetchQuotes = async () => {
            try {
                const response = await axios.get('http://localhost:3003/api/getbusinessdatapending');
                console.log('Response data:', response.data); // Log response data for debugging
                setQuotes(response.data); // Set quotes state with the fetched data
            } catch (error) {
                console.error('Error fetching quotes:', error);
            }
        };

        fetchQuotes();
    }, []);

    console.log('Quotes state:', quotes); // Log quotes state for debugging

    const handleDoneClick = async (id) => {
        try {
            await axios.put(`http://localhost:3003/api/businessinsurance/updatestatus/${id}`);
            // After updating, remove the quote from the displayed list
            setQuotes(quotes.filter(quote => quote._id !== id));
            window.alert('Status updated successfully'); // Show alert
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    return (
        <div className="page-container">
          <div className="menuuu">
            <NavigationMenu />
          </div>
          
          <div className="content">
         
          <div className="quote-box">
          <h1>Insurance Quotes</h1>

            <ul>
                {quotes.map((quote, index) => (
                    <li key={index}>
                        <div><h2>Type: {quote.Type}</h2></div>
                        <div> Company Name: {quote.CompanyName}</div>
                        <div> Business Type: {quote.BusinessType}</div>
                        <div> Number of Employees: {quote.NumberOfEmployees}</div>
                        <div> Contact Of Person: {quote.ContactOfPerson}</div>
                        <div> Email: {quote.Email}</div>
                        <div> Mobile: {quote.Mobile}</div>
                        <div> LandLine: {quote.Landline}</div>
                        <button onClick={() => handleDoneClick(quote._id)}>Done</button> {/* Pass quote ID to the handleDoneClick function */}
                    </li>
                ))}
            </ul>
          </div>
          </div>
        </div>
    );
}

export default BusinessQuotes;
