import { useState } from "react";
const MainContent = () => {
  const [content, setContent] = useState("welcome");
  const handleClick = () => {};
  return (
    <>
      <div className="md:min-w-[400px] mr-3 p-4">
        THis is Sidebar
        <p className="p-4 cursor-pointer hover:bg-slate-300" onClick={handleClick}>
          Article 1
        </p>
        <p className="p-4 cursor-pointer  hover:bg-slate-300" onClick={handleClick}>
          Article 2
        </p>
      </div>
      <div className="md:p-4"> This is Welcome message dude</div>
    </>
  );
};

export default MainContent;
