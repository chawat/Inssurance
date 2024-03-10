import React, { useState, useEffect } from 'react';
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
  
    const handleTypeClick = (type) => {
      if (type === activeType) {
        // If clicking the same type again, keep the active state
        return;
      }
      setActiveType(type);
      toggleDescription(type);
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
    { name: "Cargo insurance", icon: "➜" },
    { name: "Group Health insurance", icon: "➜" },
    { name: "Group Personal insurance", icon: "➜" },
    { name: "Machine insurance", icon: "➜" },
    { name: "Money insurance", icon: "➜" },
    { name: "Motor Fleet insurance", icon: "➜" },
  ];
  
  const DescriptionComponent = ({ name }) => {
    switch (name) {
      case "Cargo insurance":
        return <Cargo />;
      case "Group Health insurance":
        return <GroupH />;
      case "Group Personal insurance":
        return <GroupP />;
      case "Machine insurance":
        return <Machine />;
      case "Money insurance":
        return <Money />;
      case "Motor Fleet insurance":
        return <MotorF />;
      default:
        return null;
    }
  };
  
  export default Detail;
  