import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import DisplayedContent from "../DisplayedContent";
import styles from "./MainContent.module.css";
const MainContent = () => {
  const [activeChapter, setActiveChapter] = useState(1);

  const handleClick = (chapter) => {
    setActiveChapter(chapter);
  };

  return (
    <>
      <div className="accordeon w-full md:w-[300px] px-5 mr-5">
        <Accordion defaultExpandedKeys={[`${activeChapter}`]} selectionMode="single">
          <AccordionItem key="1" aria-label="Accordion 1" title="What is Agile?" onClick={() => handleClick(1)}>
            <li className="cursor-pointer p-3 hover:bg-slate-500 rounded-lg ">History and Origins</li>
            <li className="cursor-pointer p-3 hover:bg-slate-500 rounded-lg ">Definition of Agile</li>
            <li className="cursor-pointer p-3 hover:bg-slate-500 rounded-lg ">Key Principles</li>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Scrum Basics" onClick={() => handleClick(2)}>
            <li className="cursor-pointer p-3 hover:bg-slate-500 rounded-lg ">Overview of Scrum</li>
            <li className="cursor-pointer p-3 hover:bg-slate-500 rounded-lg ">The Roles in Scrum</li>
            <li className="cursor-pointer p-3 hover:bg-slate-500 rounded-lg ">Scrum Artifacts</li>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Scrum Ceremonies" onClick={() => handleClick(3)}>
            <li className="cursor-pointer p-3 hover:bg-slate-500 rounded-lg " href="#daily">
              Daily Stand-Ups
            </li>
            <li className="cursor-pointer p-3 hover:bg-slate-500 rounded-lg ">Sprint Planning</li>
            <li className="cursor-pointer p-3 hover:bg-slate-500 rounded-lg ">Sprint Review</li>
            <li className="cursor-pointer p-3 hover:bg-slate-500 rounded-lg ">Retrospectives</li>
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 4" title="Implementing Scrum" onClick={() => handleClick(4)}>
            <li className="cursor-pointer p-3 hover:bg-slate-500 rounded-lg ">Getting Started</li>
            <li className="cursor-pointer p-3 hover:bg-slate-500 rounded-lg ">Common Challenges & Solutions</li>
            <li className="cursor-pointer p-3 hover:bg-slate-500 rounded-lg ">Case Studies and Examples</li>
          </AccordionItem>
          <AccordionItem key="5" aria-label="Accordion 5" title="Tools and Resources" onClick={() => handleClick(5)}>
            <li className="cursor-pointer p-3 hover:bg-slate-500 rounded-lg ">Digital Tools</li>
            <li className="cursor-pointer p-3 hover:bg-slate-500 rounded-lg ">Books and Articles</li>
            <li className="cursor-pointer p-3 hover:bg-slate-500 rounded-lg ">Courses and Certifications</li>
          </AccordionItem>
          <AccordionItem key="6" aria-label="Accordion 6" title="FAQ" onClick={() => handleClick(6)}>
            <li className="cursor-pointer p-3 hover:bg-slate-500 rounded-lg ">Frequently Asked Questions</li>
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
