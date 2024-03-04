import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Home from './Home';
import Aboutus from'./AboutUs/Aboutus';
import PersonalServices from'./Pagepersonal/PersonalServices';
import BusinessServices from'./PageBusn/BusinessServices';
import BuQuote from './BusQuote/BuQuote';
import ContactUs from'./ContactUs/Contactus';
import HealthcareInsurance from './PersonalDetail/HealthcareInsurance';
import BQDetail from './BusQuote/BQDetail';
import PQMDetail from './QuotePersonal/PQMDetail';
import QuoteTermL from './QuotePersonal/QuoteTermL';
import QuoteTravel from './QuotePersonal/QuoteTravel';
import QuotePerAc from './QuotePersonal/QuotePerAc';
import QuoteHouse from './QuotePersonal/QuoteHouse';
import QuoteHealth from './QuotePersonal/QuoteHealth';
import Footer from './Footer/Footer';
import Motor from './PersonalDetail/Motor';
import House from './PersonalDetail/House';
import Travel from './PersonalDetail/Travel';
import MotorQu from './QuotePersonal/MotorQu';
import Personal from './PersonalDetail/Personal';
import Term from './PersonalDetail/Term';
import GroupPersonal from './BusnDetail/GroupPersonal';
import GroupHealth from './BusnDetail/GroupHealth';
import Cargo from './BusnDetail/Cargo';
import Money from './BusnDetail/Money';
import Machine from './BusnDetail/Machine';
import MotorFleet from './BusnDetail/MotorFleet';
import Login from './Login/Login';
function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/BQDetail" element={<BQDetail />} />
        <Route path="/PQMDetail" element={<PQMDetail />} />
        <Route path="/PersonalServices" element={<PersonalServices />} />
        <Route path="/BusinessServices" element={<BusinessServices />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/HealthcareInsurance" element={<HealthcareInsurance />} />
        <Route path="/Motor" element={<Motor />} />
        <Route path="/House" element={<House />} />
        <Route path="/Travel" element={<Travel />} />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/MotorQu" element={<MotorQu />} />
        <Route path="/Login" element={<Login />} />
         <Route path="/Term" element={<Term />} />
         <Route path="/GroupPersonal" element={<GroupPersonal/>} />
         <Route path="/GroupHealth" element={<GroupHealth/>} />
         <Route path="/Cargo" element={<Cargo/>} />
         <Route path="/Money" element={<Money/>} />
         <Route path="/Machine" element={<Machine/>} />
         <Route path="/MotorFleet" element={<MotorFleet/>} />
         <Route path="/BuQuote" element={<BuQuote/>} />
         <Route path="/QuoteTermL" element={<QuoteTermL/>} />
         <Route path="/QuoteTravel" element={<QuoteTravel/>} />
         <Route path="/QuotePerAc" element={<QuotePerAc/>} />
         <Route path="/QuoteHouse" element={<QuoteHouse/>} />
         <Route path="/QuoteHealth" element={<QuoteHealth/>} />
      </Routes>
      <Footer />
    </div>
    
  </Router>
  );
}

export default App;

