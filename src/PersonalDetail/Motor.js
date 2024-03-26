import React from 'react';
import insuranceImage from '../images/motordetail.jpg';
import './Health.css'; // Corrected CSS file name

const Motor = () => {
  // const basicCovers = [
  //   "Own Damage",
  //   "Fire",
  //   "Theft or Hold Up",
  //   "Partial Theft",
  //   "Third Party Liability | Material Damage",
  //   "Third Party Liability | Bodily Injuries",
  //   "Excess Bodily Injury with the In-force Obligatory policy",
  //   "Replacement Car",
  //   "Dealer Reparation",
  //   "Road Assistance Service",
  //   "Driver & Family Passengers",
  //   "Taxi Service",
  //   "Storm, Tempest and Flood"
  // ];

  // const optionalCovers = [
  //   "Excess Bodily Injury with the In-force Obligatory policy",
  // ];

  // const eligibilityCriteria = [
  //   "Road Assistance Services for vehicles Net Weight less or equal than 2 Tons and are not a double alloy wheels vehicles."
  // ];

  return (
    <div >
      <div className="ccoontainer">
        <div className="imgdescc">
          <img src={insuranceImage} alt="Motor Insurance" />
        </div>
        {/* <div className="descri">
          <h1>MOTOR INSURANCE</h1>
          <h2>Drive Safely!</h2>
          <p>Mute the headaches caused by Car Accidents and choose one of Arope Motor Insurance Plans especially designed to provide you with a Safe Drive.</p>
          
          <h2 className='category'>Motor All Risks</h2>
          <ul className="list">AROPE offers different All Risks Plan to cater our Customers needs with a bundle of the following benefits:
            {basicCovers.map((cover, index) => (
              <li key={index}>{cover}</li>
            ))}
          </ul>
          
         
          
          <h2 className='category'>Motor Third Party Liability</h2>
          <ul className="list">AROPE Motor Third Party Liability Insurance covers you against Material Damages and Bodily Injuries your Vehicle might cause to Third Parties:
          <h2>Basic Covers:</h2>
          Third Party Liability | Bodily Injuries (Compulsory Insurance) Up to USD 400,000
Third Party Liability | Material Damages Up to USD 500,000
Driver and Family Passengers covering: 
Death USD 5,000 per Person and USD 25,000 per Year

Medical Expenses USD 1,000 per Person and USD 5,000 per Year
Road Assistance Services for vehicles Net Weight less or equal than 2 Tons and are not a double alloy wheels vehicles.
</ul><h2 >Optional Covers:</h2>
          <ul className="list">
            {optionalCovers.map((cover, index) => (
              <li key={index}>{cover}</li>
            ))}
          </ul>
          
          
          <h2 className='category'>Motor Orange Card</h2>
          <p>range Card Insurance covers Third Party Liability arising from Vehicle Accidents occuring outside the Lebanese Territory including: Syria, Jordan, Kuwait, Bahrain, UAE, Qatar, Egypt, Libya, Tunisia, Algeria and Oman.

AROPE Motor Orange Card is available for Private and Commercial Vehicles & can be purchased for 1 Month, 3 Months, 6 Months or 1 Year.

This Insurance Plan covers Third Party Liability | Material Damages and/or Bodily Injuries depending on the Destination Country Conditions.</p>
         
          */}
          {/* <ul className="list">
            <li>Orange Card Insurance covers Third Party Liability arising from Vehicle Accidents occuring outside the Lebanese Territory including: Syria, Jordan, Kuwait, Bahrain, UAE, Qatar, Egypt, Libya, Tunisia, Algeria and Oman.</li>
            <li>AROPE Motor Orange Card is available for Private and Commercial Vehicles & can be purchased for 1 Month, 3 Months, 6 Months or 1 Year.</li>
            <li>This Insurance Plan covers Third Party Liability | Material Damages and/or Bodily Injuries depending on the Destination Country Conditions.</li>
          </ul> */}

<div className='descdet'>
           <h2>MOTOR INSURANCE</h2>
<div className="motor-insurance-description">
  Drive confidently with NEXTGUARD's tailored Motor Insurance Plans, offering comprehensive coverage for your peace of mind. Our Motor All Risks plan covers own damage, fire, theft, and third-party liability, including material damage and bodily injuries. With essential features like compulsory insurance for bodily injuries and material damages, along with optional extras such as excess bodily injury coverage, we've got you covered. Extend your protection globally with the Motor Orange Card. Whether it's for private or commercial vehicles, NEXTGUARD offers flexible options to suit your needs. Drive with assurance and face the road ahead confidently with NEXTGUARD.
  </div>        
    <button className="buttoonper" onClick={() => window.location.href="/PQMDetail"}>
    <p className="forp">
        Request A Quote
    </p>
</button>
        </div>
      </div>
    </div>
  );
};

export default Motor;
