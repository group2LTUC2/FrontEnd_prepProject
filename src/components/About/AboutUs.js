import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './AboutUs.css';

const teamMembers = [
    {
        name: 'Mohammad Alsmadi',
        position: 'Team Leader',
        imgSrc: 'https://avatars.githubusercontent.com/u/60603704?v=4',
        socialLinks: {
            twitter: 'https://twitter.com/johnsmith',
            linkedin: 'https://www.linkedin.com/in/mohammad-al-smadi-35a0171a1/',
            facebook: 'https://www.facebook.com/'
        }
    },
    {
        name: 'Ahmad Eraqi',
        position: 'Full Stack Developer',
        imgSrc: 'https://avatars.githubusercontent.com/u/118004544?v=4',
        socialLinks: {
            twitter: 'https://twitter.com/janedoe',
            linkedin: 'https://www.linkedin.com/in/janedoe',
            facebook: 'https://www.facebook.com/'
        }
    },
    {
        name: 'Mustafa Mnasour',
        position: 'Full Stack Developer',
        imgSrc: 'https://avatars.githubusercontent.com/u/123550467?v=4',
        socialLinks: {
            twitter: 'https://twitter.com/bobjohnson',
            linkedin: 'https://www.linkedin.com/in/bobjohnson',
            facebook: 'https://www.facebook.com/'
        }
    },
    {
        name: 'Sahm Abu Hashish',
        position: 'Full Stack Developer',
        imgSrc: 'https://avatars.githubusercontent.com/u/95538239?v=4',
        socialLinks: {
            twitter: 'https://twitter.com/sarahlee',
            linkedin: 'https://www.linkedin.com/in/sarahlee',
            facebook: 'https://www.facebook.com/'
        }
    },
    {
        name: 'Toqa Bany Yassen',
        position: 'Full Stack Developer',
        imgSrc: 'https://avatars.githubusercontent.com/u/123546576?v=4',
        socialLinks: {
            twitter: 'https://twitter.com/sarahlee',
            linkedin: 'https://www.linkedin.com/in/sarahlee',
            facebook: 'https://www.facebook.com/'
        }
    }
];

const AboutUs = () => {
    const handleSocialLinkClick = url => {
        window.open(url, '_blank');
    };
 
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <p>The team behind the development of the SadaqahBox web app was a dedicated and talented group of individuals. They worked together to develop an innovative solution that addresses two significant issues during the holy month of Ramadan: food waste and hunger.

                <br /><br />Each team member brought unique skills and expertise to the project, which allowed them to work collaboratively to create a successful end product. Their combined efforts resulted in a user-friendly platform that enables people to donate food to those in need, reducing food waste and ensuring that everyone has access to nutritious meals during Ramadan.

                <br /><br />The team's dedication, hard work, and commitment to excellence were instrumental in the success of the SadaqahBox web app. Their innovative solution is an excellent example of how technology can be used to create positive change and make a real difference in people's lives.</p>
            <p><b>Mohammad Smadi </b>is an exceptional team leader with a passion for tackling social issues. He has a deep understanding of the challenges faced by communities during the holy month of Ramadan and has spearheaded the SadaqahBox project to address the issues of food waste and hunger. Under his leadership, the team has worked tirelessly to build a platform that will enable people to donate food to those in need, ensuring that everyone has access to nutritious meals during Ramadan.

                <br /><br /><b>Ahmad Eraqi</b> is a highly skilled full-stack developer with a wealth of experience in building web applications. His technical expertise and attention to detail have been invaluable in the development of the SadaqahBox platform.

                <br /><br /><b>Toqa Bany Yassen</b> is a creative and innovative software engineer who has contributed greatly to the SadaqahBox project. Her passion for using technology to solve social issues has been a driving force behind the team's success.

                <br /><br /><b>Sahm Abu Hashish</b> is a talented software developer with a passion for developing solutions that make a positive impact on society. His technical skills and dedication to the project have been instrumental in the development of the SadaqahBox platform.

                <br /><br /><b>Mustafa Mnasour</b> is a dedicated software engineer who has worked tirelessly to ensure that the SadaqahBox platform is user-friendly and accessible to all. His commitment to the project and his attention to detail have been critical in ensuring that the platform meets the needs of its users.</p>
            <h2>Our Team</h2>
            <div className="team-cards">
                {teamMembers.map(member => ( 
                    <div className="team-card" key={member.name}>
                        <div className="team-card-image">
                            <img src={member.imgSrc} alt={member.name} />
                            <div className="team-card-social-links">
                                <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebook} /></a>
                                <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                                <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                        </div>
                        <div className="team-card-content">
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
