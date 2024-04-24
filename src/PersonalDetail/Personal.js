import React from 'react';
import insuranceImage from '../images/PersonalAcc.png';
import './Health.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
const Personal = () => {
 
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/personaldesc');
        const data = response.data;
  
        // Filter data to get the description where name is "motor"
        const motorDesc = data.find(item => item.name === "personalacc");
        
        // If motorDesc is found, set the description in state
        if (motorDesc) {
          setDesc(motorDesc.description);
        } else {
          console.log('No description found for name "motor"');
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetch();
  }, []);


  return (
    <div >
      <div className="ccoontainer">
        <div className="imgdescc">
          <img src={insuranceImage} alt="-Personal accident Insurance" />
        </div>
        
          <div className='descdet'>
           <h2>PERSONAL INSURANCE</h2>
            <div className="motor-insurance-description">
              {desc}
            </div>


          
          <button className="buttoonper" onClick={() => window.location.href="/QuotePerAc"}>
    <p className="forp">
        Request A Quote
    </p>
</button>
        </div>
      </div>
    </div>
  );
};

export default Personal;
