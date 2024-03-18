import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import React, { useState } from "react";
import Cont from '../images/contactus12.png';
import axios from 'axios';
const ContactForm = () => {

const [formData2, setFormData2] = useState({
    FullName: "",
    Email: "", 
    Mobile: "",
    Message:"",
    Status:"Pending",
  });
  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2({
      ...formData2,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const personalResponse = await axios.post('http://localhost:3003/contactus', formData2);
      const personalData = personalResponse.data;
      console.log(personalData);
      
      // Check if the 'success' property exists and has a value of true
      if (personalData ) {
        alert('Personal details saved successfully!');
        
        // Proceed with house insurance details only if personal details are successfully saved
        
      } else {
        console.error('Failed to save personal details:', personalData.message);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };


  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={handleSubmit}>
          
          <div className={styles.form_control}>
          <label htmlFor="firstName">Full Name*:</label>
              <input type="text" id="fullName" name="FullName" value={formData2.FullName} onChange={handleInputChange2} required />
            </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="Email" value={formData2.Email} onChange={handleInputChange2} required/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="name">Mobile</label>
            <input type="tel" name="Mobile" value={formData2.Mobile} onChange={handleInputChange2} required/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Message</label>
            <textarea type="text" name="Message" rows="5"  value={formData2.Message} onChange={handleInputChange2}/>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button className="buttoon" text="SUBMIT" />
          </div>

   
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src={Cont} alt="contact " />
      </div>
    </section>
  );
};

export default ContactForm;