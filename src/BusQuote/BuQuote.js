import React, { useState } from 'react';

import axios from 'axios';

const BuQuote =() =>{
  const [formData2, setFormData2] = useState({
    CompanyName: "",
    BusinessType: "",
    NumberOfEmployees: "",
    ContactOfPerson: "", 
    Email: "",
    Mobile: "",
    Landline:"",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const personalResponse = await axios.post('http://localhost:3003/businessinsurance', formData2);
      const personalData = personalResponse.data;
      console.log(personalData);
      
      // Check if the 'success' property exists and has a value of true
      if (personalData ) {
        alert('Personal details saved successfully!');
        
        // Proceed with house insurance details only if personal details are successfully saved
      
      } else {
        console.error('Failed to save personal details:', personalData.message);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };
  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2({
      ...formData2,
      [name]: value
    });
  };

  return (
    <div>
      <h1>Get A Business Quote</h1>
      <p>Choose your preferred options from the below fields. Your request will be automatically forwarded to our Sales Department and an AROPE Representative will contact you shortly</p>
      {/* <form onSubmit={handleSubmit}> */}
        <form onSubmit={handleSubmit}>
        <label htmlFor="professionalName">Professional/Company Name*:</label>
        <input
          type="text"
          id="professionalName"
          name="CompanyName"
          value={formData2.CompanyName} onChange={handleInputChange2}
          required
        />
        <br />

        <label htmlFor="contactPerson">Business Type*:</label>
        <input
          type="text"
          id="contactPerson"
          name="BusinessType"
          value={formData2.BusinessType} onChange={handleInputChange2}
          required
        />
        <br />

        <label htmlFor="landlineNumber">Number Of Employees*:</label>
        <input
          type="number"
          id="landlineNumber"
          name="NumberOfEmployees"
          value={formData2.NumberOfEmployees} onChange={handleInputChange2}
          required
        />
        <br />

        <label htmlFor="businessType">Contact Of Person*:</label>
        <input
          type="text"
          id="contactPerson"
          name="ContactOfPerson"
          value={formData2.ContactOfPerson} onChange={handleInputChange2}
          required
        />
        <br />

        <label htmlFor="emailAddress">Email Address*:</label>
        <input
          type="email"
          id="emailAddress"
          name="Email"
          value={formData2.Email} onChange={handleInputChange2}
          required
        />
        <br />

        <label htmlFor="numEmployees">Mobile Number*:</label>
        <input
          type="tel"
          id="numEmployees"
          name="Mobile"
          value={formData2.Mobile} onChange={handleInputChange2}
        />
        <br />

        <label htmlFor="mobileNumber">LandLine Number*:</label>
        <input
          type="tel"
          id="mobileNumber"
          name="Landline"
          value={formData2.Landline} onChange={handleInputChange2}
        />
        <br />

        <button className="request-quote-button">Submit</button>
        {/* <button type='submit'>Submit</button> */}
      </form>
    </div>
  );
};

export default BuQuote;