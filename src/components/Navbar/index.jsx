import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import Logo from "../Logo";
import ToggleSwitchButton from "../ToggleSwitchButton";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";

export default function ScrumNavBar({ isDarkMode, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const smoothScroll = (target) => {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const handleMenuItemClick = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 800);
  };

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        {/* Below is the Desktop Navbar  */}
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
        <NavbarBrand>
          <Logo isMenuOpen={isMenuOpen} />
          <p className="font-bold text-inherit">Scrumble Eggs</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" onClick={() => smoothScroll("#mainContent")} className=" cursor-pointer ">
              Learn scrum
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" onClick={() => smoothScroll("#ourTeam")} className=" cursor-pointer ">
              Our Team
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" onClick={() => smoothScroll("#mainContent")} className=" cursor-pointer ">
              Dive in
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" onClick={() => smoothScroll("#ourTeam")} className=" cursor-pointer ">
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

      {/* Below is the Mobile Navbar with animation */}
      <NavbarMenu className="sm:hidden flex flex-col justify-center items-center">
        <motion.div initial={{ x: "100%" }} animate={isMenuOpen ? { x: 0 } : { x: "100%" }} transition={{ type: "spring", stiffness: 150, damping: 20 }}>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ delay: isMenuOpen ? 0.3 : 0, duration: 0.4 }}>
            <NavbarItem className="mb-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ y: [0, -4, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: 7, when: "whileHover" }}
                style={{
                  border: "1px solid var(--foreground)",
                  borderRadius: "10px",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                  transform: "rotate(360deg)",
                }}
              >
                <Link
                  color="foreground"
                  onClick={() => {
                    smoothScroll("#mainContent");
                    handleMenuItemClick();
                  }}
                  className={`${styles.menuItems}  cursor-pointer h-16 w-40 px-3 flex items-center justify-center border border-foreground rounded-lg`}
                >
                  <span className={styles.menuLinks}> Learn Scrum </span>
                </Link>
              </motion.div>
            </NavbarItem>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ delay: isMenuOpen ? 0.5 : 0, duration: 0.4 }}>
            <NavbarMenuItem className="mb-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  border: "1px solid var(--foreground)",
                  borderRadius: "10px",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                  transform: "rotate(360deg)",
                }}
              >
                <Link
                  color="foreground"
                  onClick={() => {
                    smoothScroll("#ourTeam");
                    handleMenuItemClick();
                  }}
                  className={`${styles.menuItems} cursor-pointer h-16 w-40 px-3 flex items-center justify-center border border-foreground rounded-lg`}
                >
                  <span className={styles.menuLinks}> Our Team </span>
                </Link>
              </motion.div>
            </NavbarMenuItem>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ delay: isMenuOpen ? 0.7 : 0, duration: 0.4 }}>
            <NavbarMenuItem className="mb-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  border: "1px solid var(--foreground)",
                  borderRadius: "10px",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                  transform: "rotate(360deg)",
                }}
              >
                <Link
                  color="foreground"
                  onClick={() => {
                    smoothScroll("#mainContent");
                    handleMenuItemClick();
                  }}
                  className={`${styles.menuItems}  cursor-pointer h-16 w-40 px-3 flex items-center justify-center border border-foreground rounded-lg`}
                >
                  <span className={styles.menuLinks}> Dive In </span>
                </Link>
              </motion.div>
            </NavbarMenuItem>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ delay: isMenuOpen ? 0.9 : 0, duration: 0.4 }}>
            <NavbarMenuItem className="mb-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  border: "1px solid var(--foreground)",
                  borderRadius: "10px",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                  transform: "rotate(360deg)",
                }}
              >
                <Link
                  color="foreground"
                  onClick={() => {
                    smoothScroll("#ourTeam");
                    handleMenuItemClick();
                  }}
                  className={`${styles.menuItems} cursor-pointer h-16 w-40 px-3 flex items-center justify-center border border-foreground rounded-lg`}
                >
                  <span className={styles.menuLinks}> Contact Us </span>
                </Link>
              </motion.div>
            </NavbarMenuItem>
          </motion.div>
        </motion.div>
      </NavbarMenu>
    </Navbar>
  );
}
