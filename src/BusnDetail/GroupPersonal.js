import React from 'react';
import insuranceImage from '../images/gr.png';
import './Bdetail.css';;

const GroupPersonal = () => {

  return (
    <div >
      <div className="ccoontainer">
      <div className="imgdescc">
          <img src={insuranceImage} alt="Healthcare Insurance" />
        </div>
        <div className="descdet">
          <h2>GROUP PERSONAL ACCIDENT INSURANCE</h2>
          <div>
          Group personal accident insurance is essential for protecting your employees from unpredictable accidents that can occur anytime and anywhere. With AROPE Group PA Insurance Plan, you have the opportunity to secure your personnel and offer them a valuable benefit at a reasonable cost. By securing the future of your employees' dependents, you can increase their loyalty and attract and retain good members as a business owner. We provide tailor-made solutions that align with your business needs to ensure comprehensive coverage.
            </div> 
          <button className="request-quote-button" onClick={() => window.location.href=`/BQDetail?Type=${encodeURIComponent('Group Personal')}`}>
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
