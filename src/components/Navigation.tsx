import React from "react";
import { NavLink } from "react-router-dom";
import NavLi from "./NavLi";

const Navigation = (props?: any) => {
  const { isSmall } = props;
  return (
    <ul
      className={`font-medium list-none ${
        isSmall
          ? "flex flex-col justify-start items-start"
          : "flex flex-row justify-between items-center"
      }`}
    >
      <NavLi isSmall>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-color-active" : undefined
          }
        >
          Home
        </NavLink>
      </NavLi>
      <NavLi isSmall>
        <NavLink
          to={"/articles"}
          className={({ isActive }) =>
            isActive ? "text-color-active" : undefined
          }
        >
          Articles
        </NavLink>
      </NavLi>
      <NavLi isSmall>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-color-active" : undefined
          }
        >
          About
        </NavLink>
      </NavLi>
      <NavLi isSmall>
        <NavLink
          to={"/contacts"}
          className={({ isActive }) =>
            isActive ? "text-color-active" : undefined
          }
        >
          Contacts
        </NavLink>
      </NavLi>
    </ul>
  );
};

export default Navigation;
