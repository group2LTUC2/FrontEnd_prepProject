import React from 'react';
import './HeroSection.css'
const HeroSection = () => {
  return (
    <div className="hero-section">
        <div className="overlay"></div>
      <div className="hero-content">
        <h1> مَنْ فَطَّرَ صَائِمًا كَانَ لَهُ مِثْلُ أَجْرِهِ، غَيْرَ أَنَّهُ لَا يَنْقُصُ مِنْ أَجْرِ الصَّائِمِ شَيْئًا</h1>
        <p >Be the cause of doing good.</p>
        <button onClick={() => { alert("soon") }} className="hero-button">Donate now  🌎 ❤️</button>
      </div>
    </div>
  );
};

export default HeroSection;