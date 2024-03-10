import React from 'react';
import insuranceImage from '../images/travel.png';
import './Health.css'; // Corrected CSS file name
const Travel = () => {
//     const basicCovers = [
// "Medical Expenses & Assistance abroad in case of Emergency",
// "Assistance to the Insured's Dependent Children and Return to their Country of Residence",
// "Emergency Dental Care",
// "Transportation or Repatriation of the Insured in case of Illness or Accident",
// "Repatriation of the Insured Mortal Remains in case of Death",
// "Transportation and Accommodation Expenses for one Family Member in case of Hospitalization of the Insured for more than 5 days",
// "Return of Family Member or any person traveling with the Insured to the Country of Residence following the Death of the Insured or his Hopitalization for more than 5 days",
// "Emergency Return of the Insured to his Country of Residence following Death of a Close Family member",
// "Legal Defense", 
// "Travel Information Services",
// "Dispatch of Urgent Medications",
// "Dispatch of Urgent Messages", 
// "Loss of Registered Luggage", 
// "Delay of Registered Luggage (Over 12 Hours)", 
// "Delay in Flight Departure (Over 8 Hours)",
// "Trip Cancellation",
// "Advance of Funds",
// "New Feature >> COVID-19 Cover (for outbound Travelers) up to 75 years old.",
//       ];
    
//       const optionalCovers = [
//         "Zone 1: Europe.",
//         "Zone 2: Worldwide excluding USA & Canada.",
//         "Zone 3: Worldwide.",
//       ];
    
//       const eligibilityCriteria = [
//         "RElite Plan: Medical Expenses up to USD500,000.",
//         "Platinum Plus Plan: Medical Expenses up to USD250,000.",
//         "Platinum Plan: Medical Expenses up to USD100,000.",
//         "Gold Plan: Medical Expenses up to USD50,000 (in conformity with Schengen Visa requirements. ",
//         " Silver Plan: Medical Expenses up to USD25,000.",
//         "Bronze Plan: Medical Expenses up to USD10,000.",
//       ];
    
      return (
        <div >
          <div className="ccoontainer">
            <div className="imgdescc">
              <img src={insuranceImage} alt="Motor Insurance" />
            </div>
            {/* <div className="descri">
              <h1>TRAVEL INSURANCE</h1>
              <h2>Travel the World Worry-Free!</h2>
              <p>AROPE Assistance Abroad (AAA), a Travel Insurance & Assistance Plan,

especially designed to provide you with the protection you need to travel in peace.

</p>
              
              <p className='category'>A. Basic Covers</p>
              <ul >
                {basicCovers.map((cover, index) => (
                  <li key={index}>{cover}</li>
                ))}
              </ul>
              <p className='category'>B. Optional Cover</p>
              <p>Accidents due to Winter and Summer Sports including, Skiing, Swimming,

Jet Skiing and Water Skiing abroad are subject to the Payment of an

additional premium fixed by the company</p>
<h2 className='category'>CONDITIONS:</h2>
<p className='category'>- Duration:</p>
<p>Policies can be purchased for a specific trip duration starting from 5 days

or up to 2 years maximum, with an unlimited number of trips provided the

stay per trip does not exceed 90 consecutive days.</p>
              
             
              
       <h3 >- Geographical Zone:</h3>
              <ul className="list">3 different zones are available depending on your trip destination:
                {optionalCovers.map((cover, index) => (
                  <li key={index}>{cover}</li>
                ))}
              </ul>
              
              <h2 className='category'>- Age Limit:</h2>
              <p>Up to 80 years old.<br/><br/>



PS:Group Rates are available. For more information please call 1219

(24/24 Assistance)</p>
<h2 className='category'>Travel Insurance and Assistance Plans:</h2>
          <ul className="haner">AROPE Insurance gives you the freedom to choose between 4 Plans

offering the same benefits with different Medical Expenses limits:
            {eligibilityCriteria.map((criteria, index) => (
              <li key={index}>{criteria}</li>
            ))}
          </ul>
               */}
             
              {/* <ul className="list">
                <li>Orange Card Insurance covers Third Party Liability arising from Vehicle Accidents occuring outside the Lebanese Territory including: Syria, Jordan, Kuwait, Bahrain, UAE, Qatar, Egypt, Libya, Tunisia, Algeria and Oman.</li>
                <li>AROPE Motor Orange Card is available for Private and Commercial Vehicles & can be purchased for 1 Month, 3 Months, 6 Months or 1 Year.</li>
                <li>This Insurance Plan covers Third Party Liability | Material Damages and/or Bodily Injuries depending on the Destination Country Conditions.</li>
              </ul> */}

              <div className='descdet'>
           <h2>TRAVEL INSURANCE</h2>
            <div>Embark on your travels worry-free with AROPE's Travel Insurance and Assistance Plan. Designed to provide comprehensive protection and assistance abroad, the plan ensures peace of mind during your journeys. The basic covers include medical expenses and assistance in emergencies, assistance for dependent children, emergency dental care, transportation or repatriation in case of illness or accident, repatriation of mortal remains, and more. Additional optional covers are available for accidents during winter and summer sports activities abroad. Policies can be purchased for specific trip durations ranging from 5 days to a maximum of 2 years, with unlimited trips as long as each trip does not exceed 90 consecutive days. The coverage extends to three geographical zones: Europe, worldwide excluding USA and Canada, and worldwide. The plan accommodates individuals up to 80 years old. Group rates are available, and there are four plan options with varying medical expenses limits to choose from: Elite, Platinum Plus, Platinum, Gold, Silver, and Bronze plans.
            </div>
              
          <button className="request-quote-button" onClick={() => window.location.href="/QuoteTravel"}>
    <p className="forp">
        Request A Quote
    </p>
</button>
            </div>
          </div>
        </div>
      );
}
 
export default Travel;