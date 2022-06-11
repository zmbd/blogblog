import React, { useContext, useEffect } from "react";

import { useLayoutEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import CustomImage from "../components/CustomImage";
// import posts from "../dummydata";
import useWindowDimensions from "../hooks/useWindowDimensions";

import "../App.css";
import { Link } from "react-router-dom";
import showContentsObserver from "../functions/IntersectionObserver";
import featuredArticles from "../functions/featuredArticles";
import { featuredArticlesType, postType } from "../propTypes";
import { PostsContext } from "../context/PostsContext";

const Home = () => {
  const [firstPageMarginBottom, setFirstPageMarginBottom] = useState<number>(0);
  const { posts, setPosts }: any = useContext(PostsContext);

  const dimensions = useWindowDimensions();

  useLayoutEffect(() => {
    showContentsObserver("observer-item", 0.0, "-10%");
  });

  useLayoutEffect(() => scrollTo({ top: 0 }), []);

  useLayoutEffect(() => {
    const firstPage = document.getElementById("first-page");
    const bottom = firstPage?.getBoundingClientRect().bottom || 0;
    setFirstPageMarginBottom(window.innerHeight - window.scrollY - bottom);
  }, [dimensions]);

  const handleDownArrowClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
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
        {posts &&
          featuredArticles(posts, 5).map((post: any, i: number) => {
            return <CardContainer key={i} post={post} order_key={i} />;
          })}
      </div>
      <div className="my-10 w-full">
        <Link to={"/articles"}>
          <div className="md:h-32 sm:h-24 flex items-center justify-center">
            <button className="py-5 font-semibold text-primary-200 md:text-2xl sm:text-xl hover:cursor-pointer hover:text-primary-300">
              View all articles &rarr;
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
