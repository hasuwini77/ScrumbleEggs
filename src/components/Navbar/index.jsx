import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "../../assets/AcmeLogo";
import ToggleSwitchButton from "../ToggleSwitchButton";

export default function ScrumNavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">Scrumble Eggs</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Learn scrum
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Our Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Dive in
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ToggleSwitchButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
