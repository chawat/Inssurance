// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/forquote.png';
import '../Home.css';
import '../BQ.css';
import BuQuote from './BuQuote';

const BQDetail = () => {
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
      <div className="business-quote-container">
        <BuQuote/>
      </div>
    </div>
  );
};

export default BQDetail;
