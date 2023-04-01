import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import OwnerModal from "./OwnerDonation";
import axios from 'axios';
import LoginButton from "../../LogIn/LogIn";
import TakenModal from "./TakenDonation";
import { useAuth0 } from "@auth0/auth0-react";
import "./CardDonation.css"
function Cards(props) {
    const { user } = useAuth0();
    const { isAuthenticated } = useAuth0();
    const [isOwner, setIsOwner] = useState(false);// handling Owner
    const [isTaken, setIsTaken] = useState(false);// handling taken
    const [isHovering, setIsHovering] = useState(false);// handling hover
    const [takenClicked, setTakenClicked] = useState(false)
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
        // setIsOwner(false)
    };
    const deleteHandler = async () => {
        const obj2 = {
            id: props.item.donationcard_id
        }
        const serverURl = `https://back-end-prep-project.vercel.app/donations/${obj2.id}`;
        const axiosRes = await axios.delete(serverURl);
        console.log("deleted")
        props.sendReq();
    }
    const takenClickedHandler = () => {
        setTakenClicked(true);
    }
    const ownerHandler = (e) => {
        //console.log(e.target.checked)
        setIsOwner(true)
    }
    const closeOwnerModal = () => {
        setIsOwner(false)
        setIsHovering(false)
    }
    const takenHandler = () => {
        setIsTaken(true)
    }
    const closeTakenModal = () => {
        setTakenClicked(false)
    }
    // console.log("mustafa",props.item)
    return (
        <div style={{ marginTop: "200px",marginLeft:"45px" }}>
            <Card className="cardsCss" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ width: '18rem', height: '400px', backgroundImage: `url(${props.item.item === "water" ? "https://t3.ftcdn.net/jpg/04/34/76/28/360_F_434762801_U3oJ77UPQbiyl1ifp4PCuuQ7fnSva91v.jpg" : "https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=vrMzS4pY_QjiDtCzpVE3ClKqbU636fb4CKH0nlsduC4="})` }}>
                {/* <Card.Img variant="top" src={props.item.img} /> */}
                <Card.Body className="body">
                    <Card.Title className="cardTitle">{props.item.item}</Card.Title>
                    <Card.Text className="cardText">
                        <p>Quantity: {props.item.quantity}</p>
                        <p>Location : {props.item.locationof}</p>
                    </Card.Text>
                    <div className="buttonCards">
                        {isAuthenticated ?
                            <>
                                {user.email == props.item.email ? <>
                                    <div className="singleButton">
                                        <div  >
                                            <Button className="button" variant="outline-success" onClick={ownerHandler}  >
                                                update
                                            </Button>
                                        </div>
                                        <div>
                                            <Button className="button" variant="outline-danger" onClick={deleteHandler} >
                                                Delete
                                            </Button>
                                            <OwnerModal item={props.item} isOwner={isOwner} closeOwnerModal={closeOwnerModal} sendReq={props.sendReq} />
                                        </div>
                                    </div>
                                </> :
                                    <div className="singleButtonGet">
                                        {/* <Button variant="primary" size="lg" onClick={takenClickedHandler} >
                                            Get
                                        </Button> */}
                                        <Button variant="outline-light" size="lg" onClick={takenClickedHandler}>
                                            Take donation
                                        </Button>
                                        <TakenModal sendReq={props.sendReq} takenClicked={takenClicked} item={props.item} closeTakenModal={closeTakenModal} />
                                    </div>
                                }
                            </>
                            : <>
                                {isHovering && !isAuthenticated ? <>"you are not authentiacted, please"<LoginButton /></> : ""}
                            </>}
                    </div>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}
export default Cards;