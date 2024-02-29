
import './MotorQ.css';
import React, { useState } from 'react';
import axios from 'axios';
const Termlifedet = () => {
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
    Currency: "",
    SumInsured: "",
    PolicyDuration: "",
    BasicCover: "Death all causes (Natural, Accidental or due to Sickness)",
    OptionalCover: [],
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
  const handleOptionChange1 = (value) => {
    // Convert the value to a number before updating the state if it's not "other"
    const numericValue = value === "other" ? formData1.SumInsured : parseInt(value, 10);
    setFormData1({
      ...formData1,
      SumInsured: numericValue,
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
        const houseResponse = await axios.post('http://localhost:3003/termlifeinsurance', formData1);
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
  

    const [BasicCover, setBasicCover] = useState([
        { id: 1, label: 'Death all causes (Natural, Accidental or due to Sickness)', checked: true },
      ]);
      const [OptionalCover, setOptionalCover] = useState([
        { id: 1, label: 'Disability due to Sickness', checked: false },
        { id: 2, label: 'Accidental Disability', checked: false },
        { id: 3, label: 'Passive War Risk', checked: false },
        { id: 4, label: 'Additional Accidental Death Benefit', checked: false },
        { id: 5, label: 'Terrorism', checked: false },
      ]);
      const handleBasicCoverChange = (id, type) => {
        // Toggle the checked property of the clicked checkbox
        const updatedCheckboxes = BasicCover.map(checkbox =>
          checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
        );
      
        // Update the BasicCover state with the updated checkboxes
        setBasicCover(updatedCheckboxes);
      
        // Get the labels of all the currently checked checkboxes
        const selectedLabels = updatedCheckboxes
          .filter(checkbox => checkbox.checked)
          .map(checkbox => checkbox.label);
      
        // Update the formData1 state with all the checked labels
        setFormData1({
          ...formData1,
          [type]: selectedLabels
        });
      };
      
      
      const handleOptionalCoverChange = (id, type) => {
        const updatedCheckboxes = OptionalCover.map(checkbox =>
          checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
        );
        setOptionalCover(updatedCheckboxes);
        const selectedLabels = updatedCheckboxes
          .filter(checkbox => checkbox.checked)
          .map(checkbox => checkbox.label);
        setFormData1({
          ...formData1,
          [type]: selectedLabels
        });
      };
      
    
      
  return (
    <div >
<h1>GET A QUOTE FOR TERM LIFE INSURANCE</h1>
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
              <label htmlFor="Currency">Currency*:</label>
              <select id="Currency" name="Currency" value={formData1.Currency} onChange={handleInputChange1} required>
                <option value="">Select an option</option>
                <option value="USD">USD</option>
                <option value="LBP">LBP</option>
              </select>
            </div>
            <div>
              <label htmlFor="PolicyDuration">Policy Duration*:</label>
              <select id="PolicyDuratione" name="PolicyDuration" value={formData1.PolicyDuration} onChange={handleInputChange1} required>
                <option value="">Select an option</option>
                <option value="5y">5 Years</option>
                <option value="10y">10 Years</option>
                <option value="15y">15 Years</option>
                <option value="20y">20 Years</option>
              </select>
            </div>
          </div>
          <div className="input-row">
          <div>
      <h2 className='blackk'>Basic Cover</h2>
      {BasicCover.map(checkbox => (
  <div key={checkbox.id}>
    <input
      type="checkbox"
      name={checkbox.label} // Use the label as the name
      checked={checkbox.checked}
      onChange={() => handleBasicCoverChange(checkbox.id, 'BasicCover')} // Pass the type 'BasicCover'
    />
    <label htmlFor={`basic-cover-checkbox-${checkbox.id}`}>{checkbox.label}</label>
  </div>
))}

<h2 className='blackk'>Optional Covers</h2>
{OptionalCover.map(checkbox => (
  <div key={checkbox.id}>
    <input
      type="checkbox"
      name={checkbox.label} // Use the label as the name
      checked={checkbox.checked}
      onChange={() => handleOptionalCoverChange(checkbox.id, 'OptionalCover')} // Pass the type 'OptionalCover'
    />
    <label htmlFor={`optional-cover-checkbox-${checkbox.id}`}>{checkbox.label}</label>
  </div>
))}

<h2 className='blackk'>Sum Insured*</h2>
<div>
<input
    type="radio"
    id="sum-insured-25000"
    value={25000}
    checked={formData1.SumInsured === 25000}
    onChange={() => handleOptionChange1(25000)}
  />
  <label htmlFor="sum-insured-25000">$25,000 USD</label>
</div>
<div>
  <input
    type="radio"
    id="sum-insured-50000"
    value={50000}
    checked={formData1.SumInsured === 50000}
    onChange={() => handleOptionChange1(50000)}
  />
  <label htmlFor="sum-insured-50000">$50,000 USD</label>
</div>
<div>
  <input
    type="radio"
    id="sum-insured-100000"
    value={100000}
    checked={formData1.SumInsured === 100000}
    onChange={() => handleOptionChange1(100000)}
  />
  <label htmlFor="sum-insured-100000">$100,000 USD</label>
</div>
<div>
  <input
    type="radio"
    id="sum-insured-other"
    value="other"
    checked={formData1.SumInsured === "other"}
    onChange={() => handleOptionChange1("other")}
  />
  <label htmlFor="sum-insured-other">Other</label>
  {/* Render additional input for other value if "Other" is selected */}
  {formData1.SumInsured === "other" && (
    <div>
      <input
        type="number"
        placeholder="Enter other value"
        value={formData1.OtherValue || ""}
        onChange={(e) => setFormData1({ ...formData1, OtherValue: e.target.value })}
      />
      <button onClick={() => handleOptionChange1(formData1.OtherValue)}>Submit</button>
    </div>
  )}
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

export default Termlifedet;
