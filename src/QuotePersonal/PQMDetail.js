import axios from 'axios';
import React, { useState } from 'react';
import './MotorQ.css';

const PQMDetail = () => {
  const [formData2, setFormData2] = useState({
    FirstName: "",
    LastName: "",
    FatherName: "",
    Email: "", 
    LandLine: "",
    Mobile: "",
    DateOfBirth:"",
    Occupation:"",
  });
  const [formData1, setFormData1] = useState({
    PlanDetail:"",
   
  });

  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setFormData1({
      ...formData1,
      [name]: value
    });
  };
  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2({
      ...formData2,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const personalResponse = await axios.post('http://localhost:3003/personal', formData2);
      const personalData = personalResponse.data;
      console.log(personalData);
      
      // Check if the 'success' property exists and has a value of true
      if (personalData ) {
        alert('Personal details saved successfully!');
        
        // Proceed with house insurance details only if personal details are successfully saved
        const houseResponse = await axios.post('http://localhost:3003/motorinsurance', formData1);
        const houseData = houseResponse.data;
        console.log(houseData);
        
        // Check if house insurance details were successfully saved
        if (houseData) {
          alert('House insurance details saved successfully!');
          // window.location.href = '/';
        } else {
          console.error('Failed to save house insurance details:', houseData.message);
        }
      } else {
        console.error('Failed to save personal details:', personalData.message);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };
  return (
    <div >
      <h1>Get a Quote for Motor Insurance</h1>

      <form onSubmit={handleSubmit}>
        <div className="motor-insurance-quote-container">
        <div className="applicant-details">
          <h2>Applicant Details</h2>
          <div className="input-row">
            <div>
            <label htmlFor="firstName">First Name*:</label>
              <input type="text" id="firstName" name="FirstName" value={formData2.FirstName} onChange={handleInputChange2} required />
            </div>
            <div>
            <label htmlFor="fatherName">Father's Name*:</label>
              <input type="text" id="fatherName" name="FatherName" value={formData2.FatherName} onChange={handleInputChange2} required />
            </div>
            <div>
            <label htmlFor="lastName">Last Name*:</label>
              <input type="text" id="lastName" name="LastName" value={formData2.LastName} onChange={handleInputChange2} required />
            </div>
          </div>
          <div className="input-row">
            <div>
            <label htmlFor="dateOfBirth">Applicant Date Of Birth:</label>
              <input type="date" id="dateOfBirth" name="DateOfBirth" value={formData2.DateOfBirth} onChange={handleInputChange2} />
            </div>
            <div>
            <label htmlFor="landLine">Landline Number:</label>
              <input type="tel" id="landLine" name="LandLine" value={formData2.LandLine} onChange={handleInputChange2} />
            </div>
            <div>
            <label htmlFor="mobileNumber">Mobile Number*:</label>
              <input type="tel" id="Mobile" name="Mobile" value={formData2.Mobile} onChange={handleInputChange2} required />
            </div>
            
          </div>
          <div className="input-row">
            
           
          </div>
          <div className="input-row">
          <div>
          <label htmlFor="emailAddress">Email Address*:</label>
              <input type="email" id="emailAddress" name="Email" value={formData2.Email} onChange={handleInputChange2} required />
            </div>
            <div>
            <label htmlFor="occupation">Occupation*:</label>
              <input type="text" id="occupation" name="Occupation" value={formData2.Occupation} onChange={handleInputChange2} required />
            </div>
          </div>
        </div>
        </div>
        <div className="motor-insurance-quote-container">

        <div className="plan-details">
          <h2>Plan Details</h2>
          <div className="input-row">
            <div>
              <label htmlFor="PlanDetail">Insurance Type*:</label>
              <select id="insuranceType" name="PlanDetail" value={formData1.PlanDetail} onChange={handleInputChange1} required>
                <option value="">Select an option</option>
                <option value="Third Party Liability">Third Party Liability</option>
                <option value="Motor all Risks/Total Loss">Motor all Risks/Total Loss</option>
                <option value="Orange Card">Orange Card</option>
              </select>
            </div>
          </div>
        </div>

        <div className="recaptcha">
          {/* reCAPTCHA component */}
        </div>

        <button className='buttoonperQ' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PQMDetail;
