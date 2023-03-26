import React from 'react';
import LoginButton from '../../LogIn/LogIn';
import LogoutButton from '../../LogIn/LogOut';
import './HeroSection.css'
const HeroSection = () => {
  return (
    <div className="hero-section">
        <div className="overlay"></div>
      <div className="hero-content">
        <h1> مَنْ فَطَّرَ صَائِمًا كَانَ لَهُ مِثْلُ أَجْرِهِ، غَيْرَ أَنَّهُ لَا يَنْقُصُ مِنْ أَجْرِ الصَّائِمِ شَيْئًا</h1>
        <p >Be the cause of doing good.</p>
        <LoginButton/>
        <LogoutButton/>
      </div>
    </div>
  );
};

export default HeroSection;