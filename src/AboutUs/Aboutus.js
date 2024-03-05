import image1 from '../images/forquote.png';
// import './Home.css'; // Import CSS file
// import './BQ.css';
import React, { useState, useEffect } from 'react';
import "./about.css";
import Carteee from './Cartabout';

const Aboutus = () => {
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
    <div className='body-div'>
    <div className="image-slider">
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        <div className="text-overlay">
          <h1>Our Company</h1>
          <p> Established in 1944, NextGuard Insurance Company has left an indelible mark across 8 Arab countries, boasting a heritage built on trust and 79 years of unparalleled regional expertise. We pride ourselves on being a cornerstone of customer engagement, offering tailored solutions that cater to the unique needs of our diverse clientele.</p>
        </div>
      </div>
    </div>
    <div>
    <Carteee/>
    </div>
    </div>
  );
}
 
export default Aboutus;
