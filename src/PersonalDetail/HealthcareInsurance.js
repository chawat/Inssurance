import React from 'react';
import insuranceImage from '../images/health.png';
import './Health.css';

const HealthcareInsurance = () => {
  // const basicCovers = [
  //   "In-Hospital Plan covering Agreed Full Network of Hospitals or a Restricted Network of Hospitals operating on the Lebanese Territory",
  //   "Different Hospitalization Classes are available to cater for your Needs"
  // ];

  // const optionalCovers = [
  //   "Diagnostic Tests (Laboratory, Radiology...)",
  //   "Doctors' Consultations",
  //   "Prescribed Medications"
  // ];

  // const additionalFreeCovers = [
  //   "Personal Accident for the Policyholder/Insured aged less than 65 Years",
  //   "International Assistance covering Repatriation of the Insured Person(s) to their Country of Residence following Sickness or Death",
  //   "Burial Expenses up to USD 3,000",
  //   "Work-Related Accidents covering the Policyholder/ Insured performing an Administrative Profession"
  // ];

  // const eligibilityCriteria = [
  //   "Insured Person(s) Entry Age should be between 14 Days and 65 Years",
  //   "Insured Person(s) should be Lebanese Citizen(s) or Permanent Resident in Lebanon",
  //   "Families can benefit from Special Discounts & Free Insurance for Children depending on family size"
  // ];

  return (
    <div >
      <div className="ccoontainer">
        <div className="imgdescc">
          <img src={insuranceImage} alt="Healthcare Insurance" />
        </div>
        <div className='descdet'>
        <h2>HEALTHCARE INSURANCE</h2>
            <div>
Maintain your quality of life with healthcare insurance from NEXTGUARD Insurance, regardless of your affiliation with the National Social Security Fund (NSSF). Our plans offer tailored coverage, including in-hospital options with various networks and classes. Optional covers like diagnostic tests and doctors' consultations enhance your protection. Additional benefits include personal accident coverage and international assistance. Eligibility spans from 14 days to 65 years old, with special family discounts available.</div>
        {/* <div className="descri">
          <h1>HEALTHCARE INSURANCE</h1>
          <p>Safeguard your Quality of Life by considering the Health Protection provided by AROPE Insurance, whether you benefit from the National Social Security Fund (NSSF) or not.</p>
          
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
          
          <h2 className='category'>Additional Free Covers</h2>
          <ul className="haner">
            {additionalFreeCovers.map((cover, index) => (
              <li key={index}>{cover}</li>
            ))}
          </ul>
          
          <h2 className='category'>Eligibility Criteria</h2>
          <ul className="haner">
            {eligibilityCriteria.map((criteria, index) => (
              <li key={index}>{criteria}</li>
            ))}
          </ul> */}
          
          <button className="buttoonper" onClick={() => window.location.href="/QuoteHealth"}>
    <p className="forp">
        Request A Quote
    </p>
</button>
        </div>
      </div>
    </div>
  );
};

export default HealthcareInsurance;
