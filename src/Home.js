// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Pagepersonal/Cart'; // Import the Cart component
import image1 from './images/weho.png';
import image2 from './images/weho.png';
import image3 from './images/weho.png';
import './Home.css'; // Import CSS file
import Travel from './images/Traveleee.jpg';
import ParallaxImage from './ParallaxImage'; 
import forrig from './images/forright.png';
import handshake from './images/handshake.jpg';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='home'>
      <div className="image-slider">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
      
      <div>
        <Cart/>
      </div>
      
      <div className='image-slider'>
        <div className="image-container">
          <ParallaxImage src={Travel} />
          <div className="ovverlay"></div>
          <div className="texte-overlay">
            <p>Planning your next trip?</p>
            <p>Get Travel Insurance Plans & Roam the world worry-free!</p>
            <button className="buttoon" onClick={() => window.location.href="/QuoteTravel"}>
              <p className="forp">Request A Quote</p>
            </button>
          </div>
        </div>
      </div>
      <div>
  <div className='Container'>
     
        <div className='imgdesc'>
        <img src={handshake} alt="img"></img>
             <div className='borderline'></div>
            
        </div>     
       
        
       <div className='desc'>
            <h2>PERFECT INSURANCE SERVICES</h2>
            <div>At NextGuard,we understand that life is full of uncertainties.That's why we're dedicated to providing reliable insurance solutions tailored to meet you unique needs.From protecting your home and belongings to safeguarding your family's future,we are here to offer peace of mind every step of the way.
              With a commitment to exceptional service and comprehensive coverage,we strive to be your trusted partner in safeguarding what matters most to you.Discover the confidence that comes with knowing you are protected with NextGuard
            </div>

        </div>
  </div> 
  </div>
      
      <div className='image-slider'>
        <div className="image-right-container">
          <ParallaxImage src={forrig} />
          <div className="ovverlay"></div>
          <div className="texte-overlay">
            <p>Creating a better future for your loved once</p>
            <p>We're in this business since 1988 and we provide the best services.</p>
            <button className="buttoon" onClick={() => window.location.href="/PersonalServices"}>
              <p className="forp">Let's Get started</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
