import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./Detail.css";
import Ttravel from './images/de.png';
import House from './PersonalDetail/House';
import Motor from './PersonalDetail/Motor';
import Travel from './PersonalDetail/Travel';
import Personal from './PersonalDetail/Personal';
import Term from './PersonalDetail/Term';
import Healt from './PersonalDetail/HealthcareInsurance';
import image1 from './images/per1.png';
import './Home.css'; 

const Detail = () => {
  const [descriptionType, setDescriptionType] = useState(null);
  const [activeType, setActiveType] = useState(null);

  const toggleDescription = (type) => {
    setDescriptionType(type);
  };

  const handleTypeClick = async (type) => {
    if (type === activeType) {
      // If clicking the same type again, keep the active state
      return;
    }
    
    setActiveType(type);
    toggleDescription(type);
    
  try {
    // Make a PUT request to the API endpoint to increment the value of the specified field
    const response = await axios.put(`http://localhost:3003/view/${type}`);
    console.log('Field incremented successfully:', response.data);
    // You can perform additional actions here if needed
  } catch (error) {
    console.error('Error incrementing field:', error);
    // Handle errors here
  }
  };

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
      <div className="image-slider">
        <div className="image-container">
          <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        </div>
      </div>
      <div className="appp-container">
        <div className="insurance-types-container">
          {insuranceTypes.map((type, index) => (
            <InsuranceType
              key={index}
              type={type}
              isActive={type.name === activeType}
              handleClick={() => handleTypeClick(type.name)}
            />
          ))}
        </div>
        <div className="iimgdescc">
          <img src={Ttravel} alt="Background" />
        </div>
      </div>
      {descriptionType && (
        <div className="description">
          <DescriptionComponent name={descriptionType} />
        </div>
      )}
    </div>
  );
};

const InsuranceType = ({ type, isActive, handleClick }) => {
  const { name, icon } = type;

  return (
    <div className={`insurance-type ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <div className="type-container">
        <div className="nname-container">{name}</div>
        <div className="icon-container">{icon}</div>
      </div>
    </div>
  );
};

const insuranceTypes = [
  { name: "motor", icon: "➜" },
  { name: "termlife", icon: "➜" },
  { name: "house", icon: "➜" },
  { name: "healthcare", icon: "➜" },
  { name: "personalacc", icon: "➜" },
  { name: "travel", icon: "➜" },
];

const DescriptionComponent = ({ name }) => {
  switch (name) {
    case "house":
      return <House />;
    case "travel":
      return <Travel />;
    case "termlife":
      return <Term />;
    case "motor":
      return <Motor />;
    case "personalacc":
      return <Personal />;
    case "healthcare":
      return <Healt />;
    default:
      return null;
  }
};

export default Detail;
