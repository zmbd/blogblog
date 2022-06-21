import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScreenContext } from "../context/screenContext";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { propTypes } from "../propTypes";
import CardContainerContent from "./CardContainerContent";

const CardContainer = (props: propTypes) => {
  const { post, order_key, contentsLoaded, forKey, specialLayout } = props;

  const { isSmallScreen }: any = useContext(ScreenContext);

  const dimensions = useWindowDimensions();

  return (
    <>
      {specialLayout ? (
        <Link
          to={`/article/${post.name.replaceAll(" ", "-").toLocaleLowerCase()}`}
          state={{ post: post }}
          className={`${
            isSmallScreen && specialLayout
              ? "flex flex-col mb-16"
              : "grid gap-0 grid-rows-2 md:grid-rows-1 md:grid-cols-2 xl:gap-0"
          } w-9/10`}
        >
          <CardContainerContent
            post={post}
            order_key={order_key}
            contentsLoaded={contentsLoaded}
            dimensions={dimensions}
            specialLayout={specialLayout}
          />
        </Link>
      ) : (
        <Link
          to={`/article/${post.name.replaceAll(" ", "-").toLocaleLowerCase()}`}
          state={{ post: post }}
          key={forKey}
          className="flex flex-col hover:cursor-pointer transition duration-300 rounded-sm ease-in-out w-full md:w-article-item-w-md xl:w-article-item-w-2xl lg:w-article-item-w-lg 3xl:w-article-item-w-3xl sm:h-fit items-start justify-start"
        >
          <CardContainerContent
            post={post}
            order_key={order_key}
            contentsLoaded={contentsLoaded}
            dimensions={dimensions}
            specialLayout={specialLayout}
          />
        </Link>
      )}
    </>
  );
};

export default CardContainer;
