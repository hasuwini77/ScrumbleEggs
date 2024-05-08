import ScrumNavBar from "./components/Navbar";
import ButtonComponent from "./components/Button";
import OurTeam from './components/OurTeam/OurTeam';
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import HighlightedFeature from "./components/HighlightedFeature";
import feature1 from "./assets/images/feature1.png";
import feature2 from "./assets/images/feature2.png";

function App() {
  return (
    <>
      <ScrumNavBar />
      <Hero />
      <h1 className="text-3xl text-center font-bold underline">Hello world!</h1>
      <div className="flex flex-row justify-center">
        <ButtonComponent text="button1" className="px-5 py-5 ml-3 mt-3" />
        <ButtonComponent text="button2" className="px-5 py-5 ml-3 mt-3" />
      </div>
      <div className="main-content flex flex-col md:flex-row">
        <MainContent />
      </div>
      <HighlightedFeature
        title="Feature Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris."
        images={[feature1, feature2]}
      />
      <OurTeam />
      <Footer/>
    </>
  );
}

export default App;
