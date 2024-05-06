import React, { useState, useEffect } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../../assets/MoonIcon";
import { SunIcon } from "../../assets/SunIcon";

export default function ToggleSwitchButton() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  // We are creating a useEffect here in order to check if the dark mode is on or not, we are "listening" for the isDarkMode value, this way we can toggle between both themes, light and dark in this manner.
  useEffect(() => {
    const mainElement = document.querySelector("main");
    if (isDarkMode) {
      mainElement.classList.add("dark");
    } else {
      mainElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Switch onClick={toggleTheme} defaultSelected size="lg" color="secondary" thumbIcon={({ isSelected, className }) => (isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />)}>
      Dark mode
    </Switch>
  );
}
