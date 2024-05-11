import { motion } from "framer-motion";
import React from "react";
import logoLight from "../../assets/logo-light.png";
import logoDark from "../../assets/logo-dark.png";

const Logo = ({ isMenuOpen }) => {
  return (
    <div className="flex justify-center items-center">
      <motion.img src={logoLight} alt="ScrumbleEggs Light Logo" className="w-7 mr-3 hidden dark:block" animate={{ rotate: isMenuOpen ? 360 : 0 }} transition={{ duration: 1.2, ease: "easeInOut" }} />
      <motion.img src={logoDark} alt="ScrumbleEggs Dark Logo" className="w-7 mr-3 block dark:hidden" animate={{ rotate: isMenuOpen ? 360 : 0 }} transition={{ duration: 1.2, ease: "easeInOut" }} />
    </div>
  );
};

export default Logo;
