import React, { useState, useEffect } from "react";
import axios from 'axios';

const BusinessQuotes = () => {
  const [quotes, setQuotes] = useState(
   []
  );

  useEffect(() => {
    // Fetch quotes data from your backend API
    const fetchQuotes = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/getbusinessdata'); // Replace with your API endpoint
        console.log('Response data:', response.data); // Log response data for debugging
        setQuotes(response.data); // Set quotes state with the fetched data
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
  }, []);

  console.log('Quotes state:', quotes); // Log quotes state for debugging

  return (
    <div>
      <h1>Insurance Quotes</h1>
      
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>
            <div>Type: {quote.Type}</div>
            <div> Company Name: {quote.CompanyName}</div>
            <div> Business Type: {quote.BusinessType}</div>
            <div> Number of Employees: {quote.NumberOfEmployees}</div>
            <div> Contact Of Person: {quote.ContactOfPerson}</div>
            <div> Email: {quote.Email}</div>
            <div> Mobile: {quote.Mobile}</div>
            <div> LandLine: {quote.LandLine}</div>
        </li>
        ))}
      </ul>
      
    </div>
  );
}

export default BusinessQuotes;
