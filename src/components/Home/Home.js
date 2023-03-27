import Profile from "../../LogIn/Profile";
import DonationFormPage from "../DonationFormPage/DonationFormPage";
import HeroSection from "../HeroSection/HeroSection";
import ImageUploader from "../ImageUploader/ImageUploader";
import SadaqahStep from "../SadaqahStep/SadaqahStep";
import SliderComponent from "../Slider/SliderComponent";

function Home() {
    return (
        <>
            <div >

                <HeroSection />
                <div style={{ margin: '20px', display: "flex",justifyContent:"space-between",width:"80rem" }}>

                    <DonationFormPage title="Make a Donation" type="donations" />
                    <DonationFormPage title="Join us as a volunteer" type="Volunteer"/>

                    {/* <ImageUploader/> */}
                </div>
                <div style={{ marginTop: '20px' }} >
                    <SadaqahStep />
                    <Profile/>

                </div>

            </div>


        </>
    );
}

export default Home;