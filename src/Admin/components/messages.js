import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavigationMenu from '../NavigationMenu';
import './MessagesusStyles.css'; // Import the CSS file

const Messagesus = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages data from your backend API
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/getmessagedatapending'); // Replace with your API endpoint
        console.log('Response data:', response.data); // Log response data for debugging
        setMessages(response.data); // Set messages state with the fetched data
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  console.log('Messages state:', messages); // Log messages state for debugging

  const handleDoneClick = async (id) => {
    try {
      await axios.put(`http://localhost:3003/api/message/updatestatus/${id}`);
      // After updating, remove the message from the displayed list
      setMessages(messages.filter(message => message._id !== id));
      window.alert('Status updated successfully'); // Show alert
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="page-containerme">
      <div className="menume">
        <NavigationMenu />
      </div>
      <div className="contentme">
        <div className="message-box">
          <ul>
            {messages.map((message, index) => (
              <li key={index}>
                <div>FullName: {message.FullName}</div>
                <div>Email: {message.Email}</div>
                <div>Mobile: {message.Mobile}</div>
                <div>Message: {message.Message}</div>
                <button onClick={() => handleDoneClick(message._id)}>Done</button> {/* Pass message ID to the handleDoneClick function */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Messagesus;
