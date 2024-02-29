// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cart from './CartB'; // Import the Cart component
import image1 from '../images/forbus.png';
import '../Home.css'; // Import CSS file

const BusinessServices = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    image1,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="image-slider">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
      <div >
        <Cart/>
      </div>
    </div>
  );
};

export default BusinessServices;
