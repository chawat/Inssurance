import image1 from '../images/about.jpg';
import handshake from '../images/handshake.jpg';
import React from 'react';
import "./about.css";
import Carteee from './Cartabout';
import data from "./data.json";
import Testimonial from './testimonial.js';
import Team from './team'
const Aboutus = () => {


  return ( 
  <div className='body-div'>
    <div className="image-sliderabout">
      <div className="image-containeer">
        <img src={image1} alt="Thank you for your trust"/>
        <div className='text'>
        <h1> Protecting Your Peace of Mind <br/> <span>At any cost</span></h1>
        </div>
      </div>
    </div>
  <div>
  <div className='Container'>
     
        <div className='imgdesc'>
        <img src={handshake} alt="img"></img>
             <div className='borderline'></div>
            
        </div>     
       
        
       <div className='desceab'>
       <span>Creating a better future </span><br/>
            <span>with perfect insurance services </span>
      <div className='texteab'>At NextGuard,we understand that life is full of uncertainties.That's why we're dedicated to providing reliable insurance solutions tailored to meet you unique needs.From protecting your home and belongings to safeguarding your family's future,we are here to offer peace of mind every step of the way.
              With a commitment to exceptional service and comprehensive coverage,we strive to be your trusted partner in safeguarding what matters most to you.Discover the confidence that comes with knowing you are protected with NextGuard
       </div>

        </div>
  </div> 
  <Carteee/>
    <Team/>
    <div>
      <h2>TESTIMONIAL</h2>
    <Testimonial testimonialData={data} />
   </div>
    
    
    
    
    </div>
    </div>
  );
}
 
export default Aboutus;
