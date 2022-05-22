import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="font-medium">
      <li className="navigation-li">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-color-active" : undefined
          }
        >
          Home
        </NavLink>
      </li>
      <li className="navigation-li">
        <NavLink
          to={"/articles"}
          className={({ isActive }) =>
            isActive ? "text-color-active" : undefined
          }
        >
          Articles
        </NavLink>
      </li>
      <li className="navigation-li">
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-color-active" : undefined
          }
        >
          About
        </NavLink>
      </li>
      <li className="navigation-li">
        <NavLink
          to={"/contacts"}
          className={({ isActive }) =>
            isActive ? "text-color-active" : undefined
          }
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
