import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavigationMenu from './NavigationMenu';
import Header from './Header';
import './components/MessagesusStyles.css'; // Import the CSS file
import './components/Houseadmin.css';
import AddAdminModal from "./addadmin";

const Viewadmin = () => {
  const [users, setUsers] = useState([]);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchUsers();
  }, []);

  const handledeleteClick = async (id) => {
    try {
    console.log(id);
      await axios.delete(`http://localhost:3003/api/users/${id}`);
      setUsers(users.filter(user => user._id !== id));
      window.alert('User deletedd successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const toggleSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  const handleAddAdmin = (adminData) => {
    console.log('Adding admin:', adminData);
  };
  return (
    <div className='grid-containerhouse'>
      <Header toggleSidebar={toggleSidebar} />
      <NavigationMenu openSidebarToggle={openSidebarToggle} toggleSidebar={toggleSidebar} />
      <main className='main-containerhouse'>
        <div className="contenthouse">
          {users.length ? (
            <table className="house-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.Username}</td>
                
                    <td>
                      <button onClick={() => handledeleteClick(user._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="empty-message">No Users available.</p>
          )}
           <div>
      
      <AddAdminModal onSubmit={handleAddAdmin} />
    </div>
        </div>
      </main>
    </div>
  );
}

export default Viewadmin;
