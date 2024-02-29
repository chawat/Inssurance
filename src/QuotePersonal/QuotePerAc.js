import React, { useState, useEffect } from 'react';
import image1 from '../images/forquote.png';
import '../Home.css'; // Import CSS file
import '../BQ.css';
import Termlifedet from './Termlifedet';
import PersonalAcdet from './PersonalAcdet';

const QuotePerAc = () => {
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
        <PersonalAcdet/>
     </div>
  );
};

export default QuotePerAc;
