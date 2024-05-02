import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordeonMenu({ updateContent }) {
  const defaultContent = "Submenu";
  const chapter1 = "This is the Chapter 1";
  const chapter2 = "This is the Chapter 2";
  const chapter3 = "This is the Chapter 3";

  const handleClick = (e, chapter) => {
    let element = e.currentTarget;
    element.classList.toggle("active");
    updateContent(chapter);
  };

  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Chapter 1">
        <span className="cursor-pointer" onClick={() => handleClick(e, 1)}>
          {chapter1}{" "}
        </span>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Chapter 2" onPress={handleClick}>
        <span className="cursor-pointer" onClick={() => handleClick(e, 2)}>
          {chapter2}{" "}
        </span>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Chapter 3">
        <span className="cursor-pointer" onClick={() => handleClick(e, 3)}>
          {chapter3}{" "}
        </span>
      </AccordionItem>
    </Accordion>
  );
}
