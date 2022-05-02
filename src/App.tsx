import React, { useEffect, useLayoutEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

import posts from "./dummydata";
import CardContainer from "./components/CardContainer";
import CustomImage from "./components/CustomImage";
import useWindowDimensions from "./hooks/useWindowDimensions";

function App() {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [firstPageMarginBottom, setFirstPageMarginBottom] = useState<number>(0);

  const dimensions = useWindowDimensions();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 40) setScrolling(false);
      else if (window.scrollY > 500) setScrolling(true);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    const showContents = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };
    const observer = new IntersectionObserver(showContents, {
      rootMargin: "-10%",
      threshold: 0.0,
    });

    const items = document.querySelectorAll(".observer-item");
    items.forEach((item: any) => {
      observer.observe(item);
    });
  }, []);

  useLayoutEffect(() => {
    const firstPage = document.getElementById("first-page");
    const bottom = firstPage?.getBoundingClientRect().bottom || 0;
    setFirstPageMarginBottom(window.innerHeight - bottom);
  }, [dimensions]);

  const handleDownArrowClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center cursor-default font-sans">
      <Header scrolling={scrolling} />
      <div className="blog-name p-9">
        <span
          className="text-extrabold font-sans font-extrabold text-primary-600"
          unselectable="on"
          style={{
            fontSize: `${(dimensions.width + dimensions.height) / 10}px`,
          }}
        >
          M<span className="black-outline">oo</span>se
        </span>
      </div>
      <section className={`w-blog-mini h-fit my-9 inline-flex`}>
        <div className="leftside w-3/5 h-fit flex flex-col justify-start items-center">
          <header>
            <span className="text-3xl tracking-wide font-light leading-snug">
              Hello! I&apos;m Giller Moose, I Provide Newest News Update About
              Digital
            </span>
          </header>
          <div className="pt-7">
            <span className="text-lg">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </span>
          </div>
        </div>
        <div className="rightside w-2/5 pl-7 flex flex-col justify-start">
          <CustomImage
            roundValue="rounded-full"
            imgUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80"
          />
          <span className="font-bold text-xl py-3">Giller Moose</span>
          <span className="text-md">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </span>
        </div>
      </section>
      <div
        id="first-page"
        className="w-16 animate-bounce-slow rounded-full"
        style={{ marginBottom: `${firstPageMarginBottom}px` }}
      >
        <button
          className="w-16 h-16 bg-primary-600 text-white rounded-full flex justify-center items-center text-4xl font-extralight"
          onClick={handleDownArrowClick}
        >
          &darr;
        </button>
      </div>

      <div className="w-full h-auto flex flex-col items-center justify-center">
        {posts.map((post: any, i: number) => {
          return <CardContainer key={i} post={post} order_key={i} />;
        })}
      </div>
    </div>
  );
}

export default App;
