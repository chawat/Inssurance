import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavigationMenu from '../NavigationMenu';
import Header from '../Header';
import './MessagesusStyles.css'; // Import the CSS file
import './Houseadmin.css';

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
    <div className='grid-containerhouse'>
      <Header toggleSidebar={toggleSidebar} />
      <NavigationMenu openSidebarToggle={openSidebarToggle} toggleSidebar={toggleSidebar} />
      <main className='main-containerhouse'>
        <div className="contenthouse">
          {messages.length ? (
            <table className="house-table">
              <thead>
                <tr>
                  <th>FullName</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message, index) => (
                  <tr key={index}>
                    <td>{message.FullName}</td>
                    <td>{message.Email}</td>
                    <td>{message.Mobile}</td>
                    <td>{message.Message}</td>
                    <td>
                      <button onClick={() => handleDoneClick(message._id)}>Done</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="empty-message">No messages available.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Messagesus;
