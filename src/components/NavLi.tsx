import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { NavigationContext } from "../context/NavigationContext";

const NavLi = (props: any) => {
  const { isSmall, children } = props;
  const { isMenuOpened, setMenu }: any = useContext(NavigationContext);

  const handleMenu = () => {
    if (isMenuOpened) {
      setMenu(false);
      const header = document.querySelector(".header");
      header?.classList.remove("h-44");
    }
  };

  return (
    <li onClick={handleMenu} className={`${isSmall ? "" : "navigation-li"}`}>
      {children}
    </li>
  );
};

export default NavLi;
