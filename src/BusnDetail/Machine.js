import React from 'react';
import insuranceImage from '../images/machinery.jpg';
import './Bdetail.css';

const Machine = () => {
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
          <h1 className='blueee'>MACHINERY BREAKDOWN INSURANCE</h1>
          {/* <h2>Enjoy Life Worry Less!</h2> */}
          <p className='blueee'>Protect your Machinery Assets against Failures and Breakdowns that might affect negatively your Business Cycle.</p>
          <p className='blueee'>AROPE Machinery Breakdown Insurance Plan is the Right Solution that will provide you with a Secured Protection to encounter Eventual Losses that might arise following a Mechanical Failure or Breakdown in the Business Equipment.</p>
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

export default Machine;
