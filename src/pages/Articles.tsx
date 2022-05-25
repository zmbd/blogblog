import React, { useLayoutEffect } from "react";
import { propTypes } from "../propTypes";
import posts from "../dummydata";
import TopicHeading from "../components/TopicHeading";
import showContentsObserver from "../functions/IntersectionObserver";

const Articles = () => {
  useLayoutEffect(() => {
    showContentsObserver("observer-item", 0, "20%");
    showContentsObserver("article-data", 0, "15%");
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center my-48">
      <div className="h-auto w-auto text-center">
        <TopicHeading topic="Articles" />
      </div>
      <div className="grid md:grid-cols-3 my-32 md:w-9/10 items-center justify-items-center gap-y-10">
        {posts.map((post: any, i: number) => {
          return (
            <div
              key={i}
              className="flex flex-col md:w-article-item-w-md md:h-aritcle-item-h-md items-start justify-start"
            >
              <img
                className="observer-item opacity-0 object-cover w-full"
                style={{ height: "55%" }}
                src={post.imgUrl}
              />
              <div className="article-data translate-y-full opacity-0 h-full w-full flex flex-col">
                <span className="text-sm font-medium py-8 text-primary-100">
                  {post.writtenOn}, ADMIN
                </span>
                <span className="font-semibold text-3xl leading-tight pb-5 text-primary-600">
                  {post.name}
                </span>
                <div className="flex flex-row justify-start items-center w-full h-full py-3">
                  <div className="rounded-full bg-black md:w-20 md:h-20" />
                  <div className="flex flex-col items-start justify-start pl-3">
                    <span className="font-bold">{post.writtenBy}</span>
                    <span className="text-xs font-medium text-primary-100">
                      {post.authorLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
