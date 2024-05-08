import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import Logo from "../Logo";
import ToggleSwitchButton from "../ToggleSwitchButton";
import styles from "./Navbar.module.css";

export default function ScrumNavBar({ isDarkMode, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">Scrumble Eggs</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Learn scrum
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Our Team
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Dive in
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <ToggleSwitchButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarMenu className="sm:hidden flex justify-start items-center">
        <NavbarMenuItem>
          <Link href="#" className={styles.menuItems}>
            Learn Scrum
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#" className={styles.menuItems}>
            Our Team
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#" className={styles.menuItems}>
            Dive In
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#" className={styles.menuItems}>
            Contact Us
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
