
import './MotorQ.css';
import React, { useState } from 'react';
const Housedet = () => {
    const [basicCoverCheckboxes, setBasicCoverCheckboxes] = useState([
        { id: 1, label: 'Material Damage of Property resulting from Fire', checked: true },
        { id: 2, label: 'Burglary following Forcible Entry', checked: true },
        { id: 3, label: 'General Third Party Liability covering Bodily Injuries & Material Damages', checked: true },
      ]);
      const [optionalCoverCheckboxes, setOptionalCoverCheckboxes] = useState([
        { id: 1, label: 'Neighbors Recourse', checked: false },
        { id: 2, label: 'Tenant Recourse', checked: false },
        { id: 3, label: 'Loss of Rent', checked: false },
        { id: 4, label: 'Debris Removal', checked: false },
        { id: 5, label: 'Architects & Surveyors Fees', checked: false },
        { id: 6, label: 'Earthquake, Storm, Tempest & Flood', checked: false },
        { id: 7, label: 'Water Damage (Bursting &/or overflowing of Water Tanks, Apparatus or Pipes)', checked: false },
        { id: 8, label: 'Plate Glass', checked: false },
      ]);
    
      // Handler to toggle checkbox state
      const handleBasicCoverCheckboxChange = (id) => {
        setBasicCoverCheckboxes(prevCheckboxes =>
          prevCheckboxes.map(checkbox =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
          )
        );
      };
    
      // Handler to toggle checkbox state for optional cover
      const handleOptionalCoverCheckboxChange = (id) => {
        setOptionalCoverCheckboxes(prevCheckboxes =>
          prevCheckboxes.map(checkbox =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
          )
        );
      };
      
  return (
    <div >
<h2>GET A QUOTE FOR HOUSEHOLD MULTI-RISKS</h2>
      <form>
        <div className="motor-insurance-quote-container">
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
          <h2>PROPERTY DETAILS</h2>
          <div className="input-row">
            <div>
            <div className="motor-insurance-quote-container">
              <label htmlFor="Currency">Applicant Status*:</label>
              <select id="Currency" name="planDetails" required>
                <option value="">Select an option</option>
                <option value="tenant">Tenant</option>
                <option value="L/O">Landlord/Owner</option>
              </select>
              </div>
              <div>
              <label htmlFor="Address">Residence Address*:</label>
              <input type="text" id="Address" name="applicantDetails" required />
            </div>
            </div>
            
          </div>
          <div className="input-row">
          <div>
              <label htmlFor="Value">Constraction Value*:</label>
              <input type="text" id="Value" name="applicantDetails" required />
            </div>
            <div>
              <label htmlFor="ContentsV">Contents Value*:</label>
              <input type="text" id="ContentsV" name="applicantDetails" required />
            </div>
            </div>
            </div>
            <div className="plan-details">
                <h2>PLAN DETAILS</h2>
          
          <div className="input-row">
          <div>
          <div className="motor-insurance-quote-container">
      <h2 className='blackk'>Basic Cover</h2>
      {basicCoverCheckboxes.map(checkbox => (
  <div key={checkbox.id}>
    <input
      type="checkbox"
      id={`basic-cover-checkbox-${checkbox.id}`}
      checked={checkbox.checked}
      onChange={() => handleBasicCoverCheckboxChange(checkbox.id)}
    />
    <label htmlFor={`basic-cover-checkbox-${checkbox.id}`}>{checkbox.label}</label>
  </div>
))}

<h2 className='blackk'>Optional Covers</h2>
{optionalCoverCheckboxes.map(checkbox => (
  <div key={checkbox.id}>
    <input
      type="checkbox"
      id={`optional-cover-checkbox-${checkbox.id}`}
      checked={checkbox.checked}
      onChange={() => handleOptionalCoverCheckboxChange(checkbox.id)}
    />
    <label htmlFor={`optional-cover-checkbox-${checkbox.id}`}>{checkbox.label}</label>
  </div>
      ))}
      </div>
      
    </div>
    </div>
        </div>

        <div className="recaptcha">
          {/* reCAPTCHA component */}
        </div>

        <button type="submit">Submit</button>
        </div>
       
      </form>
    </div>
  );
};

export default Housedet;
