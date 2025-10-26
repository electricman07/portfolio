import React, { useContext } from "react";
import {
  AboutMeContainer,
  CallToActionButtons,
  ProfilePicture,
  SocialLink,
} from "./AboutMe.styles";
import { AppContext } from "../AppWrapper/AppWrapper";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneForwarded } from "react-icons/fi";
import Image from "next/image";
import { SOCIAL_LINKS } from "./aboutMe.utils";

const AboutMe = () => {
  const { languageTexts, theme } = useContext(AppContext)!;
  return (
    <AboutMeContainer>
      <div>
        <ProfilePicture>
          {SOCIAL_LINKS.map(({ href, icon, backgroundColor }, index) => (
            <SocialLink
              key={index}
              target="_blank"
              href={href}
              $backgroundColor={backgroundColor}
              className={`socialLink_${index}`}
            >
              {icon}
            </SocialLink>
          ))}
          <Image src="/profile-pic.jpg" alt="Profile Picture" fill />
        </ProfilePicture>
        <h1 className="name">{languageTexts.aboutMe.name}</h1>
        <h2 className="title">{languageTexts.aboutMe.title}</h2>
      </div>
      <div>
        <p className="summary">{languageTexts.aboutMe.description}</p>
        <CallToActionButtons>
          <a target="_blank" href="Resume.pdf">
            <button onClick={() => null}>
              {languageTexts.aboutMe.downloadResume}
            </button>
          </a>
          <a href="mailto:example@example.com" className="icon">
            <HiOutlineMail size={"1.5vw"} color={theme.primaryColor} />
          </a>
          <a href="tel:123-456-7890" className="icon">
            <FiPhoneForwarded size={"1.5vw"} color={theme.primaryColor} />
          </a>
        </CallToActionButtons>
      </div>
    </AboutMeContainer>
  );
};

export default AboutMe;
