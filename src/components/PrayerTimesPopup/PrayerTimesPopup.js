import React, { useEffect, useState } from "react";
import "./PrayerTimesPopup.css";
import { getDonations, postDonations, getPrayerTimes } from '../../http/api';

const PrayerTimesPopup = ({ handelShow }) => {
    const [maghrib, setMaghrib] = useState();

    useEffect(() => {
        async function helper() {
            const res = await getPrayerTimes();
            setMaghrib(res.data[0]['Maghrib'])
            
        }
        helper();

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