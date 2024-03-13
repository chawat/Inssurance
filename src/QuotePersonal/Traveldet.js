
import './MotorQ.css';
import axios from 'axios';
import React, { useState } from 'react';
const Traveldet = () => {
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
    Destination:"",
    CountryOfDeparture: "",
    ContactOfPersonEmergency: "",
    ContactOfPerson: "",
     OptionalCover:"",
    PlanType: "",
    GeographicalZone: "",
    TripDuration: "",
    personal:""
    
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
        const personalId = personalData._id;

  
        // Update formData1 with the eventsAttended field containing the personal ID
        const updatedFormData1 = {
          ...formData1,
          personal: personalId// Populate eventsAttended with personal ID
        };
  
        // Proceed with house insurance details only if personal details are successfully saved
        const Response = await axios.post('http://localhost:3003/travelinsurance', updatedFormData1);
        const Data = Response.data;
        console.log(Data);
        
        // Check if house insurance details were successfully saved
        if (Data) {
          alert('House insurance details saved successfully!');
         
          try {
            // Make a PUT request to the API endpoint to increment the value of the specified field
            const response = await axios.put(`http://localhost:3003/quoteview/travel`);
            console.log('Field incremented successfully:', response.data);
            // You can perform additional actions here if needed
          } catch (error) {
            console.error('Error incrementing field:', error);
            // Handle errors here
          }
        } else {
          console.error('Failed to save house insurance details:', Data.message);
        }
      } else {
        console.error('Failed to save personal details:', personalData.message);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };
  const [OptionalCover, setOptionalCover] = useState([
    { id: 1, label: 'Summer / Winter Sports', checked: false },
  ]);
  const handleOptionalCoverChange = (id, type) => {
    // Toggle the checked property of the clicked checkbox
    const updatedCheckboxes = OptionalCover.map(checkbox =>
      checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
    );
  
    // Update the BasicCover state with the updated checkboxes
    setOptionalCover(updatedCheckboxes);
  
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
  
  


      // const [isChecked, setIsChecked] = useState(false);

      // // Function to handle checkbox change
      // const handleCheckboxChange = () => {
      //   // Toggle the isChecked state when checkbox is clicked
      //   setIsChecked(!isChecked);
      // };
    
      
  return (
    <div >
      <form onSubmit={handleSubmit}> 
       <div className="motor-insurance-quote-container">
        <h2>GET A QUOTE FOR TRAVEL INSURANCE</h2>
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
              <label htmlFor="Destination">Destination*:</label>
              <input type="text" id="destination" name="Destination" value={formData1.Destination} onChange={handleInputChange1} required />
            </div>
            <div>
              <label htmlFor="CountryofDeparture">Country of Departure*:</label>
              <input type="text" id="CountryofDeparture" name="CountryOfDeparture" value={formData1.CountryOfDeparture} onChange={handleInputChange1} required />
            </div>
            </div>
            <div className="input-row">
            <div>
              <label htmlFor="CountryofPerson">Contact of Person in case of Emergency*:</label>
              <input type="tel" id="CountryofPerson" name="ContactOfPersonEmergency" value={formData1.ContactOfPersonEmergency} onChange={handleInputChange1} required />
            </div>
            <div>
            <label htmlFor="NomberofPerson">Contact Person Mobile Number*:</label>
              <input type="tel" id="NomberofPerson" name="ContactOfPerson" value={formData1.ContactOfPerson} onChange={handleInputChange1} required />
              </div>
              </div>
           
            
            <div className="plan-details">
            <div className="input-row">
      {/* Checkbox input element */}
      <div>
  <h2 className='blackk'>Optional Covers</h2>
  {OptionalCover.map(checkbox => (
  <div key={checkbox.id}>
    <input
      type="checkbox"
      name={checkbox.label} // Use the label as the name
      checked={checkbox.checked}
      onChange={() => handleOptionalCoverChange(checkbox.id, 'OptionalCover')} // Pass the type 'BasicCover'
    />
    <label htmlFor={`optional-cover-checkbox-${checkbox.id}`}>{checkbox.label}</label>
  </div>
))}

</div>
              
            <div >
              <label htmlFor="plantype">Plan Type*:</label>
              <select id="Plantype" name="PlanType" value={formData1.PlanType} onChange={handleInputChange1} required>
                <option value="">Select an option</option>
                <option value="Elite">Elite USD $500,000</option>
                <option value="PlatinumPlus">Platinum Plus USD $250,000P</option>
                <option value="Platinum">Platinum USD $100,000</option>
                <option value="Gold">Gold USD $50,000</option>
                <option value="Silver">Silver USD $25,000</option>
                <option value="Bronze">Bronze USD $10,000</option>
              </select>
              <label htmlFor="Zone">Geographical Zone*:</label>
              <select id="Zone" name="GeographicalZone" value={formData1.GeographicalZone} onChange={handleInputChange1} required>
                <option value="">Select an option</option>
                <option value="Europe">Europe</option>
                <option value="Worldwide">Worldwide</option>
                <option value="WorldwideExcUSAandCanada">Worldwide excluding USA and Canada</option>
              </select>
              <label htmlFor="TripDuration">Trip Duration*:</label>
              <select id="TripDuration" name="TripDuration" value={formData1.TripDuration} onChange={handleInputChange1} required>
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
          
          
         
        

        <button className='buttoonperQ' type="submit">Submit</button>
       </div>
       
      </form>
    </div>
  );
};

export default Traveldet;
