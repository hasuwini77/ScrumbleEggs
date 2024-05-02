import ScrumNavBar from "./components/Navbar";
import ButtonComponent from "./components/Button";
import SocialMediaBar from "./components/SocialMediaBar";
import MainContent from "./components/MainContent";
import AccordeonMenu from "./components/AccordeonMenu";
import { useState } from "react";

function App() {
  const [content, setContent] = useState(null);

  return (
    <>
      <ScrumNavBar />
      <h1 className="text-3xl text-center font-bold underline">Hello world!</h1>
      <div className="flex flex-row justify-center">
        <ButtonComponent text="button1" className="px-5 py-5 ml-3 mt-3" />
        <ButtonComponent text="button2" className="px-5 py-5 ml-3 mt-3" />
      </div>
      <div className="main-content flex flex-col md:flex-row">
        <div className="accordeon w-full md:w-[300px]">
          <AccordeonMenu />
        </div>
        <div className="accordeon w-full md:min-w-[700px]">
          <MainContent />
        </div>
      </div>

      <SocialMediaBar />
    </>
  );
}

export default App;
