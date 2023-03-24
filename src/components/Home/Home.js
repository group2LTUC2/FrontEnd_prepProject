import DonationFormPage from "../DonationFormPage/DonationFormPage";
import HeroSection from "../HeroSection/HeroSection";
import ImageUploader from "../ImageUploader/ImageUploader";
import SadaqahStep from "../SadaqahStep/SadaqahStep";
import SliderComponent from "../Slider/SliderComponent";

function Home() {
    return (
        <>
           
            <HeroSection/>
            <div style={{ margin: '20px', display: "flex" }}>

                <DonationFormPage />
                <div style={{ marginTop: '20px' }} >
                    <SadaqahStep />

                </div>
                {/* <ImageUploader/> */}
            </div>


        </>
    );
}

export default Home;