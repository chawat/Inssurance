import React from 'react';
import insuranceImage from '../images/home.jpg';
import './Health.css';

const House = () => {
  const basicCovers = [
    "Material Damage of the Insured Property (Construction & Content) resulting from Fire",
    "Burglary of Content following Forcible Entry",
    "General Third Party Liability covering Bodily Injuries & Material Damages occuring in the Insured Property"
  ];

  const optionalCovers = [
    "Neighbors Recourse",
    "Tenant Recourse",
    "Loss of Rent",
    "Debris Removal",
    "Architects & Surveyors Fees",
    "Earthquake, Storm, Tempest & Flood",
    "Water Damage (Bursting &/or overflowing of Water Tanks, Apparatus or Pipes)",
    "Plate Glass"
  ];

  

  return (
    <div className="container">
      <div className="content">
        <div className="image-container">
          <img src={insuranceImage} alt="Healthcare Insurance" />
        </div>
        <div className="description">
          <h1>HOUSEHOLD MULTI-RISKS INSURANCE</h1>
          <h2>Insure your Property ..... Properly!</h2>
          <p>Protect your Residence and its Content against many Hazards.

For you, the Security and Safety Measures installed are enough but you still need to protect yourself against Potential Risks including Fire, Burglary, General Third Party Liability & other Perils.</p>
          
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
          
          
          <button className="request-quote-button" onClick={() => window.location.href="/QuoteHouse"}>
    <p className="forp">
        Request A Quote
    </p>
</button>
        </div>
      </div>
    </div>
  );
};

export default House;
