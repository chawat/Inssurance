import React, { useState } from "react";
import "./login.css";
import backgroundImagee from "../images/baclog.png";
import Axios from 'axios';

const Login = () => {
  const [loginform,setLoginform]=useState({
    Username:"",
    Password:""
  })
const handleinputchange=(e)=>{
  const {name,value}=e.target;
  setLoginform({
    ...loginform,
    [name]:value
  });
}
 
    
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:3003/login', { loginform });
      console.log(response.data);
     const logindata=response.data;
      if (logindata) {
        // Login successful
        alert('successfully');
        console.log("Login successful:", response.data);
       
      } else {
        // Login failed
        console.log("Login failed:", response.data);
      
    } }catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred while logging in");
    }
  };
  
  

  const containerStylelogin = {
    backgroundImage: `url(${backgroundImagee})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 'wrap content',
  };

  return (
    <div style={containerStylelogin} className="mainlogin">
      <div className="form">
        <h1>LOGIN HERE</h1>
        <div>
          <form onSubmit={handleLogin}>
          <label htmlFor="username" className="usernn">Username</label>
          <div>
            <input
              type="text"
              placeholder="Username"
              name="Username"
              value={loginform.Username}
              onChange={handleinputchange}required
            />
          </div>
       
        <div>
          <label className="usernn">Password</label>
          <div className="password-container">
            <input
              type="password"
              placeholder="Enter your password"
              name="Password"
              value={loginform.Password}
              onChange={handleinputchange}required
            />
          </div>
        </div>
       <button>Submit</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Login;
