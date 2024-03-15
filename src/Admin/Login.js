import React, { useState } from "react";
import Header from './Header';
import NavigationMenu from './NavigationMenu';
import "./login.css";
import backgroundImagee from "../images/baclog.png";
import axios from 'axios';

const Login = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const [loginform,setLoginform]=useState({
    Username:"",
    Password:""
  });
const handleinputchange=(e)=>{
  const {name,value}=e.target;
  setLoginform({
    ...loginform,
    [name]:value
  });
};
 
    
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3003/login', loginform );
      console.log(res.data);
     const logindata = res.data;
      if (logindata) {
        // Login successful

    window.location.href="HomeA/";
        console.log("Login successful:", res.data);
        // navigate("/");
      } else {
        // Login failed
        console.log("Login failed:", res.data);
      
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
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
          <NavigationMenu openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <main className='main-container'>
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
              onChange={handleinputchange}
              required
            />
          </div>
       
       
          <label className="usernn">Password</label>
          
            <input
              type="password"
              placeholder="Enter your password"
              name="Password"
              value={loginform.Password}
              onChange={handleinputchange}
              required
            />
        
        
       <button>Submit</button>
        </form>
      </div>
      </div>
      </main>
    </div>
  );
}

export default Login;
