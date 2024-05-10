import ScrumNavBar from "./components/Navbar";
import ButtonComponent from "./components/Button";
import Hero from "./components/Hero/index.jsx";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import OurTeam from "./components/OurTeam/OurTeam";
import HighlightedFeature from "./components/HighlightedFeature";
import feature1 from "./assets/images/feature1.png";
import feature2 from "./assets/images/feature2.png";
import { useState, useEffect } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const mainElement = document.querySelector("main");
    if (isDarkMode) {
      mainElement.classList.add("dark");
    } else {
      mainElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <ScrumNavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero isDarkMode={isDarkMode} />
      <div className="flex flex-row justify-center">
        <ButtonComponent text="button1" className="px-5 py-5 ml-3 mt-3" />
        <ButtonComponent text="button2" className="px-5 py-5 ml-3 mt-3" />
      </div>
      <MainContent />
      <HighlightedFeature title="Feature Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris." images={[feature1, feature2]} />
      <OurTeam />
      <Footer />
    </>
  );
}

export default App;
