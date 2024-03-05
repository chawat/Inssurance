import React from 'react';
import insuranceImage from '../images/cargo.jpg';

import './Bdetail.css';

const Cargo = () => {
 
  
  return (
    <div className="container">
      <div className="contentt">
        <div className="image-container">
          <img src={insuranceImage} alt="Healthcare Insurance" />
        </div>
        <div className="descriptionn">
          <h1 className='blueee'>CARGO INSURANCE</h1>
          
          <p className='blueee'>Protect your Shipment of Goods against Perils that might arise during its Transportation by Air, by Sea or via Land Transit.</p>
          <p className='blueee'>AROPE Cargo Insurance Plan is the Solution that provides you with Peace of Mind for all your Import or Export Activity all over the Globe.</p>
          <p className='namee'>Tailor-made Solutions that fit your Business Needs are available.</p>
         
          <button className="request-quote-button" onClick={() => window.location.href=`/BQDetail?Type=${encodeURIComponent('Cargo')}`}>
    <p className="forp">
        Request A Quote
    </p>
</button>
        </div>
      </div>
    </div>
  );
};

export default Cargo;
