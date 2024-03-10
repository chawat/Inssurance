import React from 'react';
import insuranceImage from '../images/termlife.png';
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
    <div >
      <div className="ccoontainer">
        <div className="imgdescc">
          <img src={insuranceImage} alt="Healthcare Insurance" />
        </div>
        {/* <div className="descri">
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
           */}

<div className='descdet'>
           <h2>TERM LIFE INSURANCE</h2>
            <div>Protect your loved ones and enjoy peace of mind with AROPE's Term Life Insurance Plan. Designed to ensure a superior life for you and your family, even during challenging times, this solution offers worldwide protection with a wide range of covers. The basic cover includes protection against natural, accidental, or sickness-related death. Optional covers provide additional security, such as total permanent disability due to sickness or accident, passive war risk for death and disability, additional indemnity in case of accidental death, and terrorism cover. To be eligible, applicants must be between 18 and 70 years old and either Lebanese citizens or permanent residents in Lebanon.
            </div>
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
