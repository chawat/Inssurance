// Messagesus.js

import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavigationMenu from '../NavigationMenu';
import './MessagesusStyles.css'; // Import the CSS file
import Header from '../Header';

const Messagesus = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/getmessagedatapending');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleDoneClick = async (id) => {
    try {
      await axios.put(`http://localhost:3003/api/message/updatestatus/${id}`);
      setMessages(messages.filter(message => message._id !== id));
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
    <div className='grid-containerme'>
      <Header toggleSidebar={toggleSidebar} /> {/* Pass toggleSidebar function */}
      <NavigationMenu openSidebarToggle={openSidebarToggle} toggleSidebar={toggleSidebar} />
      <main className='main-containerme'>
        <div className="contentme">
          {messages.length ? (
            <ul className="message-list">
              {messages.map((message, index) => (
                <li key={index}>
                  <div className="message-box">
                    <div>FullName: {message.FullName}</div>
                    <div>Email: {message.Email}</div>
                    <div>Mobile: {message.Mobile}</div>
                    <div>Message: {message.Message}</div>
                    <button onClick={() => handleDoneClick(message._id)}>Done</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-message">No messages available.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Messagesus;
