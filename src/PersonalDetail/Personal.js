import React from 'react';
import insuranceImage from '../images/personaldetail.jpg';
import './Health.css';

const Personal = () => {
  const basicCovers = [
    "Accidental Death"
  ];

  const optionalCovers = [
    "Total or Partial Permanent Disability due to an Accident",
    "Passive War Risk for Death & Disability Covers",
    "Weekly Indemnity in case of Temporary Disability following Accident",
    "Medical Expenses caused directly by a covered Accident"
  ];

  const eligibilityCriteria = [
    "Applicant Entry Age should be between 18 & 64 Years",
    "BApplicant should be a Lebanese Citizen or a Permanent Resident in Lebanon",
  ];



  return (
    <div className="container">
      <div className="content">
        <div className="image-container">
          <img src={insuranceImage} alt="Healthcare Insurance" />
        </div>
        <div className="description">
          <h1>PERSONAL INSURANCE</h1>
          <h2>Live Happily Ever After!</h2>
          <p>AROPE Personal Accident Insurance Plan provides a Guaranteed Worldwide Cover to protect you

and your Family from any unforeseen event that might occur.

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
          
          <button className="request-quote-button" onClick={() => window.location.href="/QuotePerAc"}>
    <p className="forp">
        Request A Quote
    </p>
</button>
        </div>
      </div>
    </div>
  );
};

export default Personal;
