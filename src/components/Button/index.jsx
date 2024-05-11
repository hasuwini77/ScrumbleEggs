import React from "react";
import { Button } from "@nextui-org/react";

export default function ButtonComponent({ text, className, href }) {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button color="primary" variant="shadow" className={className} onClick={handleClick}>
      {text}
    </Button>
  );
}
