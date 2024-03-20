// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import Header from '../Header';
// import NavigationMenu from '../NavigationMenu';
// import './personalQuotes.css'; // Import the CSS file

// const PersonalQuotes = () => {
//   const [quotes, setQuotes] = useState({
//     houseData: [],
//     motorData: [],
//     travelData: [],
//     termlifeData: [],
//     personalaccData: [],
//     healthcareData: []
//   });

//   const fetchQuotes = async () => {
//     try {
//       const response = await axios.get('http://localhost:3003/api/getAllPendingInsuranceWithPersonalData');
//       console.log('Response data:', response.data);
//       setQuotes(response.data);
//     } catch (error) {
//       console.error('Error fetching quotes:', error);
//     }
//   };

//   useEffect(() => {
//     fetchQuotes();
//   }, []);

//   const updateStatus = async (schema, id) => {
//     try {
//       const response = await axios.put(`http://localhost:3003/api/insurance/${schema}/updatestatus/${id}`);
//       window.alert('Status updated successfully');
//       console.log(response.data);
//       // After updating status, fetch the updated data
//       fetchQuotes();
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };

//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const toggleSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (
//     <div className='grid-containerper'>
//       <Header toggleSidebar={toggleSidebar} /> {/* Pass toggleSidebar function */}
//       <NavigationMenu openSidebarToggle={openSidebarToggle} toggleSidebar={toggleSidebar} />
//       <main className='main-containerper'>
//         <div className="content">
       
//           {quotes.houseData.length > 0 && (
             
//             <div className="quote-box">
//               <h2>House Insurance</h2>
//               <ul>
//                 {quotes.houseData.map((quote, index) => (
//                   <li key={index}>
//                     <ul>
//                       {quote.matchedPersonals.map((personal, personalIndex) => (
//                         <li key={personalIndex}>
//                           <div>First Name: {personal.FirstName}</div>
//                           <div>Last Name: {personal.LastName}</div>
//                           <div>Father Name: {personal.FatherName}</div>
//                           <div>Email: {personal.Email}</div>
//                           <div>Landline: {personal.LandLine}</div>
//                           <div>Mobile: {personal.Mobile}</div>
//                           <div>Date of birth: {personal.DateOfBirth}</div>
//                           <div>Occupation: {personal.Occupation}</div>
//                         </li>
//                       ))}
//                     </ul>
//                     <div>Construction Value: {quote.ConstructionValue}</div>
//                     <div>Content Value: {quote.ContentValue}</div>
//                     <div>Application Status: {quote.ApplicationStatus}</div>
//                     <div>Residence Status: {quote.ResidenceStatus}</div>
//                     <div>
//                       Basic Cover:
//                       <ul>
//                         {quote.BasicCover.map((cover, coverIndex) => (
//                           <li key={coverIndex}>{cover}</li>
//                         ))}
//                       </ul>
//                     </div>
//                     {quote.OptionalCover && quote.OptionalCover.length > 0 && (
//                       <div>
//                         Optional Cover:
//                         <ul>
//                           {quote.OptionalCover.map((cover, coverIndex) => (
//                             <li key={coverIndex}>{cover}</li>
//                           ))}
//                         </ul>
//                         <button onClick={() => updateStatus('house', quote._id)}>done!</button>
//                       </div>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Motor Insurance */}
//           {quotes.motorData.length > 0 && (
//             <div className="quote-box">
//               <h2>Motor Insurance</h2>
//               <ul>
//                 {quotes.motorData.map((quote, index) => (
//                   <li key={index}>
//                     <ul>
//                       {quote.matchedPersonals.map((personal, personalIndex) => (
//                         <li key={personalIndex}>
//                           <div>First Name: {personal.FirstName}</div>
//                           <div>Last Name: {personal.LastName}</div>
//                           <div>Father Name: {personal.FatherName}</div>
//                           <div>Email: {personal.Email}</div>
//                           <div>Landline: {personal.LandLine}</div>
//                           <div>Mobile: {personal.Mobile}</div>
//                           <div>Date of birth: {personal.DateOfBirth}</div>
//                           <div>Occupation: {personal.Occupation}</div>
//                         </li>
                        
//                       ))}
//                                               <button onClick={() => updateStatus('motor', quote._id)}>done!</button>

