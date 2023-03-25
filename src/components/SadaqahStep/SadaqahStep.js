import React from 'react';
import './SadaqahStep.css';

const SadaqahStep = () => {
  return (
    <div className="sadaqah-cards-container">
      <div className="sadaqah-card">
        <div className="sadaqah-card-header" style={{ backgroundColor: '#146C94' }}>
          <h2>Step 1</h2>
        </div>
        <div className="sadaqah-card-body">
          <h3>Choose a cause to support</h3>
          <p>Research different charities and causes to find one that aligns with your values and beliefs.</p>
        </div>
      </div>
      <div className="sadaqah-card">
        <div className="sadaqah-card-header" style={{ backgroundColor: '#19A7CE' }}>
          <h2>Step 2</h2>
        </div>
        <div className="sadaqah-card-body">
          <h3>Set a budget</h3>
          <p>Determine how much you can afford to give and set a budget for your Sadaqah donations.</p>
        </div>
      </div>
      <div className="sadaqah-card">
        <div className="sadaqah-card-header" style={{ backgroundColor: '#146C94' }}>
          <h2>Step 3</h2>
        </div>
        <div className="sadaqah-card-body">
          <h3>Make a donation</h3>
          <p>Donate to your chosen charity or cause using a secure and reputable payment method.</p>
        </div>
      </div>
      <div className="sadaqah-card">
        <div className="sadaqah-card-header" style={{ backgroundColor:  '#19A7CE' }}>
          <h2>Step 4</h2>
        </div>
        <div className="sadaqah-card-body">
          <h3>Share your good deeds</h3>
          <p>Encourage others to give by sharing your Sadaqah experience and the impact it has made.</p>
        </div>
      </div>
      
    </div>
  );
};

export default SadaqahStep;