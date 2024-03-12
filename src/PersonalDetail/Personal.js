import React from 'react';
import insuranceImage from '../images/PersonalAcc.png';
import './Health.css';

const Personal = () => {
  // const basicCovers = [
  //   "Accidental Death"
  // ];

  // const optionalCovers = [
  //   "Total or Partial Permanent Disability due to an Accident",
  //   "Passive War Risk for Death & Disability Covers",
  //   "Weekly Indemnity in case of Temporary Disability following Accident",
  //   "Medical Expenses caused directly by a covered Accident"
  // ];

  // const eligibilityCriteria = [
  //   "Applicant Entry Age should be between 18 & 64 Years",
  //   "BApplicant should be a Lebanese Citizen or a Permanent Resident in Lebanon",
  // ];



  return (
    <div >
      <div className="ccoontainer">
        <div className="imgdescc">
          <img src={insuranceImage} alt="Healthcare Insurance" />
        </div>
        {/* <div className="descri">
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
          </ul> */}
          <div className='descdet'>
           <h2>PERSONAL INSURANCE</h2>
            <div>Secure your happiness and peace of mind with NEXTGUARD's Personal Accident Insurance Plan. Offering guaranteed worldwide coverage, our plan protects you and your family from unexpected events that may arise. The basic cover includes protection against accidental death, while optional covers provide additional layers of security. These options include coverage for total or partial permanent disability resulting from an accident, passive war risk for death and disability, weekly indemnity for temporary disability following an accident, and medical expenses directly caused by a covered accident. To be eligible, applicants must be between 18 and 64 years old, and either Lebanese citizens or permanent residents in Lebanon.
            </div>


          
          <button className="buttoonper" onClick={() => window.location.href="/QuotePerAc"}>
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