//                     </ul>
//                     {/* <div>Plan Detail: {quote.PlanDetail}</div>
//                     {quote.OptionalCover && quote.OptionalCover.length > 0 && (
//                       <div>
//                         Optional Cover:
//                         <ul>
//                           {quote.OptionalCover.map((cover, coverIndex) => (
//                             <li key={coverIndex}>{cover}</li>
//                           ))}
//                         </ul>
//                         <button onClick={() => updateStatus('motor', quote._id)}>done!</button>
//                       </div>
//                     )} */}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Travel Insurance */}
//           {quotes.travelData.length > 0 && (
//             <div className="quote-box">
//               <h2>Travel Insurance</h2>
//               <ul>
//                 {quotes.travelData.map((quote, index) => (
//                   <li key={index}>
//                     <ul>
//                       {quote.matchedPersonals.map((personal, personalIndex) => (
//                         <li key={personalIndex}>
//                           <div>First Name: {personal.FirstName}</div>
//                           <div>Last Name: {personal.LastName}</div>
//                           <div>Father Name: {personal.FatherName}</div>
//                           <div>Email: {personal.Email}</div>
//                           <div>LandLine: {personal.LandLine}</div>
//                           <div>Mobile: {personal.Mobile}</div>
//                           <div>Date of Birth: {personal.DateOfBirth}</div>
//                           <div>Occupation: {personal.Occupation}</div>
//                         </li>
//                       ))}
//                     </ul>
//                     <div>Destination: {quote.Destination}</div>
//                     <div>Country of Departure: {quote.CountryOfDeparture}</div>
//                     <div>Contact of Person Emergency: {quote.ContactOfPersonEmergency}</div>
//                     <div>Contact of Person: {quote.ContactOfPerson}</div>
//                     {quote.OptionalCover && quote.OptionalCover.length > 0 && (
//                       <div>
//                         Optional Cover:
//                         <ul>
//                           {quote.OptionalCover.map((cover, coverIndex) => (
//                             <li key={coverIndex}>{cover}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                     {quote.TABLEOFINSUREDPERSONS && (
//                       <div>
//                         Table of Insured Persons:
//                         <ul>
//                           {quote.TABLEOFINSUREDPERSONS.map((person, personIndex) => (
//                             <li key={personIndex}>
//                               {/* Render fields of the TABLEOFINSUREDPERSONS object */}
//                             </li>
//                           ))}
//                                                   <button onClick={() => updateStatus('travel', quote._id)}>done!</button>

//                         </ul>
//                       </div>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Term Life Insurance */}
//           {quotes.termlifeData.length > 0 && (
//             <div className="quote-box">
//               <h2>Term Life Insurance</h2>
//               <ul>
//                 {quotes.termlifeData.map((quote, index) => (
//                   <li key={index}>
//                     <ul>
//                       {quote.matchedPersonals.map((personal, personalIndex) => (
//                         <li key={personalIndex}>
//                           <div>First Name: {personal.FirstName}</div>
//                           <div>Last Name: {personal.LastName}</div>
//                           <div>Father Name: {personal.FatherName}</div>
//                           <div>Email: {personal.Email}</div>
//                           <div>LandLine: {personal.LandLine}</div>
//                           <div>Mobile: {personal.Mobile}</div>
//                           <div>Date of Birth: {personal.DateOfBirth}</div>
//                           <div>Occupation: {personal.Occupation}</div>
//                         </li>
//                       ))}
//                     </ul>
//                     <div>Currency: {quote.Currency}</div>
//                     <div>Sum Insured: {quote.SumInsured}</div>
//                     <div>Policy Duration: {quote.PolicyDuration}</div>
//                     <div>Basic Cover: {quote.BasicCover}</div>
//                     {quote.OptionalCover && quote.OptionalCover.length > 0 && (
//                       <div>
//                         Optional Cover:
//                         <ul>
//                           {quote.OptionalCover.map((cover, coverIndex) => (
//                             <li key={coverIndex}>{cover}</li>
//                           ))}
//                         </ul>
//                         <button onClick={() => updateStatus('termlife', quote._id)}>done!</button>
//                       </div>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Personal Accident Insurance */}
//           {quotes.personalaccData.length > 0 && (
//             <div className="quote-box">
//               <h2>Personal Accident Insurance</h2>
//               <ul>
//                 {quotes.personalaccData.map((quote, index) => (
//                   <li key={index}>
//                     <ul>
//                       {quote.matchedPersonals.map((personal, personalIndex) => (
//                         <li key={personalIndex}>
//                           <div>First Name: {personal.FirstName}</div>
//                           <div>Last Name: {personal.LastName}</div>
//                           <div>Father Name: {personal.FatherName}</div>
//                           <div>Email: {personal.Email}</div>
//                           <div>LandLine: {personal.LandLine}</div>
//                           <div>Mobile: {personal.Mobile}</div>
//                           <div>Date of Birth: {personal.DateOfBirth}</div>
//                           <div>Occupation: {personal.Occupation}</div>
//                         </li>
//                       ))}
//                     </ul>
//                     <div>Country of Residence: {quote.CountryOfResidence}</div>
//                     <div>Currency: {quote.Currency}</div>
//                     <div>Sum Insured: {quote.SumInsured}</div>
//                     <div>Basic Cover: {quote.BasicCover}</div>
//                     {quote.OptionalCover && quote.OptionalCover.length > 0 && (
//                       <div>
//                         Optional Cover:
//                         <ul>
//                           {quote.OptionalCover.map((cover, coverIndex) => (
//                             <li key={coverIndex}>{cover}</li>
//                           ))}
//                         </ul>
//                         <button onClick={() => updateStatus('personalacc', quote._id)}>done!</button>
//                       </div>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Healthcare Insurance */}
//           {quotes.healthcareData.length > 0 && (
//             <div className="quote-box">
//               <h2>Healthcare Insurance</h2>
//               <ul>
//                 {quotes.healthcareData.map((quote, index) => (
//                   <li key={index}>
//                     <ul>
//                       {quote.matchedPersonals.map((personal, personalIndex) => (
//                         <li key={personalIndex}>
//                           <div>First Name: {personal.FirstName}</div>
//                           <div>Last Name: {personal.LastName}</div>
//                           <div>Father Name: {personal.FatherName}</div>
//                           <div>Email: {personal.Email}</div>
//                           <div>LandLine: {personal.LandLine}</div>
//                           <div>Mobile: {personal.Mobile}</div>
//                           <div>Date of Birth: {personal.DateOfBirth}</div>
//                           <div>Occupation: {personal.Occupation}</div>
//                         </li>
//                       ))}
//                     </ul>
//                     <div>Hospital Network: {quote.HospitalNetwork}</div>
//                     <div>Hospitalization Class: {quote.HospitalizationClass}</div>
//                     <div>Cover Type: {quote.Covertype}</div>
//                     {quote.AdditionalCover && quote.AdditionalCover.length > 0 && (
//                       <div>
//                         Additional Cover:
//                         <ul>
//                           {quote.AdditionalCover.map((cover, coverIndex) => (
//                             <li key={coverIndex}>{cover}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                     {quote.OptionalCover && quote.OptionalCover.length > 0 && (
//                       <div>
//                         Optional Cover:
//                         <ul>
//                           {quote.OptionalCover.map((cover, coverIndex) => (
//                             <li key={coverIndex}>{cover}</li>
//                           ))}
//                         </ul>
//                         <button onClick={() => updateStatus('healthcare', quote._id)}>done!</button>
//                       </div>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default PersonalQuotes;
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';

