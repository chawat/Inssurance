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
            <div>Ensure a safe drive on the roads with AROPE's Motor Insurance Plans, tailored to meet your needs and provide peace of mind. The Motor All Risks plan offers comprehensive coverage including own damage, fire, theft, third party liability for material damage and bodily injuries, replacement car, road assistance service, and more. AROPE also offers Motor Third Party Liability Insurance, covering material damages and bodily injuries caused to third parties by your vehicle. The basic covers include compulsory insurance for bodily injuries and material damages, coverage for driver and family passengers, and road assistance services. Optional covers such as excess bodily injury are available. Additionally, AROPE offers the Motor Orange Card, which extends coverage for third party liability arising from vehicle accidents outside Lebanon, covering countries such as Syria, Jordan, and Egypt. The Orange Card is available for private and commercial vehicles and can be purchased for various durations.
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
