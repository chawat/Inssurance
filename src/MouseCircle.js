import React, { useState, useEffect } from 'react';
import './MouseCircle.css';

const MouseCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="circle" style={{ left: position.x, top: position.y }}></div>
  );
};

export default MouseCircle;
