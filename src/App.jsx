import ScrumNavBar from "./components/Navbar";
import ButtonComponent from "./components/Button";
import MainContent from "./components/MainContent";
import OurTeam from "./components/OurTeam/OurTeam.jsx";
import HighlightedFeature from "./components/HighlightedFeature";
import feature1 from "./assets/images/feature1.png";
import feature2 from "./assets/images/feature2.png";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

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
      <MainContent />
      <HighlightedFeature title="Scrum Master Skills" text="While the Scrum Master needs a good set of skills. Agile Scrum, Collaboration, Adaptability, Conflict resolution, Problem solving, coaching, Project Management and leadership are to take into consideration." images={[feature1, feature2]} />
      <OurTeam />
      <Footer />
    </>
  );
}

export default App;
