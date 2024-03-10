import React from 'react';
import insuranceImage from '../images/mf.jpg';
import './Bdetail.css';

const MotorFleet = () => {

  return (
    <div>
      <div className="ccoontainer">
      <div className="imgdescc">

          <img src={insuranceImage} alt="Healthcare Insurance" />
        </div>
        <div className="descdet">
          <h2>MOTOR FLEET INSURANCE</h2>
          <div>
          Motor fleet insurance is essential for protecting the motor vehicles used in your business activities against unforeseen accidents that may cause material damages or bodily injuries to drivers or third parties. AROPE's Motor Fleet Insurance Plan offers a valuable solution for your business, which can be tailor-made to fit your specific needs. With a wide choice of covers and special discounts available, you can ensure comprehensive protection for your fleet while optimizing cost-effectiveness.
          </div>
          <button className="buttoonbus" onClick={() => window.location.href=`/BQDetail?Type=${encodeURIComponent('MotorFleet')}`}>
    <p className="forp">
        Request A Quote
    </p>
</button>
        </div>
      </div>
    </div>
  );
};

export default MotorFleet;
