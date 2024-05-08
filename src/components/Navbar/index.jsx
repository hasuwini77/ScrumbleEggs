import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import Logo from "../Logo";
import ToggleSwitchButton from "../ToggleSwitchButton";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";

export default function ScrumNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        {/* Below is the Desktop Navbar  */}
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
            <ToggleSwitchButton />
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      {/* Below is the Mobile Navbar  */}
      <NavbarMenu className="sm:hidden flex flex-col justify-center items-center">
        <NavbarItem className="mb-3">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link color="foreground" href="#" className={`${styles.menuItems} h-16 w-40 px-3 flex items-center justify-center border border-foreground rounded-lg`}>
              <span className={styles.menuLinks}> Learn Scrum </span>
            </Link>
          </motion.div>
        </NavbarItem>
        <NavbarMenuItem className="mb-3">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link color="foreground" href="#" className={`${styles.menuItems} h-16 w-40  px-3 flex items-center justify-center border border-foreground rounded-lg`}>
              <span className={styles.menuLinks}> Our Team </span>
            </Link>
          </motion.div>
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-3">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link color="foreground" href="#" className={`${styles.menuItems} h-16  w-40 px-3 flex items-center justify-center border border-foreground rounded-lg`}>
              <span className={styles.menuLinks}> Dive In</span>
            </Link>
          </motion.div>
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-3">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link color="foreground" href="#" className={`${styles.menuItems} h-16 w-40 px-3 flex items-center justify-center border border-foreground rounded-lg`}>
              <span className={styles.menuLinks}> Contact Us </span>
            </Link>
          </motion.div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
