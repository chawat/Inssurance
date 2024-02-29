import React from 'react';
import insuranceImage from '../images/groupPersonal.jpg';
import './Bdetail.css';;

const GroupPersonal = () => {
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
          <h1 className='blueee'>GROUP PERSONAL ACCIDENT INSURANCE</h1>
          {/* <h2>Enjoy Life Worry Less!</h2> */}
          <p className='blueee'>Protect your Employees from Unpredictable Accidents that might happen anytime and anywhere.</p>
          <p className='blueee'>AROPE Group PA Insurance Plan gives you the opportunity to secure your Personnel and to offer them a Valuable Benefit at reasonable cost.</p>
          <p className='blueee'> Securing the future of your Employees' Dependents will increase their loyalty and help you as Business Owner to attract and retain Good Members.</p>
          <p className='namee'>Tailor-made Solutions that fit your Business Needs are available.</p>
          
          
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

export default GroupPersonal;
