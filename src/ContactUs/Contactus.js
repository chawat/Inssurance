
// import React, { useState, useEffect } from 'react';


// import image1 from './images/forquote.png';

// import './Home.css'; // Import CSS file
// import './BQ.css';
// import BuQuote from './BuQuote';
// import ContactForm from './Contactform';
//  const Contactus = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [
//     image1,
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div>
//       <div className="image-slider">
//         <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
//       </div>
//       <div >
      
//                <ContactForm />
//       </div>
//     </div>
//   );
// };

//  export default Contactus;
//  import React, { useState, useEffect } from 'react';

import ContactForm from "../ContactForm/ContactForm";
import ContactHeader from "../ContactHeader/ContactHeader";
import "./Contactus.css";


const Contactus = () =>  {
  return (
    <div>
      <div className="main_container">
        <ContactHeader />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contactus;
