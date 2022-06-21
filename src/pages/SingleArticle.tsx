import React, { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import Post from "../components/Post";
import TopicHeading from "../components/TopicHeading";

const SingleArticle = () => {
  const location = useLocation();
  const { post }: any = location.state !== null && location.state; //fix type && display single post if entered via URL directly.

  useLayoutEffect(() => scrollTo({ top: 0 }), []);

  useEffect(() => {
    console.log("HELLO HELLO HELLO");

    // if (post === undefined) {

    // }
  }, []);

  return (
    <div className="w-full h-auto flex flex-col justify-start items-center">
      <TopicHeading topic="Single Article" />
      <CardContainer
        post={post}
        order_key={2}
        contentsLoaded={true}
        specialLayout={true}
      />
      <Post post={post.post} />
    </div>
  );
};

export default SingleArticle;
