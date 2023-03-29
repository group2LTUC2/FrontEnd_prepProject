import React from 'react';
import styled from 'styled-components';
import heroImage from '../../charity.jpg';
import heroImage2 from '../../charity_font_1.jpg';
import { useNavigate } from 'react-router-dom';

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(${heroImage}) no-repeat center center/cover;
  background-blend-mode: multiply;
`;

const HeroContent = styled.div`
  text-align: center;
  margin-right: 4rem;
  color: #f2f2f2;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
`;

const HeroSubtitle = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
`;

const HeroButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #4b4bff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const HeroImageContainer = styled.div`
  width: 50%;
  height: auto;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const HeroSectionWithImage = ({ img, type }) => {
  const navigate = useNavigate();
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>{type!=="donations"?"SADAQAH BOX":"Donations"}</HeroTitle>
        {type!=="donations"?<HeroSubtitle> Let's start a new happiness</HeroSubtitle>:null}
        <HeroButton style={{ backgroundColor: '#0d71bb' }} onClick={() => navigate('/donations')} to={"/dontaions"} >Start happiness</HeroButton>
      </HeroContent>
      <HeroImageContainer>
        <HeroImage src={type!=="donations"?heroImage:heroImage2} alt="Hero Image" />
      </HeroImageContainer>
    </HeroContainer>
  );
};

export default HeroSectionWithImage;