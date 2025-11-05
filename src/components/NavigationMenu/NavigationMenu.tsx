import React, { useContext } from "react";
import {
  NavigationMenuAction,
  NavigationMenuContainer,
} from "./NavigationMenu.styles";
import { AppContext } from "../AppWrapper/AppWrapper";
import { RxFontFamily } from "react-icons/rx";
import { RiEnglishInput } from "react-icons/ri";

const NavigationMenu = () => {
  const { currentLanguage, theme } = useContext(AppContext);
  const languageIcon =
    currentLanguage === "en" ? (
      <RxFontFamily color={theme.textColor} size={"1.2vw"} />
    ) : (
      <RiEnglishInput color={theme.textColor} size={"1.2vw"} />
    );
  return (
    <NavigationMenuContainer>
      <NavigationMenuAction>{languageIcon}</NavigationMenuAction>
    </NavigationMenuContainer>
  );
};

export default NavigationMenu;
