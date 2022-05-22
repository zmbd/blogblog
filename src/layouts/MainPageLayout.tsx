import React from "react";

import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const MainPageLayout = (props: any) => {
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 40) setScrolling(false);
      else if (window.scrollY > 500) setScrolling(true);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center cursor-default font-sans">
      <Header scrolling={scrolling} />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default MainPageLayout;
