import React, { useLayoutEffect } from "react";

import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  MediumBreakpointContext,
  ScreenContext,
} from "../context/screenContext";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { AboutContext } from "../context/AboutContext";
import { PostsContext } from "../context/PostsContext";

const MainPageLayout = (props: any) => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [isSmallScreen, setSmallScreen] = useState<boolean>(false);
  const [isLowerMediumBreak, setLowerMediumBreak] = useState<boolean>(false);
  const [posts, setPosts] = useState<any>();
  const [aboutData, setAboutdata] = useState<any>();
  const [loading, setLoading] = useState(true);

  const postsCollectionRef = collection(db, "posts");
  const aboutCollectionRef = collection(db, "about");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);

      setPosts(data.docs.map((doc: any) => ({ ...doc.data() })));
    };

    const getAboutData = async () => {
      const data = await getDocs(aboutCollectionRef);

      setAboutdata(data.docs.map((doc: any) => ({ ...doc.data() })));
    };

    getPosts();
    getAboutData();
  }, []);

  const dimensions = useWindowDimensions();

  useLayoutEffect(() => {
    if (dimensions.width < 1024) setSmallScreen(true);
    else setSmallScreen(false);

    if (dimensions.width < 768) setLowerMediumBreak(true);
    else setLowerMediumBreak(false);
  }, [dimensions]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 40) setScrolling(false);
      else if (window.scrollY > 500) setScrolling(true);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScreenContext.Provider value={{ isSmallScreen }}>
      <MediumBreakpointContext.Provider value={{ isLowerMediumBreak }}>
        <div className="w-screen h-screen flex flex-col justify-start items-center cursor-default font-sans">
          <Header scrolling={scrolling} />
          <PostsContext.Provider value={{ posts, setPosts }}>
            <AboutContext.Provider value={{ aboutData }}>
              <Outlet context={{ loading, setLoading }} />
            </AboutContext.Provider>
          </PostsContext.Provider>
          <Newsletter />
          <Footer />
        </div>
      </MediumBreakpointContext.Provider>
    </ScreenContext.Provider>
  );
};

export default MainPageLayout;
