import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

interface propTypes {
  scrolling?: boolean;
}

const Header = (props: propTypes) => {
  const scrolledStyles = "drop-shadow-lg h-12";
  const noscrollStyles = "drop-shadow-none h-16";
  return (
    <div
      className={`header z-10 bg-white flex justify-center items-center w-full h-16 fixed duration-150 ease-out ${
        props.scrolling ? scrolledStyles : noscrollStyles
      }`}
    >
      <div className="lg:w-nav-width-lg flex justify-between items-center h-16">
        <NavLink to={"/"}>
          <span
            className="font-extrabold text-xl hover:cursor-pointer"
            unselectable="on"
          >
            moose
          </span>
        </NavLink>
        <div className="w-fit mr-9" unselectable="on">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
