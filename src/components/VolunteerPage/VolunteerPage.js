import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VolunteerPage.css';
import { getVolanteer } from '../../http/api';
import Cardes2 from '../VolunteerLast/Cardes2';
import VolunteerForm from '../VolunterModal/VolunteerModal';

function VolunteerPage() {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        // Use a library such as Axios to fetch data from the database
        async function helper() {
            const res = await getVolanteer();
            setVolunteers(res);
        }
        helper();
    }, [volunteers]);
    console.log(volunteers)
    return (
        <div style={{ backgroundColor: "#fff" }} className="cards-page">
            <div style={{ display: "flex", justifyContent: 'center', backgroundColor: "#fff", marginTop: '50px' }}>
                <VolunteerForm />
            </div>
            <div className="cards-list">
                {volunteers.map(card => (
                    <Cardes2
                        key={card.id}
                        fullName={card.fullname}
                        locationOf={card.locationof}
                        img={card.img}
                        phoneNumber={card.phonnumber}
                    />
                ))}
            </div>
        </div>
    );
}


// function Card({ fullName, locationOf, img, phoneNumber }) {
//     return (
//         <div className="card">
//             <img src={img||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeNjCWolcBL9dwuciYB5IXjB7qUPzQk6H9w&usqp=CAU"} alt={fullName} />
//             <h2>{fullName}</h2>
//             <p>Location: {locationOf}</p>
//             <p>Phone number: {phoneNumber}</p>
//         </div>
//     );
// }

export default VolunteerPage;