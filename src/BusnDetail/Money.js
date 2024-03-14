import React from 'react';
import insuranceImage from '../images/bm.png';
import './Bdetail.css';

const Money = () => {
  
  return (
    <div >
      <div className="ccoontainer">
        <div className="imgdesccbu">
          <img src={insuranceImage} alt="Healthcare Insurance" />
        </div>
        <div className="descdet">
          <h2>MONEY INSURANCE</h2>
          <div>
          Money insurance is crucial for safeguarding your money against potential risks such as burglary and employee fraudulent behavior. With AROPE Money Insurance Plan, you'll have a specialized solution designed to protect your most valuable assets, including cash, cheques, currency notes, and securities, whether they're stored in a safe or during transit. Taking action today to invest in money insurance can help preserve your business from any accidents that may negatively affect its success and growth. At AROPE Insurance, we're committed to offering you the best solutions tailored to meet your business needs.
          </div>
          <button className="buttoonbus" onClick={() => window.location.href=`/BQDetail?Type=${encodeURIComponent('Money')}`}>
    <p className="forp">
        Request A Quote
    </p>
</button>
        </div>
      </div>
    </div>
  );
};

export default Money;
