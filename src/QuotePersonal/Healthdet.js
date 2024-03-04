
import './MotorQ.css';
import axios from 'axios';
import React, { useState } from 'react';
const Healthdet = () => {
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
    HospitalNetwork:"",
    HospitalizationClass: "",
    Covertype: "",
    AdditionalCover: ["Personal Accidents for the Policyholder/Insured aged less than 65 Years and performing Administrative Profession (Death & Disability due to Accident)"],
    OptionalCover:[],
    
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
        const houseResponse = await axios.post('http://localhost:3003/healthcareinsurance', formData1);
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
  const [AdditionalCover, setAdditionalCover] = useState([
    { id: 1, label: 'Personal Accidents for the Policyholder/Insured aged less than 65 Years and performing Administrative Profession (Death & Disability due to Accident)', checked: true },
    { id: 2, label: 'Work Related Accidents covering the Policyholder/Insured performing Administrative Profession', checked: false },
  ]);

  const handleAdditionalCoverChange = (id, type) => {
    // Toggle the checked property of the clicked checkbox
    const updatedCheckboxes = AdditionalCover.map(checkbox =>
      checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
    );
  
    // Update the BasicCover state with the updated checkboxes
    setAdditionalCover(updatedCheckboxes);
  
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
  

  const [OptionalCover, setOptionalCover] = useState([
    { id: 1, label: 'Ambulatory (Laboratory & Radiology)', checked: false },
    { id: 2, label: 'Dr. Consultations', checked: false },
    { id: 3, label: 'Medications', checked: false },
  ]);

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
      <form onSubmit={handleSubmit}> 
       <div className="motor-insurance-quote-container">
        <h2>GET A QUOTE FOR HEALTHCARE INSURANCE</h2>
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
          <div >
              <label htmlFor="plantype">Hospital Network*:</label>
              <select id="Plantype" name="HospitalNetwork" value={formData1.HospitalNetwork} onChange={handleInputChange1} required>
                <option value="">Select an option</option>
                <option value="Full Network - All Hospitals">Full Network - All Hospitals</option>
                <option value="Restricted Network - Selection of Hospitals">Restricted Network - Selection of Hospitals</option>
              </select>
              <label htmlFor="Zone">Hospitalization Class*:</label>
              <select id="Zone" name="HospitalizationClass" value={formData1.HospitalizationClass} onChange={handleInputChange1} required>
                <option value="">Select an option</option>
                <option value="First Class	Medicare(500,000$)- Medicare Basic(300,000$)tFirs">First Class	Medicare(500,000$)- Medicare Basic(300,000$)</option>
                <option value="Second Class	Medicare(400,000$)-Medicare Basic(250,000$)">Second Class	Medicare(400,000$)-Medicare Basic(250,000$)</option>
                <option value="Third Class	Medicare(350,000$)-Medicare Basic(200,000$)">Third Class	Medicare(350,000$)-Medicare Basic(200,000$)</option>
              </select>
              <label htmlFor="TripDuration">Cover type*:</label>
              <select id="TripDuration" name="Covertype" value={formData1.Covertype} onChange={handleInputChange1} required>
                <option value="">Select an option</option>
                <option value="With NSSF">With NSSF</option>
                <option value="Without NSSF">Without NSSF</option>
              </select>
              
              
          </div>
          </div>           
            
            <div className="plan-details">
          
      {/* Checkbox input element */}
      <div >
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
           <h2 className='blackk'>Additional Cover</h2>
            {AdditionalCover.map(checkbox => (
  <div key={checkbox.id}>
    <input
      type="checkbox"
      name={checkbox.label} // Use the label as the name
      checked={checkbox.checked}
      onChange={() => handleAdditionalCoverChange(checkbox.id, 'AdditionalCover')} // Pass the type 'BasicCover'
    />
    <label htmlFor={`additional-cover-checkbox-${checkbox.id}`}>{checkbox.label}</label>
  </div>
))}

</div>
              
           
          
          
          </div>
          </div>
          
          
         
        

        <button type="submit">Submit</button>
       </div>
       
      </form>
    </div>
  );
};

export default Healthdet;
