import React, { useEffect, useState } from "react";
import "./login.css";
import { Link } from 'react-router-dom';
// import Axios from 'axios';
import backgroundImagee from "../images/cargo.jpg";

const Login = () => {
  const containerStylelogin = {
    
    backgroundImage: `url(${backgroundImagee})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 'wrap content', 
    
  };
  
//   const [isPasswordHidden, setPasswordHidden] = useState(true);
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');

//   const submitR = () => {

//     Axios.post('http://localhost:3001/api/userExist', { name: name, password: password })
//       .then((response) => {
//         if(response.data.exists!=false){
//           console.log(response.data);
  
          
//         console.log(response.data);
//         window.location.href = `/menu?username=${encodeURIComponent(name)}`;
//         }
//         else{
//           console.log(response.data);
//           Axios.post('http://localhost:3001/api/usernameExist', { name: name}).then((response)=>{
//       console.log(response.data.exists);

      
//       if(response.data.exists==false){
//         console.log(response.data);
        
//         alert("username does not exist ");
//       }
//       else{
//         alert("wrong  password ");
//       }

//     });
//         }
//       });

//   };

//   const submitR1 = ()=>{
//     console.log("hi");
//     Axios.post('http://localhost:3001/api/usernameExist', { name: name}).then((response)=>{
//       console.log(response.data.exists);

      
//       if(response.data.exists==false){
//         if(name==''){
//           alert('you should include username');

//         }
//         else{

        
//         console.log(response.data);

//         Axios.post('http://localhost:3001/api/insert', { name: name, password: password })
//       .then(() => {
//         alert('Successful insert');
        
//       });
//       console.log(response.data);
//       window.location.href = `/menu?username=${encodeURIComponent(name)}`;
//     }
//       }
//       else{
//         alert("username already exist, use another one ");
//       }

//     });
//   };

  return (
    <div style={containerStylelogin} className="mainlogin">
      <div className="form" >
        <h1>LOGIN HERE</h1>
        <div>
          <label htmlFor="username" className="usernn">Username</label>
          <div>
            <input
              type="text"
              placeholder="Username"
              name="name"
            //   id="username"
              required
            //   onChange={(e) => { setName(e.target.value); }}
            />

          </div>
        </div>
      <div>
          <label className="usernn"> Password</label>
            <div className="password-container">
                <input
                    // type={isPasswordHidden ? "password" : "text"}
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    // onChange={(e)=>{setPassword(e.target.value);}}

                />
                
                </div >
        </div >

      
        {/* <Link to={{ pathname: '/menu', search: `?username=${name}` }} className="create-your-own-link"> */}
  {/* <input type="submit" name="" value="REGISTER" onClick={submitR1} /> */}
  {/* <input type="submit" name="" value="LOGIN" onClick={submitR} /> */}
  <input type="submit" name="" value="LOGIN"  />

{/* </Link> */} 
    </div>
    </div>
  );
}

export default Login;



