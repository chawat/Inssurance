import React, { useState, useEffect } from 'react';
import image1 from '../images/forquote.png';
import '../Home.css'; // Import CSS file
import '../BQ.css';
import Housedet from './Housedet';

const QuoteHouse = () => {
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
        <Housedet/>
     </div>
  );
};

export default QuoteHouse;
