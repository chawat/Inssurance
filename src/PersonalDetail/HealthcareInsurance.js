import React from 'react';
import insuranceImage from '../images/health.png';
import './Health.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
const HealthcareInsurance = () => {
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/personaldesc');
        const data = response.data;
  
        // Filter data to get the description where name is "motor"
        const motorDesc = data.find(item => item.name === "healthcare");
        
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
          <img src={insuranceImage} alt="Healthcare Insurance" />
        </div>
        <div className='descdet'>
        <h2>HEALTHCARE INSURANCE</h2>
            <div>
              {desc}
</div>
       
          
          <button className="buttoonper" onClick={() => window.location.href="/QuoteHealth"}>
    <p className="forp">
        Request A Quote
    </p>
</button>
        </div>
      </div>
    </div>
  );
};

export default HealthcareInsurance;
