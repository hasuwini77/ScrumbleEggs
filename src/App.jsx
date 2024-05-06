import ScrumNavBar from "./components/Navbar";
import ButtonComponent from "./components/Button";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import HighlightedFeature from "./components/HighlightedFeature";
import feature1 from "./assets/images/feature-1.webp";
import feature2 from "./assets/images/feature-2.webp";

function App() {
  return (
    <>
      <ScrumNavBar />
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
      <Footer />
    </>
  );
}

export default App;
