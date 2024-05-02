import { useState } from "react";
import AccordeonMenu from "../AccordeonMenu";
const MainContent = () => {
  const [content, setContent] = useState("welcome");
  const updateContent = (chapter) => {
    setContent(chapter);
  };

  const welcomeMessage = "This is the Welcome page";
  return (
    <>
      <div className="accordeon w-full md:w-[300px]">
        <AccordeonMenu updateContent={updateContent} />
      </div>
      <div className="md:p-4"> {welcomeMessage}</div>
    </>
  );
};

export default MainContent;
