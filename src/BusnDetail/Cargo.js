import React from 'react';
import insuranceImage from '../images/cargo.jpg';
import './Bdetail.css';

const Cargo = () => {
  const basicCovers = [
    "Death: Natural, Accidental or due to Sickness"
  ];

  const optionalCovers = [
    "Total Permanent Disability due to Sickness",
    "Total or Partial Permanent Disability due to an Accident ",
    "Passive War Risk for Death and Disability Covers",
    "Additional Indemnity in case of Accidental Death",
    "Terrorism Cover"
  ];

  const eligibilityCriteria = [
    "Applicant Entry Age should be between 18 & 70 Years",
    "Applicant should be a Lebanese Citizen or a Permanent Resident in Lebanon",
  ];



  return (
    <div className="container">
      <div className="contentt">
        <div className="image-container">
          <img src={insuranceImage} alt="Healthcare Insurance" />
        </div>
        <div className="descriptionn">
          <h1 className='blueee'>CARGO INSURANCE</h1>
          {/* <h2>Enjoy Life Worry Less!</h2> */}
          <p className='blueee'>Protect your Shipment of Goods against Perils that might arise during its Transportation by Air, by Sea or via Land Transit.</p>
          <p className='blueee'>AROPE Cargo Insurance Plan is the Solution that provides you with Peace of Mind for all your Import or Export Activity all over the Globe.</p>
          <p className='namee'>Tailor-made Solutions that fit your Business Needs are available.</p>
          
          
          {/* <a href="/BQDetail" className="btn">
    <p className="forp">
        Request A Quote
    </p>
</a> */}
<button className="request-quote-button" onClick={() => window.location.href="/BQDetail"}>
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
