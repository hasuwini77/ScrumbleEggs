import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../../assets/MoonIcon";
import { SunIcon } from "../../assets/SunIcon";

export default function ToggleSwitchButton({ isDarkMode, toggleTheme }) {
  return (
    <Switch onClick={toggleTheme} defaultSelected={isDarkMode} size="lg" color="secondary" thumbIcon={({ isSelected, className }) => (isSelected ? <MoonIcon className={className} /> : <SunIcon className={className} />)}>
      Dark mode
    </Switch>
  );
}
