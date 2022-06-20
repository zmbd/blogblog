import { calc } from "@chakra-ui/react";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ScreenContext } from "../context/screenContext";
import showContentsObserver from "../functions/IntersectionObserver";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { propTypes } from "../propTypes";

const CardContainer = (props: propTypes) => {
  const { post, order_key, contentsLoaded } = props;

  const { isSmallScreen }: any = useContext(ScreenContext);
  const isEven: boolean = order_key % 2 === 0 ? true : false;

  const [dynamicStyleParams, setDynamicStyleParams] = useState<any>({
    bgColor: "bg-primary-500",
    primaryText: "text-white",
    secondaryText: "text-primary-100",
  });
  const dimensions = useWindowDimensions();

  useEffect(() => {
    if (isEven) {
      setDynamicStyleParams({
        bgColor: "bg-white",
        primaryText: "text-primary-500",
        secondaryText: "text-primary-400",
      });
    }
  }, []);

  return (
    <Link
      to={`/article/${post.name.replaceAll(" ", "-").toLocaleLowerCase()}`}
      state={{ post: post }}
      className={`${
        isSmallScreen
          ? "flex flex-col"
          : "grid gap-0 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 xl:gap-0"
      } w-9/10`}
      style={{ height: `${dimensions.height - 64}px` }}
    >
      <div
        className={`${!isSmallScreen ? (isEven ? "order-1" : "order-2") : ""}`}
      >
        <img
          className="object-cover"
          style={{
            width: `100%`,
            height: `${
              isSmallScreen
                ? (dimensions.height / 2) * 0.9 + "px"
                : dimensions.height - 64 + "px"
            }`,
          }}
          src={post.imgUrl}
        />
      </div>
      <div
        className={` ${
          !isSmallScreen ? (isEven ? "order-2" : "order-1") : ""
        } flex flex-col justify-start w-full h-full lg:justify-center lg:items-center items-start lg:h-full pl-2 lg:pl-12 ${
          dynamicStyleParams.bgColor
        }`}
        style={{
          height: `${isSmallScreen && (dimensions.height / 2) * 0.9 + "px"}`,
        }}
      >
        <div
          className={`${
            !contentsLoaded && "observer-item"
          } flex flex-col h-full w-full justify-start items-start lg:justify-center py-3`}
        >
          <div className="flex flex-col justify-between lg:justify-center items-start w-full h-full">
            <div className="w-full h-fit flex flex-col justify-start items-start">
              <span className="font-medium text-sm xl:text-base pt-5 text-primary-100">
                NaN, ADMIN
              </span>
              <span
                className={`font-extrabold text-4xl py-4 lg:py-8 items-center lg:text-2xl xl:text-3xl leading-tight ${dynamicStyleParams.primaryText}`}
              >
                {post.name}
              </span>
            </div>
            <div className="flex flex-row justify-start w-full h-fit">
              <div className="rounded-full bg-black w-20 h-20" />
              <div className="flex flex-col items-start justify-start pl-3">
                <span className="font-bold text-lg">{post.writtenBy}</span>
                <span className=" text-base font-medium text-primary-100">
                  {post.authorLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardContainer;
