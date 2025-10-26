import React, { useContext } from "react";
import { AboutMeContainer, CallToActionButtons } from "./AboutMe.styles";
import { AppContext } from "../AppWrapper/AppWrapper";

const AboutMe = () => {
  const { languageTexts } = useContext(AppContext)!;
  return (
    <AboutMeContainer>
      <div>
        <h1 className="name">{languageTexts.aboutMe.name}</h1>
        <h2 className="title">{languageTexts.aboutMe.title}</h2>
      </div>
      <div>
        <p className="summary">{languageTexts.aboutMe.description}</p>
        <CallToActionButtons>
          <a>
            <button>{languageTexts.aboutMe.downloadResume}</button>
          </a>
        </CallToActionButtons>
      </div>
    </AboutMeContainer>
  );
};

export default AboutMe;
