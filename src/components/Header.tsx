import React, { useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavigationContext } from "../context/NavigationContext";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Navigation from "./Navigation";

interface propTypes {
  scrolling?: boolean;
}

const Header = (props: propTypes) => {
  const [isSmallScreen, setSmallScreen] = useState<boolean>(false);
  const [isMenuOpened, setMenu] = useState<boolean>(false);
  const dimensions = useWindowDimensions();

  const scrolledStyles = "drop-shadow-lg h-12";
  const noscrollStyles = "drop-shadow-none h-16";

  const handleMenu = (): void => {
    setMenu(!isMenuOpened);
    const header = document.querySelector(".header");
    if (isMenuOpened) {
      header?.classList.remove("h-44");
    } else {
      header?.classList.add("h-44");
    }
  };

  useLayoutEffect(() => {
    if (dimensions.width < 1024) setSmallScreen(true);
    else setSmallScreen(false);
  }, [dimensions]);

  return (
    <NavigationContext.Provider value={{ isMenuOpened, setMenu }}>
      <div
        className={`header z-10 flex ${
          isSmallScreen
            ? "justify-start items-start bg-black text-white"
            : "justify-center items-center bg-white text-primary-700"
        } w-full h-16 fixed duration-150 ease-out ${
          props.scrolling ? scrolledStyles : noscrollStyles
        }`}
      >
        <div
          className={`w-full px-5 sm:px-12 flex ${
            isSmallScreen
              ? "flex-col items-center justify-start"
              : "justify-center items-center"
          }`}
        >
          <div className="h-16 w-full lg:w-grid-box-lg 3xl:w-grid-box-xl inline-flex justify-between items-center">
            <NavLink to={"/"}>
              <span
                className="font-extrabold text-lg sm:text-xl hover:cursor-pointer"
                unselectable="on"
              >
                moose
              </span>
            </NavLink>
            {!isSmallScreen ? (
              <div className="mr-9 w-96" unselectable="on">
                <Navigation />
              </div>
            ) : (
              <div
                onClick={handleMenu}
                className="w-fit font-semibold hover:cursor-pointer"
              >
                <span unselectable="on">MENU</span>
              </div>
            )}
          </div>
          {isSmallScreen && (
            <div className={`w-full ${isMenuOpened ? "flex" : "hidden"}`}>
              <Navigation isSmall={isSmallScreen} />
            </div>
          )}
        </div>
      </div>
    </NavigationContext.Provider>
  );
};

export default Header;
