import React, { useState } from 'react';
import axios from 'axios';
import './MotorQ.css';

const Housedet = () => {
  const [formData1, setFormData1] = useState({
    ConstructionValue: "",
    ContentValue: "",
    ApplicationStatus: "",
    ResidenceStatus: "", 
    BasicCover: ["Material Damage of Property resulting from Fire","Burglary following Forcible Entry","General Third Party Liability covering Bodily Injuries & Material Damages"],
    OptionalCover: [],
  });
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
        const houseResponse = await axios.post('http://localhost:3003/houseinsurance', formData1);
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
    { id: 1, label: 'Material Damage of Property resulting from Fire', checked: true },
    { id: 2, label: 'Burglary following Forcible Entry', checked: true },
    { id: 3, label: 'General Third Party Liability covering Bodily Injuries & Material Damages', checked: true },
  ]);

  const [OptionalCover, setOptionalCover] = useState([
    { id: 1, label: 'Neighbors Recourse', checked: false },
    { id: 2, label: 'Tenant Recourse', checked: false },
    { id: 3, label: 'Loss of Rent', checked: false },
    { id: 4, label: 'Debris Removal', checked: false },
    { id: 5, label: 'Architects & Surveyors Fees', checked: false },
    { id: 6, label: 'Earthquake, Storm, Tempest & Flood', checked: false },
    { id: 7, label: 'Water Damage (Bursting &/or overflowing of Water Tanks, Apparatus or Pipes)', checked: false },
    { id: 8, label: 'Plate Glass', checked: false },
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
    <div>
      <h2>GET A QUOTE FOR HOUSEHOLD MULTI-RISKS</h2>
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

        <div className="plan-details">
          <h2>PROPERTY DETAILS</h2>
          <div className="input-row">
            <div>
              <label htmlFor="Currency">Applicant Status*:</label>
              <select id="Currency" name="ApplicationStatus" value={formData1.ApplicationStatus} onChange={handleInputChange1} required>
                <option value="">Select an option</option>
                <option value="tenant">Tenant</option>
                <option value="L/O">Landlord/Owner</option>
              </select>
            </div>
            <div>
              <label htmlFor="Address">Residence Address*:</label>
              <input type="text" id="Address" name="ResidenceStatus" value={formData1.ResidenceStatus} onChange={handleInputChange1} required />
            </div>
          </div>
          <div className="input-row">
            <div>
              <label htmlFor="Value">Construction Value*:</label>
              <input type="text" id="Value" name="ConstructionValue" value={formData1.ConstructionValue} onChange={handleInputChange1} required />
            </div>
            <div>
              <label htmlFor="ContentsV">Contents Value*:</label>
              <input type="text" id="ContentsV" name="ContentValue" value={formData1.ContentValue} onChange={handleInputChange1} required />
            </div>
          </div>
        </div>

        <div className="plan-details">
          <h2>PLAN DETAILS</h2>
          <div className="motor-insurance-quote-container">
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