import Header from '../Header';
import NavigationMenu from '../NavigationMenu';
import './personalQuotes.css'; // Import the CSS file
import axios from 'axios';

const PersonalQuotes = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const [viewsCount, setViewsCount] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3003/api/getTravelLength')
      .then(response => {
        setViewsCount(response.data.travellength); // Corrected property name
      })
      .catch(error => {
        console.error('Error fetching views count:', error);
      });
  }, []);

  const [houseLength, setHouseLength] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3003/api/getHouseLength')
      .then(response => {
        setHouseLength(response.data.houselength);
      })
      .catch(error => {
        console.error('Error fetching house length:', error);
      });
  }, []);

  const [sumOfQuotes, setSumOfQuotes] = useState(null);

useEffect(() => {
  axios.get('http://localhost:3003/api/getMotorLength')
    .then(response => {
      setSumOfQuotes(response.data.motorlength);
    })
    .catch(error => {
      console.error('Error fetching motor length:', error);
    });
}, []);

  const [messageCount, setMessageCount] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3003/api/engthmessages')
      .then(response => {
        setMessageCount(response.data.messageLength);
      })
      .catch(error => {
        console.error('Error fetching message count:', error);
      });
  }, []);

  return (
    <div className='grid-containerper'>
      <Header toggleSidebar={toggleSidebar} /> {/* Pass toggleSidebar function */}
      <NavigationMenu openSidebarToggle={openSidebarToggle} toggleSidebar={toggleSidebar} />
      <main className='main-containerper'>
        <div className='main-cardsper'>
          <div className='cardeeper'>
          <Link to="/dashboard/quotes/house">
            <div className='card-innerper'>
              <h3>House Quotes</h3>
              <BsFillArchiveFill className='card_iconper'/>
            </div>
            <h1>{houseLength !== null ? houseLength : 'Loading...'}</h1>
        </Link>
          </div>
          <div className='cardeeper'>
          <Link to="/dashboard/quotes/Motor" className='cardeeper'>
            <div className='card-innerper'>
              <h3>Motor Quotes</h3>
              <BsFillGrid3X3GapFill className='card_iconper'/>
            </div>
            <h1>{sumOfQuotes !== null ? sumOfQuotes : 'Loading...'}</h1>
            </Link>
          </div>
          <div className='cardeeper'>
          <Link to="/dashboard/quotes/travel" className='cardeeper'>
            <div className='card-innerper'>
              <h3>Travel Quotes</h3>
              <BsPeopleFill className='card_iconper'/>
            </div>
            <h1>{viewsCount !== null ? viewsCount : 'Loading...'}</h1>
            </Link>
          </div>
          <div className='cardeeper'>
            <div className='card-innerper'>
              <h3>Messages</h3>
              <BsFillBellFill className='card_iconper'/>
            </div>
            <h1>{messageCount !== null ? messageCount : 'Loading...'}</h1>
          </div>
        </div>
        <div className='chartsper'></div>
      </main>
    </div>
  );
}

export default PersonalQuotes;
