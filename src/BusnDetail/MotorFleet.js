import React from 'react';
import insuranceImage from '../images/motorGr.jpg';
import './Bdetail.css';

const MotorFleet = () => {
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
          <h1 className='blueee'>MOTOR FLEET INSURANCE</h1>
          {/* <h2>Enjoy Life Worry Less!</h2> */}
          <p className='blueee'>Protect Motor Vehicles used for your Business Activity against the Unforeseen Accidents that might occur and cause Material Damages or Bodily Injuries to the Drivers or Third Parties.</p>
          <p className='blueee'>The Motor Fleet Insurance Plan from AROPE is a Valuable Solution for your Business that can be tailor-made to fit your Needs offering a wide choice of Covers with Special Discounts.</p>
          
          
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

export default MotorFleet;
