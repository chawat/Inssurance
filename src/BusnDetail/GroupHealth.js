import React from 'react';
import insuranceImage from '../images/groupPersonal.jpg';
import './Bdetail.css';

const GroupHealth = () => {
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
          <h1 className='blueee'>GROUP HEALTHCARE INSURANCE</h1>
          {/* <h2>Enjoy Life Worry Less!</h2> */}
          <p >Protect your Employees and their Family Members by fulfilling their Medical Needs whether they benefit from the National Social Security Fund (NSSF) or not.</p>
          <p >AROPE Group Healthcare Insurance Plan will help you as a Business Owner in preserving a Healthy Team. Offering this Valuable Benefit is a powerful tool to motivate your Personnel and to better retain them.</p>
          <p className='namee'> Tailor-made Solutions that fit your Business Needs are available.</p>
          <p className='namee'>A New Medicare Plan is now available for Individuals wishing to remain insured at AROPE Insurance after leaving a Group. For more information, please contact our Call Center on 1219.</p>
          
          
          <button className="request-quote-button" onClick={() => window.location.href=`/BQDetail?Type=${encodeURIComponent('Group Health')}`}>
    <p className="forp">
        Request A Quote
    </p>
</button>
        </div>
      </div>
    </div>
  );
};

export default GroupHealth;
