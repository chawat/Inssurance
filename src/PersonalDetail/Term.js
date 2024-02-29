import React from 'react';
import insuranceImage from '../images/termdetail.jpg';
import './Health.css';

const Term = () => {
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
      <div className="content">
        <div className="image-container">
          <img src={insuranceImage} alt="Healthcare Insurance" />
        </div>
        <div className="description">
          <h1>TERM LIFE INSURANCE</h1>
          <h2>Enjoy Life Worry Less!</h2>
          <p>AROPE Term Life Insurance Plan will secure a Superior Life for You and your Family even in the hardest times. This Solution guarantees a Worldwide Protection with a wide choice of Covers.


</p>
          
          <h2 className='category'>Basic Covers</h2>
          <ul className="haner">
            {basicCovers.map((cover, index) => (
              <li key={index}>{cover}</li>
            ))}
          </ul>
          
          <h2 className='category'>Optional Covers</h2>
          <ul className="haner">
            {optionalCovers.map((cover, index) => (
              <li key={index}>{cover}</li>
            ))}
          </ul>
          
          <h2 className='category'>Eligibility Criteria</h2>
          <ul className="haner">
            {eligibilityCriteria.map((criteria, index) => (
              <li key={index}>{criteria}</li>
            ))}
          </ul>
          
          <button className="request-quote-button" onClick={() => window.location.href="/QuoteTermL"}>
    <p className="forp">
        Request A Quote
    </p>
</button>
        </div>
      </div>
    </div>
  );
};

export default Term;
