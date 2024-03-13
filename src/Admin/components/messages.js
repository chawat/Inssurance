import React, { useState, useEffect } from "react";
import axios from 'axios';

const Messagesus = () => {
  const [quotes, setQuotes] = useState(
   []
  );

  useEffect(() => {
    // Fetch quotes data from your backend API
    const fetchQuotes = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/messages'); // Replace with your API endpoint
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
      <h1>Messages</h1>
      
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>
            <div>FullName: {quote.FullName}</div>
            <div> Email: {quote.Email}</div>
            <div> Mobile: {quote.Mobile}</div>
            <div> Message: {quote.Message}</div>
        </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Messagesus;
