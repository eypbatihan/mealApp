import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyle";
import coding from "../../../assets/coding.svg";
const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={coding} />
      <HeaderContainer>
        <h1>
          About Software Developer
          <span> Batıhan</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>I'm Batıhan</h2>
        <h3>
          I'm currently learning Full-Stack Development Languages.I've already
          known JS,ReactJS,ReactNative,NodeJS,MongoDB,SQL,Python,AWS Services.
        </h3>
        <h4>
          <a>Send email</a>:eypbatihan@gmail.com
        </h4>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
