import React, { useState } from 'react';
import './DonationFormPage.css';

function DonationFormPage() {
  const [donorName, setDonorName] = useState('');
  const [donationAmount, setDonationAmount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const[ formData, setFormData]=useState();

  function handleImageSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryData = event.target.result;
      setFormData({ ...formData, image: binaryData });
    };
    reader.readAsBinaryString(file);
    
  }

function handleFormSubmit() {
    console.log(formData)
  }

  return (
    <div className="card">
  <div className="card-header">
    <h2>Make a Donation</h2>
  </div>
  <div className="card-body">
    <div className="steps">
      <div className="step">
        <div className="number">1</div>
        <div>Fill out the form</div>
      </div>
      <div className="step">
        <div className="number">2</div>
        <div>Review and confirm</div>
      </div>
      <div className="step">
        <div className="number">3</div>
        <div>Complete your donation</div>
      </div>
    </div>
    <form>
      <div className="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" required/>
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" required/>
      </div>
      <div className="form-group">
        <label htmlFor="item">Item:</label>
        <input type="text" id="item" name="item" required/>
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantity of Item:</label>
        <input type="number" id="quantity" name="quantity" required/>
      </div>
      <div className="form-group">
        <label htmlFor="location">Location of Item:</label>
        <input type="text" id="location" name="location" required/>
      </div>
      <div className="form-group">
      
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" required onChange={handleImageSelect}/>
      </div>
      <button type="submit" className="btn" onClick={handleFormSubmit}>Donate</button>
    </form>
  </div>
</div>

  );
}

export default DonationFormPage;