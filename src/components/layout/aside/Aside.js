import React from "react";
import Logo from "./assets/Logo";
import Menu from "./assets/Menu";
import './aside.css'
export const Aside = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-inner">
          <aside>
            <Logo />
            <Menu />
          </aside>
        </div>
      </div>
    </>
  );
};
