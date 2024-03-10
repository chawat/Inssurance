import React from 'react';
import insuranceImage from '../images/co.png';

import './Bdetail.css';

const Cargo = () => {
 
  
  return (
    <div >
      <div className="ccoontainer">
        <div className="imgdescc">
          <img src={insuranceImage} alt="Healthcare Insurance" />
        </div>
        <div className='descdet'>
          <h2>CARGO INSURANCE</h2>
          <div>
          Cargo insurance offers protection for your shipment of goods against perils that might arise during transportation by air, sea, or land transit. With AROPE Cargo Insurance Plan, you can have peace of mind for all your import or export activities worldwide. Our tailor-made solutions are designed to fit your specific business needs, ensuring comprehensive coverage and security for your valuable cargo throughout its journey.  
          </div>
         
          <button className="buttoonbus" onClick={() => window.location.href=`/BQDetail?Type=${encodeURIComponent('Cargo')}`}>
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
