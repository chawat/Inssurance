

import ContactForm from "../ContactForm/ContactForm";
import ContactHeader from "../ContactHeader/ContactHeader";
import "./Contactus.css";
import image1 from '../images/Cont2.png';
import React, { useState, useEffect } from 'react';


const Contactus = () =>  {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    image1,
    // image2,
    // image3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div>
       <div className="img-slider">
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
      </div>
      <div className="main_container">
        <ContactHeader />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contactus;
