import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./DetailB.css";
import Ttravel from './images/wab.png';
import Cargo from './BusnDetail/Cargo';
import GroupH from './BusnDetail/GroupHealth';
import GroupP from './BusnDetail/GroupPersonal';
import Machine from './BusnDetail/Machine';
import Money from './BusnDetail/Money';
import MotorF from './BusnDetail/MotorFleet';
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
        <div className="img-slider">
          <div className="image-container">
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
          </div>
        </div>
        <div className="aappp-container">
          <div className="innsurance-types-container">
            {insuranceTypes.map((type, index) => (
              <InsuranceType
                key={index}
                type={type}
                isActive={type.name === activeType}
                handleClick={() => handleTypeClick(type.name)}
              />
            ))}
          </div>
          <div className="iimggdescc">
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
        <div className="ttype-container">
          <div className="nname-ccontainer">{name}</div>
          <div className="iicon-container">{icon}</div>
        </div>
      </div>
    );
  };
  
  const insuranceTypes = [
    { name: "cargo", icon: "➜" },
    { name: "grouphealthcare", icon: "➜" },
    { name: "grouppersonalacc", icon: "➜" },
    { name: "machinerybreakdown", icon: "➜" },
    { name: "moneyinsurance", icon: "➜" },
    { name: "motorfleetinsurance", icon: "➜" },
  ];
  
  const DescriptionComponent = ({ name }) => {
    switch (name) {
      case "cargo":
        return <Cargo />;
      case "grouphealthcare":
        return <GroupH />;
      case "grouppersonalacc":
        return <GroupP />;
      case "machinerybreakdown":
        return <Machine />;
      case "moneyinsurance":
        return <Money />;
      case "motorfleetinsurance":
        return <MotorF />;
      default:
        return null;
    }
  };
  
  export default Detail;
  