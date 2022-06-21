import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { ScreenContext } from "../context/screenContext";

const CardContainerContent = (props: any) => {
  const {
    post,
    order_key,
    contentsLoaded,
    dimensions,
    specialLayout,
    isLowerMediumBreak,
  } = props;
  const [dynamicStyleParams, setDynamicStyleParams] = useState<any>({
    bgColor: "bg-primary-500",
    primaryText: "text-white",
    secondaryText: "text-primary-100",
  });

  const isEven: boolean = order_key % 2 === 0 ? true : false;

  useEffect(() => {
    if (isEven && specialLayout) {
      setDynamicStyleParams({
        bgColor: "bg-white",
        primaryText: "text-primary-500",
        secondaryText: "text-primary-400",
      });
    }
  }, []);

  return (
    <>
      <div
        className={`${
          !isLowerMediumBreak && specialLayout
            ? isEven
              ? "order-1"
              : "order-2"
            : ""
        } w-full`}
      >
        <img
          className={`object-cover w-full`}
          style={{
            height: `${
              specialLayout
                ? isLowerMediumBreak
                  ? (dimensions.height / 2) * 0.9 + "px"
                  : dimensions.height - 64 + "px"
                : (dimensions.height / 2.2) * 0.9 + "px"
            }`,
          }}
          src={post.imgUrl}
        />
      </div>

      <div
        className={`${
          specialLayout
            ? `flex flex-col justify-start w-full h-full lg:justify-center lg:items-center items-start lg:h-full pl-2 lg:pl-12 ${
                dynamicStyleParams.bgColor
              } ${!isLowerMediumBreak && isEven ? "order-2" : "order-1"}`
            : "article-data translate-y-32 opacity-0 w-full"
        } `}
        style={{
          width: `100%`,
          height: `${
            specialLayout
              ? isLowerMediumBreak
                ? (dimensions.height / 2.2) * 0.9 + "px"
                : dimensions.height - 64 + "px"
              : (dimensions.height / 2.2) * 0.8 + "px"
          }`,
        }}
      >
        <div
          className={`${
            !contentsLoaded && specialLayout && "observer-item"
          } flex flex-col h-full w-full justify-start items-start py-3`}
        >
          <div
            className={`flex flex-col ${
              specialLayout
                ? isLowerMediumBreak
                  ? "justify-between"
                  : "justify-center"
                : "justify-between"
            } w-full h-full`}
          >
            <div className="w-full h-fit flex flex-col justify-start items-start">
              <span className="font-medium text-sm xl:text-base pt-5 text-primary-100">
                NaN, ADMIN
              </span>
              <span
                className={`font-extrabold text-4xl py-4 lg:py-8 items-center md:text-3xl xl:text-3xl leading-tight ${
                  specialLayout
                    ? dynamicStyleParams.primaryText
                    : "text-primary-500"
                }`}
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
    </>
  );
};

export default CardContainerContent;
