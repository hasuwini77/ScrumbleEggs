import React from "react";
import { Button } from "@nextui-org/react";

export default function ButtonComponent({ text, className }) {
  return (
    <>
      <Button color="primary" variant="shadow" className={className}>
        {text}
      </Button>
    </>
  );
}
