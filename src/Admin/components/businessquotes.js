// // BusinessQuotes.jsx

// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import NavigationMenu from '../NavigationMenu';
// import './businessQuotes.css'; // Import the CSS file
// import Header from '../Header';

// const BusinessQuotes = () => {
//   const [quotes, setQuotes] = useState([]);

//   useEffect(() => {
//     const fetchQuotes = async () => {
//       try {
//         const response = await axios.get('http://localhost:3003/api/getbusinessdatapending');
//         setQuotes(response.data);
//       } catch (error) {
//         console.error('Error fetching quotes:', error);
//       }
//     };

//     fetchQuotes();
//   }, []);

//   const handleDoneClick = async (id) => {
//     try {
//       await axios.put(`http://localhost:3003/api/businessinsurance/updatestatus/${id}`);
//       setQuotes(quotes.filter(quote => quote._id !== id));
//       window.alert('Status updated successfully');
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };

//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const toggleSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };
//   // Group quotes by type
//   const groupedQuotes = quotes.reduce((acc, quote) => {
//     if (!acc[quote.Type]) {
//       acc[quote.Type] = [];
//     }
//     acc[quote.Type].push(quote);
//     return acc;
//   }, {});

//   return (
//     <div className='grid-containerbus'>
//       <Header toggleSidebar={toggleSidebar} /> {/* Pass toggleSidebar function */}
//       <NavigationMenu openSidebarToggle={openSidebarToggle} toggleSidebar={toggleSidebar} />
//       <main className='main-containerbus'>
//         <div className="contentbus">
//           {Object.entries(groupedQuotes).map(([type, quotesOfType]) => (
//             <div key={type}>
//               <h3>{type}</h3>
//               <ul className="quote-list">
//                 {quotesOfType.map((quote, index) => (
//                   <li key={index}>
//                     <div className="quote-boxbus">
//                       <div>Company Name: {quote.CompanyName}</div>
//                       <div>Business Type: {quote.BusinessType}</div>
//                       <div>Number of Employees: {quote.NumberOfEmployees}</div>
//                       <div>Contact Of Person: {quote.ContactOfPerson}</div>
//                       <div>Email: {quote.Email}</div>
//                       <div>Mobile: {quote.Mobile}</div>
//                       <div>LandLine: {quote.Landline}</div>
//                       <button onClick={() => handleDoneClick(quote._id)}>Done</button>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//           {quotes.length === 0 && <p className="empty-quote">No quotes available.</p>}
//         </div>
//       </main>
//     </div>
//   );
// }
// export default BusinessQuotes;


import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';

import Header from '../Header';
import NavigationMenu from '../NavigationMenu';
import './personalQuotes.css'; // Import the CSS file
import axios from 'axios';

const BusinessQuotes = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const [cargoLength, setCargoLength] = useState(null); // Changed constant name

  useEffect(() => {
    axios.get('http://localhost:3003/api/getCargoLength')
      .then(response => {
        setCargoLength(response.data.cargolength); // Corrected property name
      })
      .catch(error => {
        console.error('Error fetching cargo length:', error);
      });
  }, []);

  const [groupPersonalLength, setGroupPersonalLength] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3003/api/getGroupPersonalLength')
      .then(response => {
        setGroupPersonalLength(response.data.groupPersonalLength);
      })
      .catch(error => {
        console.error('Error fetching group personal length:', error);
      });
  }, []);

  const [groupHealthLength, setGroupHealthLength] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3003/api/getGroupHealthLength')
      .then(response => {
        setGroupHealthLength(response.data.groupHealthLength);
      })
      .catch(error => {
        console.error('Error fetching group health length:', error);
      });
  }, []);

  const [motorCount, setMotorCount] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3003/api/getMotorfleetLength')
      .then(response => {
        setMotorCount(response.data.motorLength);
      })
      .catch(error => {
        console.error('Error fetching motor count:', error);
      });
  }, []);

  

const [moneyCount, setMoneyCount] = useState(null);

useEffect(() => {
  axios.get('http://localhost:3003/api/getMoneyLength')
    .then(response => {
      setMoneyCount(response.data.moneyLength);
    })
    .catch(error => {
      console.error('Error fetching money count:', error);
    });
}, []);


const [machineCount, setMachineCount] = useState(null);

useEffect(() => {
  axios.get('http://localhost:3003/api/getMachineLength')
    .then(response => {
      setMachineCount(response.data.machineLength);
    })
    .catch(error => {
      console.error('Error fetching machine count:', error);
    });
}, []);
  return (
    <div className='grid-containerper'>
      <Header toggleSidebar={toggleSidebar} /> {/* Pass toggleSidebar function */}
      <NavigationMenu openSidebarToggle={openSidebarToggle} toggleSidebar={toggleSidebar} />
      <main className='main-containerper'>
        <div className='main-cardsper'>
          <div className='cardeeper'>
          <Link to="/dashboard/quotes/cargo">
            <div className='card-innerper'>
              <h3>Cargo Quotes</h3>
              <BsFillArchiveFill className='card_iconper'/>
            </div>
            <h1>{cargoLength !== null ? cargoLength : 'Loading...'}</h1>     
               </Link>
          </div>
          <div className='cardeeper'>
          <Link to="/dashboard/quotes/grouphealth" className='cardeeper'>
            <div className='card-innerper'>
              <h3>Group Healthcare Quotes</h3>
              <BsFillGrid3X3GapFill className='card_iconper'/>
            </div>
            <h1>{groupHealthLength !== null ? groupHealthLength : 'Loading...'}</h1>
            </Link>
          </div>
          <div className='cardeeper'>
          <Link to="/dashboard/quotes/grouppersonal" className='cardeeper'>
            <div className='card-innerper'>
              <h3>Group Personal Quotes</h3>
              <BsPeopleFill className='card_iconper'/>
            </div>
            <h1>{groupPersonalLength !== null ? groupPersonalLength : 'Loading...'}</h1>         
               </Link>
          </div>
          <div className='cardeeper'>
          <Link to="/dashboard/quotes/machine" className='cardeeper'>
            <div className='card-innerper'>
              <h3>Machinery Breakdown Quotes</h3>
              <BsPeopleFill className='card_iconper'/>
            </div>
            <h1>{machineCount !== null ? machineCount : 'Loading...'}</h1>  
                      </Link>
          </div>
          <div className='cardeeper'>
          <Link to="/dashboard/quotes/money" className='cardeeper'>
            <div className='card-innerper'>
              <h3>Money Quotes</h3>
              <BsPeopleFill className='card_iconper'/>
            </div>
            <h1>{moneyCount !== null ? moneyCount : 'Loading...'}</h1>
                        </Link>
          </div>
          <div className='cardeeper'>
          <Link to="/dashboard/quotes/motorf" className='cardeeper'>
            <div className='card-innerper'>
              <h3>Motor Quotes</h3>
              <BsPeopleFill className='card_iconper'/>
            </div>
            <h1>{motorCount !== null ? motorCount : 'Loading...'}</h1>
                            </Link>
          </div>
        </div>
        <div className='chartsper'></div>
      </main>
    </div>
  );
}

export default BusinessQuotes;



