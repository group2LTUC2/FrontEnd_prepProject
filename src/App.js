import './App.css';
import Header from './components/NavBar/Header'
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom'
import AboutUs from './components/About/AboutUs';
import PrayerTimesPopup from "./components/PrayerTimesPopup/PrayerTimesPopup";
import { useState } from 'react';

import LoginButton from './LogIn/LogIn'
import DonationsPage from './components/DonationPage/DonationPage';
import VolunteerPage from './components/VolunteerPage/VolunteerPage';
import Donations from './components/DonationLast/DonationLast';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
function App() {
  const [showPopup, setShowPopup] = useState(true);

  function handelShow(temp){
    setShowPopup(temp)
  }

  return (
    <>
      {/* {showPopup && <PrayerTimesPopup handelShow={handelShow} />} */}
      <div style={{backgroundColor:"#fff"}} >
        <header>
          <Header />
        </header>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/about' element={<AboutUs />} ></Route>
          <Route path='/donations' element={<Donations/>} ></Route>
          <Route path='/volunteer' element={<VolunteerPage/>} ></Route>
        </Routes>
        <Footer/>
      </div>

    </>
  );
}

export default App;
