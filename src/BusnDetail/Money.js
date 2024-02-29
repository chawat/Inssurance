import React from 'react';
import insuranceImage from '../images/money.jpg';
import './Bdetail.css';

const Money = () => {
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
          <h1 className='blueee'>MONEY INSURANCE</h1>
          {/* <h2>Enjoy Life Worry Less!</h2> */}
          <p className='blueee'>Protect your Money against Potential Risks arising from Burglary, Employee Fraudulent Behavior...</p>
          <p className='blueee'>AROPE Money Insurance Plan is the Solution especially designed to protect your most Valuable Assets being Cash, Cheques, Currency Notes, Securities... whether placed in a Safe or during Transit.</p>
          <p className='blueee'>Take Action today and preserve your Business from any Accident that might negatively affect its Success and Growth.</p>
          <p className='namee'>We, at AROPE Insurance, are eager to offer you the Best Solutions that fit your Business Needs.</p>
          
          
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

export default Money;
