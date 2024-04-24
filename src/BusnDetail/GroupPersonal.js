import React from 'react';
import insuranceImage from '../images/gr.png';
import './Bdetail.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
const GroupPersonal = () => {
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/businessdesc');
        const data = response.data;
  
        // Filter data to get the description where name is "motor"
        const motorDesc = data.find(item => item.name === "grouppersonalacc");
        
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
      <div className="imgdesccbu">
          <img src={insuranceImage} alt="Healthcare Insurance" />
        </div>
        <div className="descdet">
          <h2>GROUP PERSONAL ACCIDENT INSURANCE</h2>
          <div>
            {desc}
            </div> 
          <button className="buttoonbus" onClick={() => window.location.href=`/BQDetail?Type=${encodeURIComponent('Group Personal')}`}>
    <p className="forp">
        Request A Quote
    </p>
</button>
        </div>
      </div>
    </div>
  );
};

export default GroupPersonal;
