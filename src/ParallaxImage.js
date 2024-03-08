// ParallaxImage.js
import React, { useState, useEffect } from 'react';
import './ParallaxImage.css'; // Import CSS file for styling

const ParallaxImage = ({ src }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update scroll position state on scroll
  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate the translateY value based on scroll position
  const translateY = `translateY(-${scrollPosition * 0.5}px)`; // Adjust the multiplier for desired parallax effect

  return (
    <div className="parallax-image-container" style={{ background: `url(${src}) no-repeat center center fixed`, backgroundSize: 'cover' }}>
      {/* Empty div to maintain space for the parallax effect */}
      <div className="parallax-placeholder" style={{ height: '500px' }}></div>
    </div>
  );
};

export default ParallaxImage;
