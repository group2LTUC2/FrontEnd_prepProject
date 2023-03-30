import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { postUser } from "../../http/api";
import Profile from "../../LogIn/Profile";
import BlogCardsPrimary from "../BlogCardsPrimary/BlogCardsPrimary";
import DonationFormPage from "../DonationFormPage/DonationFormPage";
import HeroSection from "../HeroSection/HeroSection";
import ImageUploader from "../ImageUploader/ImageUploader";
import ModalForm from "../Modal/Modal";
import SadaqahStep from "../SadaqahStep/SadaqahStep";
import SecondaryFAQs from "../SecondaryFAQs/SecondaryFAQs";
import SliderComponent from "../Slider/SliderComponent";
import { Button, Icon } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

import './Home.css'
import Footer from "../Footer/Footer";
function Home() {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        async function helper() {
            if (isAuthenticated) {
                let obj = {
                    username: user.name,
                    email: user.email,
                    img: user.picture
                }
            
                const res = await postUser(obj);
                console.log(user, res);
            }
        }
        helper();
    }, [isAuthenticated])
    return (
        <>
            <div className="Blog-div">

                <HeroSection />

                <div style={{ margin: '20px', display: "flex",backgroundColor:"#fff" }}>

                    {/* <DonationFormPage title="Make a Donation" type="donations" /> */}
                    <div style={{display:'flex',justifyContent:'space-around',flex:1,margin:"60px"}}>
                        <Button color="blue" size="massive" onClick={()=>navigate('/donations')} animated>
                            <Button.Content  visible>Donate now</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow right' />
                            </Button.Content>
                        </Button>

                        <Button  color="blue" size="massive" onClick={()=>navigate('/volunteer')} animated>
                            <Button.Content  visible>Join as a volunteer now</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow right' />
                            </Button.Content>
                        </Button>
                    </div>
                    {/* <ModalForm /> */}
                    {/* <DonationFormPage title="Join us as a volunteer" type="Volunteer" /> */}

                    {/* <ImageUploader/> */}
                </div>
                <div style={{ marginTop: '20px' }} >
                    <SadaqahStep />
                    <div  >
                        {/* <BlogCardsPrimary /> */}
                        <SecondaryFAQs />
                        {/* <BlogCardsPrimary/> */}
                    </div>
                  
                  

                </div>

            </div>


        </>
    );
}

export default Home;