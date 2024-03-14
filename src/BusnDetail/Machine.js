import React from 'react';
import insuranceImage from '../images/mac.png';
import './Bdetail.css';

const Machine = () => {
  
  return (
    <div >
      <div className="ccoontainer">
      <div className="imgdesccbu">
          <img src={insuranceImage} alt="Healthcare Insurance" />
        </div>
        <div className="descdet">
          <h2>MACHINERY BREAKDOWN INSURANCE</h2>
         <div>
         Machinery breakdown insurance is essential for safeguarding your machinery assets against failures and breakdowns that could disrupt your business cycle. With AROPE Machinery Breakdown Insurance Plan, you'll have the right solution to protect your business from potential losses resulting from mechanical failures or breakdowns in your equipment. Our insurance plan offers secured protection to help you mitigate any adverse impacts on your business operations. We provide tailor-made solutions that are customized to meet the specific needs of your business, ensuring comprehensive coverage and peace of mind.
         </div>
          <button className="buttoonbus" onClick={() => window.location.href=`/BQDetail?Type=${encodeURIComponent('Machine')}`}>
    <p className="forp">
        Request A Quote
    </p>
</button>
        </div>
      </div>
    </div>
  );
};

export default Machine;
