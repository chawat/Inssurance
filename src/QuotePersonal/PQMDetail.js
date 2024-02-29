// import React, { useState } from 'react';
// import './MotorQ.css';

// // type ApplicantDetails = {
// //   firstName: string;
// //   lastName: string;
// //   dateOfBirth: string;
// //   emailAddress: string;
// //   fatherName: string;
// //   landlineNumber: string;
// //   mobileNumber: string;
// //   occupation: string;
// // };

// // type PlanDetails = {
// //   insuranceType: string;
// // };

// const INITIAL_STATE = {
//   applicantDetails: {
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//     emailAddress: '',
//     fatherName: '',
//     landlineNumber: '',
//     mobileNumber: '',
//     occupation: '',
//   },
//   planDetails: {
//     insuranceType: '',
//   },
// };

// const PQMDetail = () => {
// //   const [formData, setFormData] = useState(INITIAL_STATE);

// //   const handleInputChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
// //   ) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: {
// //         ...formData[e.target.name],
// //         [e.target.id]: e.target.value,
// //       },
// //     });
// //   };

// //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     // Forward the formData to your Sales Department
// //     console.log('Submitting formData:', formData);
// //   };

//   return (
//     <div className="motor-insurance-quote-container">
//       <h1>Get a Quote for Motor Insurance</h1>
//       {/* <form onSubmit={handleSubmit}> */}
//       <form >
//         <div className="applicant-details">
//           <h2>Applicant Details</h2>
//           <div className="input-row">
//           <div>
//             <label htmlFor="firstName">First Name*:</label>
//             <input
//               type="text"
//               id="firstName"
//               name="applicantDetails"
//             //   value={formData.applicantDetails.firstName}
//             //   onChange={handleInputChange}
//               required
//             />
//           </div>
          
          
//           <div>
//             <label htmlFor="dateOfBirth">Applicant Date Of Birth:</label>
//             <input
//               type="date"
//               id="dateOfBirth"
//               name="applicantDetails"
//             //   value={formData.applicantDetails.dateOfBirth}
//             //   onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="emailAddress">Email Address*:</label>
//             <input
//               type="email"
//               id="emailAddress"
//               name="applicantDetails"
//             //   value={formData.applicantDetails.emailAddress}
//             //   onChange={handleInputChange}
//               required
//             />
//           </div>
         
//           <div>
//             <label htmlFor="fatherName">Father's Name*:</label>
//             <input
//               type="text"
//               id="fatherName"
//               name="applicantDetails"
//             //   value={formData.applicantDetails.fatherName}
//             //   onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="landlineNumber">Landline Number:</label>
//             <input
//               type="tel"
//               id="landlineNumber"
//               name="applicantDetails"
//             //   value={formData.applicantDetails.landlineNumber}
//             //   onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="occupation">Occupation*:</label>
//             <input
//               type="text"
//               id="occupation"
//               name="applicantDetails"
//             //   value={formData.applicantDetails.occupation}
//             //   onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div>
           
//                       <div>
//                       <label htmlFor="lastName">Last Name*:</label>
//                       <input
//                         type="text"
//                         id="lastName"
//                         name="applicantDetails"
//                         // value={formData.applicantDetails.lastName}
//                         // onChange={handleInputChange}
//                         required
//                       />
//                     </div>
                   
//                     <div>
//                       <label htmlFor="mobileNumber">Mobile Number*:</label>
//                       <input
//                         type="tel"
//                         id="mobileNumber"
//                         name="applicantDetails"
//                         // value={formData.applicantDetails.mobileNumber}
//                         // onChange={handleInputChange}
//                         required
//                       />
//                     </div>
                  
//                   </div>
//                   <div className="plan-details">
//                     <h2>Plan Details</h2>
                    
//                     <div>
//                       <label htmlFor="insuranceType">Insurance Type*:</label>
//                       <select
//                         id="insuranceType"
//                         name="planDetails"
//                         // value={formData.planDetails.insuranceType}
//                         // onChange={handleInputChange}
//                         required
//                       >
//                         <option value="">Select an option</option>
//                         <option value="Third Party Liability">Third Party Liability</option>
//                         <option value="Motor all Risks/Total Loss">Motor all Risks/Total Loss</option>
//                         <option value="Orange Card">Orange Card</option>
//                       </select>
//                     </div>
//                   </div>
//                   </div>
//                   <div className="recaptcha">
//                     {/* reCAPTCHA component */}
//                   </div>
//                   <button type="submit">Submit</button>
//                   </div>
//                 </form>
//               </div>
              
//             );
//           };
          
//           export default PQMDetail;

import React from 'react';
import './MotorQ.css';

const PQMDetail = () => {
  return (
    <div >
      <h1>Get a Quote for Motor Insurance</h1>

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
          <h2>Plan Details</h2>
          <div className="input-row">
            <div>
              <label htmlFor="insuranceType">Insurance Type*:</label>
              <select id="insuranceType" name="planDetails" required>
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

        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PQMDetail;
