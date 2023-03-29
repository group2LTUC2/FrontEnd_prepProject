import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Cards from "./CardDonation";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import ModalForm from '../Modal/Modal'
import "./CardDonation.css"

function Donations() {
    const [donationArr, setDonationArr] = useState([]);//store data that come from database
    const { user } = useAuth0();
    const [backImg, setBackImg] = useState("https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=vrMzS4pY_QjiDtCzpVE3ClKqbU636fb4CKH0nlsduC4=");
    const sendReq = async () => {
        const serverURL = `http://localhost:3002/donations`;
        const response = await fetch(serverURL);
        const data = await response.json();
        // console.log(data)
        setDonationArr(data);
    }
    // const autherization = async () => {
    //     const obj = {
    //         email: user.email,
    //         img: user.picture,
    //         username: user.name
    //     }
    //     console.log(user)
    //     const serverURL = `http://localhost:3003`;
    //     const response = await axios.post(`${serverURL}/user`, obj);
    // }
    const backGroundImage = () => {
        donationArr.map((item) => {
            // console.log("item", item)
            if (item.item == "water") {
                setBackImg("https://t3.ftcdn.net/jpg/04/34/76/28/360_F_434762801_U3oJ77UPQbiyl1ifp4PCuuQ7fnSva91v.jpg");
            }
            else {
                setBackImg("https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=vrMzS4pY_QjiDtCzpVE3ClKqbU636fb4CKH0nlsduC4=");
            }
        })
    }
    useEffect(() => {
        sendReq();
        // autherization();
        backGroundImage();
    }, [donationArr])
    return (
        <div>

            <div style={{ display: "flex", justifyContent: 'center', marginTop: "40px" }}><ModalForm /></div>
            <div className="mainDiv" style={{ display: "flex", flex: 1, justifyContent: 'center' }}>

                <Row xs={1} md={4} className="g-4">
                    {donationArr.map((item) => {
                        return <Col  >
                            <Cards item={item} sendReq={sendReq} />
                        </Col>
                    })}
                </Row>
                {/* <OwnerModal/> */}
            </div>
        </div>
    )
}
export default Donations;