
import './MotorQ.css';
import React, { useState } from 'react';
const Traveldet = () => {
  

      const [isChecked, setIsChecked] = useState(false);

      // Function to handle checkbox change
      const handleCheckboxChange = () => {
        // Toggle the isChecked state when checkbox is clicked
        setIsChecked(!isChecked);
      };
    
      
  return (
    <div >
      <form>
        <div className="motor-insurance-quote-container">
        <h2>GET A QUOTE FOR TRAVEL INSURANCE</h2>
        <div className="applicant-details">
          <h2>Applicant Details</h2>
          <div className="input-row">
            <div>
              <label htmlFor="firstName">First Name*:</label>
              <input type="text" id="firstName" name="applicantDetails" required />
            </div>
            <div>
              <label htmlFor="fatherName">Father's Name*:</label>
              <input type="text" id="fatherName" name="applicantDetails" required />
            </div>
            <div>
              <label htmlFor="lastName">Last Name*:</label>
              <input type="text" id="lastName" name="applicantDetails" required />
            </div>
          </div>
          <div className="input-row">
            <div>
              <label htmlFor="dateOfBirth">Applicant Date Of Birth:</label>
              <input type="date" id="dateOfBirth" />
            </div>
            <div>
              <label htmlFor="landlineNumber">Landline Number:</label>
              <input type="tel" id="landlineNumber" name="applicantDetails" />
            </div>
            <div>
              <label htmlFor="mobileNumber">Mobile Number*:</label>
              <input type="tel" id="mobileNumber" name="applicantDetails" required />
            </div>
            
          </div>
          <div className="input-row">
            
           
          </div>
          <div className="input-row">
          <div>
              <label htmlFor="emailAddress">Email Address*:</label>
              <input type="email" id="emailAddress" name="applicantDetails" required />
            </div>
            <div>
              <label htmlFor="occupation">Occupation*:</label>
              <input type="text" id="occupation" name="applicantDetails" required />
            </div>
          </div>
        </div>
        </div>
        <div className="motor-insurance-quote-container">

        <div className="plan-details">
          <h2>Plan Details</h2>
          <div className="input-row">
          <div>
              <label htmlFor="Destination">Destination*:</label>
              <input type="text" id="destination" name="planDetails" required />
            </div>
            <div>
              <label htmlFor="CountryofDeparture">Country of Departure*:</label>
              <input type="text" id="CountryofDeparture" name="planDetails" required />
            </div>
            </div>
            <div className="input-row">
            <div>
              <label htmlFor="CountryofPerson">Country Person in case of Emergency*:</label>
              <input type="text" id="CountryofPerson" name="planDetails" required />
            </div>
            <div>
            <label htmlFor="NomberofPerson">Contact Person Mobile Number*:</label>
              <input type="text" id="NomberofPerson" name="planDetails" required />
              </div>
              </div>
           
            
            <div className="plan-details">
            <div className="input-row">
      {/* Checkbox input element */}
      <div>
        <p>optional cover:</p>
      <input
        type="checkbox"
        checked={isChecked} // Set the checked state based on the isChecked state
        onChange={handleCheckboxChange} // Call handleCheckboxChange function when checkbox is clicked
      />
      {/* Label for the checkbox */}
      <label>Summer / Winter Sports</label>
    </div>
   
              
            <div >
              <label htmlFor="plantype">Plan Type*:</label>
              <select id="Plantype" name="planDetails" required>
                <option value="">Select an option</option>
                <option value="Elite">Elite USD $500,000</option>
                <option value="PlatinumPlus">Platinum Plus USD $250,000P</option>
                <option value="Platinum">Platinum USD $100,000</option>
                <option value="Gold">Gold USD $50,000</option>
                <option value="Silver">Silver USD $25,000</option>
                <option value="Bronze">Bronze USD $10,000</option>
              </select>
              <label htmlFor="Zone">Geographical Zone*:</label>
              <select id="Zone" name="Zone" required>
                <option value="">Select an option</option>
                <option value="Europe">Europe</option>
                <option value="Worldwide">Worldwide</option>
                <option value="WorldwideExcUSAandCanada">Worldwide excluding USA and Canada</option>
              </select>
              <label htmlFor="TripDuration">Trip Duration*:</label>
              <select id="TripDuration" name="TripDuration" required>
                <option value="">Select an option</option>
                <option value="Elite">Up to 5 days</option>
                <option value="PlatinumPlus">Up to 10 days</option>
                <option value="Platinum">Up to 31 days</option>
                <option value="Gold">Up to 90 days</option>
                <option value="Silver">Up to 6 months</option>
                <option value="Bronze">Up to 2 years</option>
              </select>
              
              
          </div>
          
          </div>
          </div>
          </div>
          
          
         
        

        <button type="submit">Submit</button>
       </div>
       
      </form>
    </div>
  );
};

export default Traveldet;
