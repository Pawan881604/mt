import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
     <div className="header-left">
     <NavLink to={'/'}>
        <img src="/logo.png" />
        <span className="text-uppercase">TMS</span>
      </NavLink>
     </div>
    </>
  );
};

export default Logo;
