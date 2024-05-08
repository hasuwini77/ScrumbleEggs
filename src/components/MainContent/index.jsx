import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import DisplayedContent from "../DisplayedContent";
import styles from "./MainContent.module.css";

const MainContent = () => {
  const [activeChapter, setActiveChapter] = useState(1);

  const handleClick = (chapter) => {
    setActiveChapter(chapter);
  };

  const handleAnchorClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 60;
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
    <div className="accordion-wrapper">
    <div className="sticky top-11 accordeon w-full md:w-[300px] px-5 mr-5">
        <Accordion defaultExpandedKeys={[`${activeChapter}`]} selectionMode="single">
          <AccordionItem key="1" aria-label="Accordion 1" title="What is Agile?" onClick={() => handleClick(1)}>
            <ul>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle1")} className={styles.anchor}>
                  History and Origins
                </a>
              </li>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle2")} className={styles.anchor}>
                  Definition of Agile
                </a>
              </li>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle3")} className={styles.anchor}>
                  Key Principles
                </a>
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Scrum Basics" onClick={() => handleClick(2)}>
            <ul>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle1")} className={styles.anchor}>
                  Overview of Scrum
                </a>
              </li>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle2")} className={styles.anchor}>
                  The Roles in Scrum
                </a>
              </li>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle3")} className={styles.anchor}>
                  Scrum Artifacts
                </a>
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Scrum Ceremonies" onClick={() => handleClick(3)}>
            <ul>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle1")} className={styles.anchor}>
                  Daily Stand-Ups
                </a>
              </li>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle2")} className={styles.anchor}>
                  Sprint Planning
                </a>
              </li>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle3")} className={styles.anchor}>
                  Sprint Review
                </a>
              </li>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle4")} className={styles.anchor}>
                  Retrospectives
                </a>
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 4" title="Implementing Scrum" onClick={() => handleClick(4)}>
            <ul>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle1")} className={styles.anchor}>
                  Getting Started
                </a>
              </li>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle2")} className={styles.anchor}>
                  Challenges & Solutions
                </a>
              </li>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle3")} className={styles.anchor}>
                  Case Studies and Examples
                </a>
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem key="5" aria-label="Accordion 5" title="Tools and Resources" onClick={() => handleClick(5)}>
            <ul>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle1")} className={styles.anchor}>
                  Overview
                </a>
              </li>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle2")} className={styles.anchor}>
                  Key Tools
                </a>
              </li>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle3")} className={styles.anchor}>
                  Advantages of Digital Tools
                </a>
              </li>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle4")} className={styles.anchor}>
                  Choosing the Right Tool
                </a>
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem key="6" aria-label="Accordion 6" title="FAQ" onClick={() => handleClick(6)}>
            <ul>
              <li className="cursor-pointer p-3 hover:bg-slate-700 hover:text-white rounded-lg">
                <a onClick={() => handleAnchorClick("subtitle1")} className={styles.anchor}>
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
      <div className="accordeon w-full md:min-w-[700px]">
        <DisplayedContent activeChapter={activeChapter} />
      </div>
      
    </>
  );
};

export default MainContent;
