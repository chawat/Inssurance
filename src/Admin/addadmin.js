import React, { useState } from 'react';
import './modal.css'; // Import your modal styles
import axios from'axios'
const AddAdminModal = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password });
    setUsername('');
    setPassword('');
    setShowModal(false); // Hide the modal after submission
  };

  return (
    <div>
      <button onClick={() =>{setShowModal(true)} }>Add Admin</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Add Admin</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Username:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                 type="password"
                 placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Add Admin</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAdminModal;