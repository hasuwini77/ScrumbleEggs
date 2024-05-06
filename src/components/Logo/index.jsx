import React from "react";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={logo} alt="ScrumbleEggs Logo" className="w-7 mr-3" />
    </div>
  );
};

export default Logo;
