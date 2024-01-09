import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import "./pageheader.css";

const PageHeader = ({title,subTitle}) => {
  return (
    <>
      <div className="page-header">
        <div className="page-header-row">
          <div className="page-header-col-md">
            <h3 className="page-header-page-title">{title}</h3>
          </div>
          <div className="page-header-col-md">
            <ul className="breadcrumb">
              <li>
                <NavLink to={"/"}>
                 <span> <IoMdHome /></span>
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"#"}>{title}</NavLink>
              </li>
              {subTitle?(

<>
<li>
                <NavLink to={"#"}>{subTitle}</NavLink>
              </li></>
              ):''}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
