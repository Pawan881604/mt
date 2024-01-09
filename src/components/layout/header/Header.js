import React from "react";
import "./header.css";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <>
      <div className="header">
        <div id="toggle_btn">
          <img src="/icon-21.png" />
        </div>
        <div className="nav-search">
          <input type="search" placeholder="Search here" />
          <span>
            <CiSearch />
          </span>
        </div>
        <div className="admin-nav">
          <div>
            <img src="/user-06.png" />
            <span>Admin</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
