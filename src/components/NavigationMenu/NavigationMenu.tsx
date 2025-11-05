import React, { useContext } from "react";
import {
  NavigationMenuAction,
  NavigationMenuContainer,
} from "./NavigationMenu.styles";
import { AppContext } from "../AppWrapper/AppWrapper";
import { RxFontFamily } from "react-icons/rx";
import { RiEnglishInput } from "react-icons/ri";
import { TbBulb, TbBulbOff } from "react-icons/tb";

const NavigationMenu = () => {
  const { currentLanguage, theme, toggleLanguage, themeType, toggleTheme } =
    useContext(AppContext);
  const languageIcon =
    currentLanguage === "en" ? (
      <RxFontFamily color={theme.textColor} size={"1.2vw"} />
    ) : (
      <RiEnglishInput color={theme.textColor} size={"1.2vw"} />
    );
  const themeIcon =
    themeType === "light" ? (
      <TbBulb color={theme.textColor} size={"1.2vw"} />
    ) : (
      <TbBulbOff color={theme.textColor} size={"1.2vw"} />
    );
  return (
    <NavigationMenuContainer>
      <NavigationMenuAction onClick={() => toggleLanguage()}>
        {languageIcon}
        <p className="tooltip">Change Language</p>
      </NavigationMenuAction>
      <NavigationMenuAction onClick={() => toggleTheme()}>
        {themeIcon}
        <p className="tooltip">Change Theme</p>
      </NavigationMenuAction>
    </NavigationMenuContainer>
  );
};

export default NavigationMenu;
