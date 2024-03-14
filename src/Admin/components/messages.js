import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavigationMenu from '../NavigationMenu';
import './MessagesusStyles.css'; // Import the CSS file

const Messagesus = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    // Fetch messages data from your backend API
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/messages'); // Replace with your API endpoint
        console.log('Response data:', response.data); // Log response data for debugging
        setQuotes(response.data); // Set messages state with the fetched data
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  console.log('Messages state:', quotes); // Log messages state for debugging

  return (
    <div className="page-containerme">
      <div className="menume">
        <NavigationMenu />
      </div>
      <div className="contentme">
        <div className="message-box">
          <ul>
            {quotes.map((message, index) => (
              <li key={index}>
                <div>FullName: {message.FullName}</div>
                <div>Email: {message.Email}</div>
                <div>Mobile: {message.Mobile}</div>
                <div>Message: {message.Message}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Messagesus;
