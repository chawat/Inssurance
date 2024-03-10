import React from 'react';
import insuranceImage from '../images/home.jpg';
import './Health.css';

const House = () => {
  // const basicCovers = [
  //   "Material Damage of the Insured Property (Construction & Content) resulting from Fire",
  //   "Burglary of Content following Forcible Entry",
  //   "General Third Party Liability covering Bodily Injuries & Material Damages occuring in the Insured Property"
  // ];

  // const optionalCovers = [
  //   "Neighbors Recourse",
  //   "Tenant Recourse",
  //   "Loss of Rent",
  //   "Debris Removal",
  //   "Architects & Surveyors Fees",
  //   "Earthquake, Storm, Tempest & Flood",
  //   "Water Damage (Bursting &/or overflowing of Water Tanks, Apparatus or Pipes)",
  //   "Plate Glass"
  // ];

  

  return (
    <div >
    <div className="ccoontainer">
      
        <div className="imgdescc">
          <img src={insuranceImage} alt="Healthcare Insurance" />
        </div>
        
 
        {/* <div className="descri">
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
           */}
            <div className='descdet'>
           <h2>HOUSEHOLD MULTI-RISKS INSURANCE</h2>
            <div>Explore the benefits of our Household Multi-Risks Insurance, designed to safeguard your property comprehensively. With our coverage, you can rest assured that your residence and its contents are protected against a wide range of potential hazards. While your existing security measures offer some level of protection, it's essential to mitigate risks such as fire, burglary, and general third-party liability. Our insurance offers both basic and optional covers to meet your specific needs. The basic covers include protection against material damage resulting from fire, burglary of contents following forcible entry, and general third-party liability covering bodily injuries and material damages occurring on the insured property. Additionally, our optional covers provide added security, including provisions for neighbors' and tenants' recourse, loss of rent, debris removal, architects' and surveyors' fees, as well as coverage for natural disasters like earthquakes, storms, tempests, floods, water damage, and plate glass protection.

            </div>
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
