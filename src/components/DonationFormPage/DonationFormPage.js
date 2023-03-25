import React, { useReducer, useState } from 'react';
import './DonationFormPage.css';
import axios from 'axios';
import NewAlert from '../Alert/NewAlert'
const initialState = {
    fullName: "",
    phoneNumber: "",
    item: "",
    quantity: "",
    location: "",
    img: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "changeName":
            return { ...state, fullName: action.payload };
        case "cahngePhoneNumber":
            return { ...state, phoneNumber: action.payload };
        case "changeItem":
            return { ...state, item: action.payload };
        case "changeQuantity":
            return { ...state, quantity: action.payload };
        case "changeLocation":
            return { ...state, location: action.payload };
        case "changeImg":
            return { ...state, img: action.payload };
        default:
            throw new Error();
    }
}

function DonationFormPage({ title, type }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [showAlert, setShowAlert] = useState(false);

    const handleChangeName = (event) => {
        dispatch({ type: "changeName", payload: event.target.value });
    };
    const handleCahngePhoneNumber = (event) => {
        dispatch({ type: "cahngePhoneNumber", payload: event.target.value });
    };
    const handleChangeItem = (event) => {
        dispatch({ type: "changeItem", payload: event.target.value });
    };
    const handleChangeQuantity = (event) => {
        dispatch({ type: "changeQuantity", payload: event.target.value });
    };
    const handleChangeLocation = (event) => {
        dispatch({ type: "changeLocation", payload: event.target.value });
    };


    function addDonations(event) {
        event.preventDefault();
        console.log(state)
        setShowAlert(true);

    }

    function closeAlert() {
        setShowAlert(false);
    }


    return (
        <div className="card">
            <div className="card-header">
                <h2>{title}</h2>
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
                        <div>Complete your {type==="donations"?"Donation":"Request"}</div>
                    </div>
                </div>
                <form>
                    {
                        type === "donations" ? <>
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name:</label>
                                <input type="text" id="fullName" name="fullName" required onChange={handleChangeName} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <input type="tel" id="phoneNumber" name="phoneNumber" required onChange={handleCahngePhoneNumber} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="item">Item:</label>
                                <input type="text" id="item" name="item" required onChange={handleChangeItem} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantity">Quantity of Item:</label>
                                <input type="number" id="quantity" name="quantity" required onChange={handleChangeQuantity} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location of Item:</label>
                                <input type="text" id="location" name="location" required onChange={handleChangeLocation} />
                            </div>
                            {showAlert && <NewAlert message="Thank you for your donation!" closeAlert={closeAlert} />}
                            {/* <div className="form-group">

                        <label htmlFor="image">Image:</label>
                        <input type="file" id="image" name="image" accept="image/*" required onChange={handleFileSelect} />
                    </div> */}
                        </> : <>
                            <div className="form-group">
                                <label htmlFor="fullNameVolunteer">Full Name:</label>
                                <input type="text" id="fullName" name="fullName" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumberVolunteer">Phone Number:</label>
                                <input type="tel" id="phoneNumber" name="phoneNumber" required />
                            </div>


                            <div className="form-group">
                                <label htmlFor="locationVolunteer">Location of Volunteer:</label>
                                <input type="text" id="location" name="location" required />
                            </div>
                            <div className="form-group">

                                <label htmlFor="imageVolunteer">Image:</label>
                                <input type="file" id="image" name="image" accept="image/*" required />
                            </div>
                        </>
                    }

                    <button type="submit" className="btn" onClick={addDonations}>{type === "donations" ? "Donate" : "Join Us"}</button>
                </form>
            </div>
        </div>

    );
}

export default DonationFormPage;