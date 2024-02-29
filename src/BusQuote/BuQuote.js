import React, { useState } from 'react';

const INITIAL_STATE = {
  professionalName: '',
  contactPerson: '',
  landlineNumber: '',
  businessType: '',
  emailAddress: '',
  numEmployees: 0,
  mobileNumber: '',
};
const BuQuote =() =>{

// const BuQuote: React.FC = () => {
//   const [formData, setFormData] = useState(INITIAL_STATE);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Forward the formData to your Sales Department
//     console.log('Submitting formData:', formData);
//   };

  return (
    <div>
      <h1>Get A Business Quote</h1>
      <p>Choose your preferred options from the below fields. Your request will be automatically forwarded to our Sales Department and an AROPE Representative will contact you shortly</p>
      {/* <form onSubmit={handleSubmit}> */}
        <form>
        <label htmlFor="professionalName">Professional/Company Name*:</label>
        <input
          type="text"
          id="professionalName"
          name="professionalName"
        //   value={formData.professionalName}
        //   onChange={handleInputChange}
          required
        />
        <br />

        <label htmlFor="contactPerson">Contact Person*:</label>
        <input
          type="text"
          id="contactPerson"
          name="contactPerson"
        //   value={formData.contactPerson}
        //   onChange={handleInputChange}
          required
        />
        <br />

        <label htmlFor="landlineNumber">Landline Number*:</label>
        <input
          type="tel"
          id="landlineNumber"
          name="landlineNumber"
        //   value={formData.landlineNumber}
        //   onChange={handleInputChange}
          required
        />
        <br />

        <label htmlFor="businessType">Business Type*:</label>
        <input
          type="text"
          id="contactPerson"
          name="contactPerson"
        //   value={formData.contactPerson}
        //   onChange={handleInputChange}
          required
        />
        <br />

        <label htmlFor="emailAddress">Email Address*:</label>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
        //   value={formData.emailAddress}
        //   onChange={handleInputChange}
          required
        />
        <br />

        <label htmlFor="numEmployees"># of Employees*:</label>
        <input
          type="number"
          id="numEmployees"
          name="numEmployees"
        //   value={formData.numEmployees}
        //   onChange={handleInputChange}
        />
        <br />

        <label htmlFor="mobileNumber">Mobile Number*:</label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
        //   value={formData.mobileNumber}
        //   onChange={handleInputChange}
        />
        <br />

        <button className="request-quote-button">Submit</button>
        {/* <button type='submit'>Submit</button> */}
      </form>
    </div>
  );
};

export default BuQuote;