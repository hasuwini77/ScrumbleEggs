import { useState } from "react";
import AccordeonMenu from "../AccordeonMenu";
const MainContent = () => {
  const [content, setContent] = useState("welcome");
  const handleClick = () => {
    setContent();
  };

  const welcomeMessage = "This is the Welcome page";
  return (
    <>
      <div className="accordeon w-full md:w-[300px]">
        <AccordeonMenu />
      </div>
      <div className="md:p-4"> {welcomeMessage}</div>
    </>
  );
};

export default MainContent;
