import React from 'react';
import insuranceImage from '../images/gr.png';
import './Bdetail.css';

const GroupHealth = () => {
   return (
    <div>
      <div className="ccoontainer">
        <div className="imgdesccbu">
          <img src={insuranceImage} alt="Healthcare Insurance" />
        </div>
        <div className="descdet">
        <h2>GROUP HEALTHCARE INSURANCE</h2>
        <div>
        Group healthcare insurance is designed to protect your employees and their family members by fulfilling their medical needs, whether or not they benefit from the National Social Security Fund (NSSF). With AROPE Group Healthcare Insurance Plan, you, as a business owner, can preserve a healthy team. Offering this valuable benefit serves as a powerful tool to motivate your personnel and enhance their retention. We provide tailor-made solutions that align with your business needs. Additionally, we offer a new Medicare plan for individuals who wish to remain insured with AROPE Insurance after leaving a group. For more information, please contact our Call Center at 1219.
        </div>
          <button className="buttoonbus" onClick={() => window.location.href=`/BQDetail?Type=${encodeURIComponent('Group Health')}`}>
    <p className="forp">
        Request A Quote
    </p>
</button>
        </div>
      </div>
    </div>
  );
};

export default GroupHealth;
