import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { NavLink } from "react-router-dom";
const Menu = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(null);

  const subMenuToggle = (j) => {
    setActiveSubMenuIndex((prevIndex) => (prevIndex !== j ? j : null));
  };
  const MenuToggle = (i) => {
    setActiveMenuIndex(i);
  };

  const menu = [
    {
      name: "dashboard",
      icon: "/icon-1.png",
      slug: "",
    },
    {
      name: "firm creation",
      icon: "/icon-7.png",
      slug: "firmlist",
    },
    {
      name: "administration",
      icon: "/icon-4.png",
      submenu: [
        { name: "Main Group" },
        { name: "Sub Group" },
        { name: "Ledger Master" },
        { name: "Income" },
        { name: "Expense" },
        { name: "Product Group" },
        { name: "Product Master" },
        { name: "State Master" },
        { name: "City Master" },
        { name: "Vehicle Master" },
        { name: "Unit Master" },
        { name: "Rate Master" },
        { name: "Document Master" },
        { name: "Document Reg" },
        { name: "Job Head" },
        { name: "Job Info" },
        { name: "Job Entry" },
        { name: "Opening Stock" },
        { name: "Tyre Ins" },
        { name: "Tyre Scrap" },
        { name: "Purchase Master" },
      ],
    },

    {
      name: "transation",
      icon: "/icon-5.png",
      submenu: [
        { name: "LR Entry" },
        { name: "Full Truck" },
        {
          name: "Ledger Master",
          subsubmenu: [
            {
              name: "Challan Entry",
            },
            {
              name: "Billing",
            },
          ],
        },
        {
          name: "Part Truck",
          subsubmenu: [
            {
              name: "Loading Challan",
            },
            {
              name: "Unloading",
            },
            {
              name: "Cash Memo",
            },
            {
              name: "Gate Pass",
            },
            {
              name: "Outward Crossing",
            },
            {
              name: "Crossing Challan",
            },
            {
              name: "Hire Slip",
            },
            {
              name: "Summary Entry",
            },
            {
              name: "Billing",
            },
          ],
        },
        { name: "Receipt " },
        { name: "Payment " },
        { name: "Delivery " },
        { name: "POD Module " },
        {
          name: "Broker slip",
          subsubmenu: [
            {
              name: "Broker Entry",
            },
            {
              name: "Broker Billing",
            },
          ],
        },
        { name: "Stationary Inward " },
        { name: "Stationary Issue" },
        { name: "Cash Receipt" },
        { name: " Shipment Info" },
      ],
    },
    {
      name: "report",
      icon: "/icon-5.png",
      submenu: [
        { name: "LR Register " },
        {
          name: "Full Truck",
          subsubmenu: [
            { name: "Challan" },
            { name: "Billing  " },
            { name: "LR Pending" },
          ],
        },
        {
          name: "Part Truck",
          subsubmenu: [
            { name: "Loading " },
            { name: "Stock" },
            { name: "Outward" },
            { name: "Cash Memo" },
            { name: "Crossing" },
            { name: "Billing" },
            { name: "Summary" },
            { name: "Hire Slip" },
            { name: "Cash Pending" },
          ],
        },
        {
          name: "Broker Report",
          subsubmenu: [
            { name: "Entry" },
            { name: "Billing" },
            { name: "OutStanding" },
          ],
        },
        { name: "Ledger " },
        { name: "OutStanding " },
        { name: "Cash Book " },
        { name: "Bank Book " },
        { name: "Payment " },
        { name: "Receipt" },
        { name: "Costing" },
        { name: "Profit/Loss" },
      ],
    },
    {
      name: "permission",
      icon: "/icon-5.png",
      submenu: [{ name: "User " }, { name: "Role" }, { name: "permission" }],
    },
    {
      name: "log details",
      icon: "/icon-5.png",
      submenu: [{ name: "log details" }],
    },
    {
      name: "Utility",
      icon: "/icon-5.png",
    },
  ];

  return (
    <>
      <div>
        <ul className="sidebar-ul">
          <li className="menu-title">Menu</li>
          {menu &&
            menu.map((item, i) => (
              <li
                key={i}
                onClick={
                  item.submenu && item.submenu.length > 0
                    ? () => MenuToggle(i)
                    : null
                }
              >
                <NavLink
                  className={
                    item.submenu && item.submenu.length > 0 ? "set-pointer" : ""
                  }
                  to={
                    item.submenu && item.submenu.length > 0
                      ? "#"
                      : `/${item.slug}`
                  }
                >
                  <span>
                    <img src={item.icon} alt={`${item.name} icon`} />
                  </span>
                  {item.name}
                </NavLink>

                {/* //--------------------- submenu */}
                <ul
                  className={
                    activeMenuIndex === i
                      ? "active-menu deactive-menu"
                      : "deactive-menu"
                  }
                >
                  {item.submenu &&
                    item.submenu.map((subItem, j) => (
                      <li
                        key={j}
                        onClick={
                          subItem.subsubmenu && subItem.subsubmenu.length > 0
                            ? () => subMenuToggle(j)
                            : null
                        }
                      >
                        <NavLink
                          className={
                            subItem.subsubmenu && subItem.subsubmenu.length > 0
                              ? "set-pointer"
                              : ""
                          }
                          to={`/${subItem.name
                            .replace(/\s+/g, "")
                            .toLowerCase()}`}
                        >
                          {subItem.name}
                        </NavLink>
                        {/* //--------------------- subsubmenu */}
                        <ul
                          className={
                            activeSubMenuIndex === j
                              ? "active-menu deactive-menu"
                              : "deactive-menu"
                          }
                        >
                          {subItem.subsubmenu &&
                            subItem.subsubmenu.map((subsubItem, k) => (
                              <li key={k}>
                                <NavLink
                                  to={`/${subsubItem.name
                                    .replace(/\s+/g, "")
                                    .toLowerCase()}`}
                                >
                                  {subsubItem.name}
                                </NavLink>
                              </li>
                            ))}
                        </ul>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
