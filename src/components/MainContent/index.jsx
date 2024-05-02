import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import DisplayedContent from "../DisplayedContent";
const MainContent = () => {
  const [activeChapter, setActiveChapter] = useState(1);

  const handleClick = (chapter) => {
    setActiveChapter(chapter);
  };

  return (
    <>
      <div className="accordeon w-full md:w-[300px]">
        <Accordion defaultExpandedKeys={[`${activeChapter}`]} selectionMode="single">
          <AccordionItem key="1" aria-label="Accordion 1" title="Chapter 1" onClick={() => handleClick(1)}>
            <span className="cursor-pointer">Chapter 1</span>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Chapter 2" onClick={() => handleClick(2)}>
            <span className="cursor-pointer">Chapter 2</span>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Chapter 3" onClick={() => handleClick(3)}>
            <span className="cursor-pointer">Chapter 3</span>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="accordeon w-full md:min-w-[700px]">
        <DisplayedContent activeChapter={activeChapter} />
      </div>
    </>
  );
};

export default MainContent;
