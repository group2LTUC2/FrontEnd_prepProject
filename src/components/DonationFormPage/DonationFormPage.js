import React, { useReducer, useState, useEffect } from 'react';
import './DonationFormPage.css';
import axios from 'axios';
import NewAlert from '../Alert/NewAlert';
import { postDonations, postVolanteer } from '../../http/api';
import { useAuth0 } from "@auth0/auth0-react";

const initialStateForDonations = {
    fullName: "",
    item: "",
    phonNumber: "",
    quantity: "",
    locationOf: "",
    img: "https://files.fm/u/ntagav5p2",
    email: ""
};

const initialStateForVolanteer = {
    fullName: "",
    phonnumber: "",
    locationof: "",
    img: ""
};

function reducer(state, action) {
    switch (action.type) {
        case "changeName":
            return { ...state, fullName: action.payload };
        case "changePhoneNumber":
            return { ...state, phonNumber: action.payload };
        case "changeItem":
            return { ...state, item: action.payload };
        case "changeQuantity":
            return { ...state, quantity: action.payload };
        case "changeLocation":
            return { ...state, locationOf: action.payload };
        default:
            throw new Error();
    }
}

function reducerForVolanteer(state, action) {
    switch (action.type) {
        case "changeName":
            return { ...state, fullName: action.payload };
        case "changePhoneNumber":
            return { ...state, phonnumber: action.payload };
        case "changeLocation":
            return { ...state, locationof: action.payload };
        default:
            throw new Error();
    }
}

function DonationFormPage({ title, type }) {
    const [state, dispatch] = useReducer(reducer, initialStateForDonations);
    const [stateForVolanteer, dispatchForVolanteer] = useReducer(reducerForVolanteer, initialStateForVolanteer);
    const [showAlert, setShowAlert] = useState(false);

    const { user } = useAuth0();
    useEffect(() => {
        const timer = setTimeout(() => {
            closeAlert();
        }, 2000);
        return () => clearTimeout(timer);
    }, [closeAlert]);

    const handleChange = (event, type) => {
        switch (type) {
            case "changeName": dispatch({ type: "changeName", payload: user.name });
                break;
            case "changePhoneNumber": dispatch({ type: "changePhoneNumber", payload: event.target.value });
                break;
            case "changeItem": dispatch({ type: "changeItem", payload: event.target.value });
                break;
            case "changeQuantity": dispatch({ type: "changeQuantity", payload: event.target.value });
                break;
            case "changeLocation": dispatch({ type: "changeLocation", payload: event.target.value });
                break;
        }
    };

    const handleChangeForVolanteer = (event, type) => {
        switch (type) {
            case "changeName": dispatchForVolanteer({ type: "changeName", payload: event.target.value });
                break;
            case "changePhoneNumber": dispatchForVolanteer({ type: "changePhoneNumber", payload: event.target.value });
                break;
            case "changeLocation": dispatchForVolanteer({ type: "changeLocation", payload: event.target.value });
                break;
        }
    };


    async function addDonations(event, type) {
        event.preventDefault();


        if (!user) {
            alert("plz log in");
            return;
        }


        console.log("type", type);
        if (type === "donations") {
            console.log("1", type);
            state.email = user.email;
            state.fullName = user.name || user.nickname;

            console.log("2", type);
            const res = await postDonations(state)
            console.log(res);

        }
        else {

            // stateForVolanteer.email = user.email;
            stateForVolanteer.fullName = user.email || user.nickname;
            console.log("stateForVolanteer", stateForVolanteer)
            postVolanteer(stateForVolanteer);
        }
        setShowAlert(true)
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
                        <div>Complete your {type === "donations" ? "Donation" : "Request"}</div>
                    </div>
                </div>
                <form>
                    {
                        type === "donations" ? <>

                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <input type="tel" id="phoneNumber" name="phoneNumber" required onChange={(e) => handleChange(e, "changePhoneNumber")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="item">Item:</label>
                                <input type="text" id="item" name="item" required onChange={(e) => handleChange(e, "changeItem")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantity">Quantity of Item:</label>
                                <input type="number" id="quantity" name="quantity" required onChange={(e) => handleChange(e, "changeQuantity")} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location of Item:</label>
                                <input type="text" id="location" name="location" required onChange={(e) => handleChange(e, "changeLocation")} />
                            </div>
                            {showAlert && <NewAlert message={`Thank you ${user.given_name ? user.given_name : user.nickname} for your donation!`} closeAlert={closeAlert} type="ok" />}
                            {/* <div className="form-group">

                        <label htmlFor="image">Image:</label>
                        <input type="file" id="image" name="image" accept="image/*" required onChange={handleFileSelect} />
                    </div> */}
                        </> : <>

                            <div className="form-group">
                                <label htmlFor="phoneNumberVolunteer">Phone Number:</label>
                                <input type="tel" id="phoneNumber" name="phoneNumber" required onChange={(e) => handleChangeForVolanteer(e, "changePhoneNumber")} />
                            </div>


                            <div className="form-group">
                                <label htmlFor="locationVolunteer">Location of Volunteer:</label>
                                <input type="text" id="location" name="location" required onChange={(e) => handleChangeForVolanteer(e, "changeLocation")} />
                            </div>
                            {showAlert && <NewAlert message={`Thank you ${user.given_name ? user.given_name : user.nickname} for joining us. We will contact you soon`} closeAlert={closeAlert} type="ok" />}
                        </>
                    }

                    <button type="submit" className="btn" onClick={(e) => { addDonations(e, type) }}>{type === "donations" ? "Donate" : "Join Us"}</button>
                </form>
            </div>
        </div>

    );
}

export default DonationFormPage;