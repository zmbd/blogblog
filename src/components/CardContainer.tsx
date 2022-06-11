import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import showContentsObserver from "../functions/IntersectionObserver";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { propTypes } from "../propTypes";

const CardContainer = (props: propTypes) => {
  const { post, order_key, contentsLoaded } = props;
  const isEven: boolean = order_key % 2 === 0 ? true : false;

  const [dynamicStyleParams, setDynamicStyleParams] = useState<any>({
    bgColor: "bg-primary-600",
    primaryText: "text-white",
    secondaryText: "text-primary-100",
  });
  const dimensions = useWindowDimensions();

  useEffect(() => {
    if (isEven) {
      setDynamicStyleParams({
        bgColor: "bg-white",
        primaryText: "text-primary-600",
        secondaryText: "text-primary-500",
      });
    }
  }, []);

  return (
    <Link
      to={`/article/${post.name.replaceAll(" ", "-").toLocaleLowerCase()}`}
      state={{ post: post }}
    >
      <div className={`grid gap-0 md:grid-cols-2`}>
        <div className={`${isEven ? "order-1" : "order-2"}`}>
          <img
            className="object-cover"
            style={{
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
            }}
            src={post.imgUrl}
          />
        </div>
        <div
          className={` ${
            isEven ? "order-2" : "order-1"
          } flex flex-col justify-center items-start h-full pl-12 ${
            dynamicStyleParams.bgColor
          }`}
        >
          <div
            className={`${
              !contentsLoaded && "observer-item"
            } flex flex-col justify-center`}
          >
            <span
              className={`text-sm font-normal my-2 ${dynamicStyleParams.secondaryText}`}
            >
              ADMIN
            </span>
            <span
              className={`font-extrabold text-5xl ${dynamicStyleParams.primaryText} leading-tight`}
            >
              {post.name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardContainer;
