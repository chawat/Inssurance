
import './MotorQ.css';
import React, { useState } from 'react';
const PersonalAcdet = () => {
    const [basicCoverCheckboxes, setBasicCoverCheckboxes] = useState([
        { id: 1, label: 'Accidental Death', checked: true },
      ]);
      const [optionalCoverCheckboxes, setOptionalCoverCheckboxes] = useState([
        { id: 1, label: 'Accidental Disability', checked: false },
        { id: 2, label: 'Passive War Risk', checked: false },
        { id: 3, label: 'Weekly Indemnity', checked: false },
        { id: 4, label: 'Medical Expenses caused by a covered Accident', checked: false },
      ]);
      const [selectedOption, setSelectedOption] = useState(null);
      const [otherValue, setOtherValue] = useState("");
    
      const handleOptionChange = (option) => {
        setSelectedOption(option);
        // Clear other value when selecting a predefined option
        setOtherValue("");
      };
    
      const handleOtherValueChange = (event) => {
        setSelectedOption("other");
        setOtherValue(event.target.value);
      };
    
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
      <form>
        <div className="motor-insurance-quote-container">
        <h2>GET A QUOTE FOR PERSONAL ACCIDENT INSURANCE</h2>
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
            <div>
              <label htmlFor="Country">Country Of Residence*:</label>
              <input type="text" id="Country" name="applicantDetails" required />
            </div>
          </div>
        </div>
        </div>
        <div className="motor-insurance-quote-container">

        <div className="plan-details">
          <h2>Plan Details</h2>
          <div className="input-row">
            <div>
            <div className="motor-insurance-quote-container">
              <label htmlFor="Currency">Currency*:</label>
              <select id="Currency" name="planDetails" required>
                <option value="">Select an option</option>
                <option value="USD">USD</option>
                <option value="LBP">LBP</option>
              </select>
              </div>
            </div>
          </div>
          
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
      <div className="motor-insurance-quote-container">
        <h2 className='blackk'>Sum Insured*</h2>
      <div>
        <input
          type="radio"
          id="sum-insured-25000"
          value="$25,000 USD"
          checked={selectedOption === "$25,000 USD"}
          onChange={() => handleOptionChange("$25,000 USD")}
        />
        <label htmlFor="sum-insured-25000">$25,000 USD</label>
      </div>
      <div>
        <input
          type="radio"
          id="sum-insured-50000"
          value="$50,000 USD"
          checked={selectedOption === "$50,000 USD"}
          onChange={() => handleOptionChange("$50,000 USD")}
        />
        <label htmlFor="sum-insured-50000">$50,000 USD</label>
      </div>
      <div>
        <input
          type="radio"
          id="sum-insured-100000"
          value="$100,000 USD"
          checked={selectedOption === "$100,000 USD"}
          onChange={() => handleOptionChange("$100,000 USD")}
        />
        <label htmlFor="sum-insured-100000">$100,000 USD</label>
      </div>
      <div>
        <input
          type="radio"
          id="sum-insured-other"
          value="other"
          checked={selectedOption === "other"}
          onChange={() => handleOptionChange("other")}
        />
        <label htmlFor="sum-insured-other">Other</label>
        {selectedOption === "other" && (
          <input
            type="text"
            placeholder="Enter other value"
            value={otherValue}
            onChange={handleOtherValueChange}
          />
        )}
      </div>
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

export default PersonalAcdet;
