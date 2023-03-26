import React, { useEffect, useState } from "react";
import "./PrayerTimesPopup.css";
import axios from 'axios'
const PrayerTimesPopup = ({ handelShow }) => {
    const [maghrib, setMaghrib] = useState();
    useEffect(() => {
        axios.get('http://localhost:3003/api').then((result) => {
            setMaghrib(result.data[0]['Maghrib'])
        })


    }, [])

    return (
        <div className="popup-container">
            <div className="popup">
                <h2 className="popup-title">Prayer Times</h2>
                <p className="popup-content">
                The Maghrib prayer is raised at the exact hour : {maghrib}.
                </p>
                <button onClick={handelShow.bind(this, false)}>close</button>
            </div>
        </div>
    );
};

export default PrayerTimesPopup;