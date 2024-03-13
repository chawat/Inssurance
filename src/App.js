import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalQuotes from './Admin/components/personalquotes';
import BusinessQuotes from './Admin/components/businessquotes';
import Messagesus from './Admin/components/messages';
import Views from './Admin/components/views';
import Dashboard from './Admin/Dashboard';
import Navbar from './Navbar/Navbar';
import MouseCircle from './MouseCircle';
import Footer from './Footer/Footer';
import Home from './Home';
import Aboutus from './AboutUs/Aboutus';
import PersonalServices from './Pagepersonal/PersonalServices';
import BusinessServices from './PageBusn/BusinessServices';
import ContactUs from './ContactUs/Contactus';
import HealthcareInsurance from './PersonalDetail/HealthcareInsurance';
import BQDetail from './BusQuote/BQDetail';
import PQMDetail from './QuotePersonal/PQMDetail';
import QuoteTermL from './QuotePersonal/QuoteTermL';
import QuoteTravel from './QuotePersonal/QuoteTravel';
import QuotePerAc from './QuotePersonal/QuotePerAc';
import QuoteHouse from './QuotePersonal/QuoteHouse';
import QuoteHealth from './QuotePersonal/QuoteHealth';
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
import Detail from './Detail';
import DetailB from './DetailB';

function withNavbarFooter(Component) {
  return function WithNavbarFooter(props) {
    const path = window.location.pathname;
    const showNavbarAndFooter = path !== '/Login';

    return (
      <div>
        {showNavbarAndFooter && <Navbar />}
        <Component {...props} />
        {showNavbarAndFooter && <Footer />}
      </div>
    );
  };
}

function App() {
  const HomeWithNavbarFooter = withNavbarFooter(Home);
  const AboutusWithNavbarFooter = withNavbarFooter(Aboutus);
  const PersonalServicesWithNavbarFooter = withNavbarFooter(PersonalServices);
  const BusinessServicesWithNavbarFooter = withNavbarFooter(BusinessServices);
  const ContactUsWithNavbarFooter = withNavbarFooter(ContactUs);
  const HealthcareInsuranceWithNavbarFooter = withNavbarFooter(HealthcareInsurance);
  const BQDetailWithNavbarFooter = withNavbarFooter(BQDetail);
  const PQMDetailWithNavbarFooter = withNavbarFooter(PQMDetail);
  const QuoteTermLWithNavbarFooter = withNavbarFooter(QuoteTermL);
  const QuoteTravelWithNavbarFooter = withNavbarFooter(QuoteTravel);
  const QuotePerAcWithNavbarFooter = withNavbarFooter(QuotePerAc);
  const QuoteHouseWithNavbarFooter = withNavbarFooter(QuoteHouse);
  const QuoteHealthWithNavbarFooter = withNavbarFooter(QuoteHealth);
  const MotorWithNavbarFooter = withNavbarFooter(Motor);
  const HouseWithNavbarFooter = withNavbarFooter(House);
  const TravelWithNavbarFooter = withNavbarFooter(Travel);
  const MotorQuWithNavbarFooter = withNavbarFooter(MotorQu);
  const PersonalWithNavbarFooter = withNavbarFooter(Personal);
  const TermWithNavbarFooter = withNavbarFooter(Term);
  const GroupPersonalWithNavbarFooter = withNavbarFooter(GroupPersonal);
  const GroupHealthWithNavbarFooter = withNavbarFooter(GroupHealth);
  const CargoWithNavbarFooter = withNavbarFooter(Cargo);
  const MoneyWithNavbarFooter = withNavbarFooter(Money);
  const MachineWithNavbarFooter = withNavbarFooter(Machine);
  const MotorFleetWithNavbarFooter = withNavbarFooter(MotorFleet);
  const LoginWithNavbarFooter = withNavbarFooter(Login);
  const DetailWithNavbarFooter = withNavbarFooter(Detail);
  const DetailBWithNavbarFooter = withNavbarFooter(DetailB);

  return (
    <Router>
      <div>
        <MouseCircle />
        <Routes>
          <Route path="/" element={<HomeWithNavbarFooter />} />
          <Route path="/aboutus" element={<AboutusWithNavbarFooter />} />
          <Route path="/BQDetail" element={<BQDetailWithNavbarFooter />} />
          <Route path="/PQMDetail" element={<PQMDetailWithNavbarFooter />} />
          <Route path="/PersonalServices" element={<PersonalServicesWithNavbarFooter />} />
          <Route path="/BusinessServices" element={<BusinessServicesWithNavbarFooter />} />
          <Route path="/contactus" element={<ContactUsWithNavbarFooter />} />
          <Route path="/HealthcareInsurance" element={<HealthcareInsuranceWithNavbarFooter />} />
          <Route path="/Motor" element={<MotorWithNavbarFooter />} />
          <Route path="/House" element={<HouseWithNavbarFooter />} />
          <Route path="/Travel" element={<TravelWithNavbarFooter />} />
          <Route path="/Personal" element={<PersonalWithNavbarFooter />} />
          <Route path="/MotorQu" element={<MotorQuWithNavbarFooter />} />
          <Route path="/Login" element={<LoginWithNavbarFooter />} />
          <Route path="/Term" element={<TermWithNavbarFooter />} />
          <Route path="/GroupPersonal" element={<GroupPersonalWithNavbarFooter />} />
          <Route path="/GroupHealth" element={<GroupHealthWithNavbarFooter />} />
          <Route path="/Cargo" element={<CargoWithNavbarFooter />} />
          <Route path="/Money" element={<MoneyWithNavbarFooter />} />
          <Route path="/Machine" element={<MachineWithNavbarFooter />} />
          <Route path="/MotorFleet" element={<MotorFleetWithNavbarFooter />} />
          <Route path="/QuoteTermL" element={<QuoteTermLWithNavbarFooter />} />
          <Route path="/QuoteTravel" element={<QuoteTravelWithNavbarFooter />} />
          <Route path="/QuotePerAc" element={<QuotePerAcWithNavbarFooter />} />
          <Route path="/QuoteHouse" element={<QuoteHouseWithNavbarFooter />} />
          <Route path="/QuoteHealth" element={<QuoteHealthWithNavbarFooter />} />
          <Route path="/Detail" element={<DetailWithNavbarFooter />} />
          <Route path="/DetailB" element={<DetailBWithNavbarFooter />} />
          <Route path="/admin/dashboard/" element={<Dashboard />} />
          <Route path="/dashboard/quotes/personal" element={<PersonalQuotes/>} />
          <Route path="/dashboard/quotes/business" element={<BusinessQuotes/>} />
          <Route path="/dashboard/messages" element={<Messagesus/>} />
          <Route path="/dashboard/views" element={<Views/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;