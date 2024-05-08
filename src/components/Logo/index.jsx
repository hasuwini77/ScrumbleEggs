import React from "react";
import logoLight from "../../assets/logo-light.png";
import logoDark from "../../assets/logo-dark.png";

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={logoLight}
        alt="ScrumbleEggs Light Logo"
        className="w-7 mr-3 hidden dark:block"
      />
      <img
        src={logoDark}
        alt="ScrumbleEggs Dark Logo"
        className="w-7 mr-3 block dark:hidden"
      />
    </div>
  );
};

export default Logo;
