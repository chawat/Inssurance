import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [timeOfDay, setTimeOfDay] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
   
   <form className={styles.contactForm} onSubmit={handleSubmit}>
    < h1 className='blueee'>SEND US YOUR MESSAGE</h1>
      <div className={styles.formGroup}>
      
        <input
          type="text"
          placeholder='First Name'
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="text"
          id="lastName"
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type='text'
          id="email"
          placeholder='Mobile Number'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="email"
          id="email"
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="text"
          id="timeOfDay"
          placeholder="When's a good time of day to call you?"
          value={timeOfDay}
          onChange={(e) => setTimeOfDay(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <textarea
          id="message"
          placeholder='Your Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;