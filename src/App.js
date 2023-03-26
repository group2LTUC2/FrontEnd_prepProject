import './App.css';
import Header from './components/NavBar/Header'
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom'
import AboutUs from './components/About/AboutUs';
import PrayerTimesPopup from "./components/PrayerTimesPopup/PrayerTimesPopup";
import { useState } from 'react';
import Footer from './components/Footer/Footer';


function App() {
  const [showPopup, setShowPopup] = useState(true);

  function handelShow(temp){
    setShowPopup(temp)
  }

  return (
    <>
      {showPopup && <PrayerTimesPopup handelShow={handelShow} />}
      <div >
        <header>
          <Header />
        </header>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='about' element={<AboutUs />} ></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
