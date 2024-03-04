// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Pagepersonal/Cart'; // Import the Cart component
import image1 from './images/termlife.jpeg';
import image2 from './images/travel.jpg';
import image3 from './images/healthcare.jpg';
import './Home.css'; // Import CSS file
import Travel from './images/Traveleee.jpg';


const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    image1,
    image2,
    image3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='home'>
      <div className="image-slider">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
      {/* <h1>INSURANCE ESSENTIALS</h1> */}
      <div >
        <Cart/>
        {/* <Cart
             icon=<img src="/images/HE.png" alt="Description of the image" />
          desc=<p><h2 className='bluee'>HealthcareInsurance </h2><br />Safeguard your Quality of life by<br/>considering the Health Protection<br/>Plans provided by Insurance!</p>
        />
        <Cart
          title="Cart 2"
          desc="gdbfsd"
        />
        <Cart
          title="Cart 3"
          desc="ethgrs"
        /> */}
      </div>
      <div className="image-slider">
      <div className="image-container">
        <img src={Travel}  />
        <div className="text-overlay">
          <h1>Planning your next trip?</h1>
          <p> 
Get  Travel Insurance Plans & Roam the world worry-free!</p>
<button className="request-quote-button" onClick={() => window.location.href="/QuoteTravel"}>
    <p className="forp">
        Request A Quote
    </p>
</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
