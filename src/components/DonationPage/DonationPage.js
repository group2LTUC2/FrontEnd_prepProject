import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Card from './Card';
import axios from 'axios';
import { getDonations } from '../../http/api';
import './DonationPage.css'

function DonationsPage() {
    const [cards, setCards] = useState([]);
    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        // Use a library such as Axios to fetch data from the database
        async function helper() {
            const res = await getDonations();
            setCards(res);
        }
        helper();
    }, []);

    const handleDelete = (cardId) => {
        // Use a library such as Axios to send a DELETE request to the API
        // axios.delete(`/api/cards/${cardId}`)
        //     .then(response => {
        //         setCards(cards.filter(card => card.id !== cardId));
        //     })
        //     .catch(error => console.log(error));
    };

    const handleUpdate = (cardId) => {
        // Navigate to the update page for the card
        // You may need to use a library such as React Router for this
    };

    const handleTake = (cardId) => {
        // Use a library such as Axios to send a PUT request to the API to "take" the card
        // You may also need to update the state of the cards array to reflect that the card has been taken
    };

    return (
        <div className="cards">
            <div style={{marginTop:"100px"}}>
                {cards.map(card => (
                    <Card
                        key={card.id}
                        fullName={card.fullName}
                        item={card.item}
                        quantity={card.quantity}
                        location={card.location}
                        img={card.img}
                        email={card.email}
                        user={user}
                        onDelete={() => handleDelete(card.id)}
                        onUpdate={() => handleUpdate(card.id)}
                        onTake={() => handleTake(card.id)}
                    />
                ))}

            </div>

        </div>
    );
}

export default DonationsPage;