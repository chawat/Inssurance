import React, { useState } from "react";
import "./login.css";

import axios from 'axios';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginform, setLoginform] = useState({
    Username: "",
    Password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginform({
      ...loginform,
      [name]: value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3003/login', loginform);
      console.log(res.data);
      const logindata = res.data;
      if (logindata) {
        setIsLoggedIn(true);
        window.location.href = "HomeA/";
        console.log("Login successful:", res.data);
      } else {
        console.log("Login failed:", res.data);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred while logging in");
    }
  };

  return (
    <div className='login-container'>
      <main className={`main-container ${isLoggedIn ? 'logged-in' : ''}`}>
        <div className="form">
          <h1>LOGIN HERE</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username" className="usernn">Username</label>
              <input
                type="text"
                placeholder="Username"
                name="Username"
                value={loginform.Username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="usernn">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="Password"
                value={loginform.Password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button className="btn-submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
