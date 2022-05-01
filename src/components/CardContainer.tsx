import React, { useEffect, useLayoutEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

interface propTypes {
  post: postType;
  order_key: number;
}

interface postType {
  name: string;
  writtenBy: string;
  writtenOn: string;
  authorLabel: string;
  imgUrl: string;
}

interface dynamicStyleType {
  bgColor: string;
  primaryText: string;
  secondaryText: string;
}

const CardContainer = (props: propTypes) => {
  const { post, order_key } = props;
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
        className={`${
          isEven ? "order-2" : "order-1"
        } h-full flex flex-col justify-center items-start pl-12 ${
          dynamicStyleParams.bgColor
        }`}
      >
        <span
          className={`text-sm font-normal my-2 ${dynamicStyleParams.secondaryText}`}
        >
          {post.writtenOn}, ADMIN
        </span>
        <span
          className={`font-extrabold text-5xl ${dynamicStyleParams.primaryText} leading-tight`}
        >
          {post.name}
        </span>
      </div>
    </div>
  );
};

export default CardContainer;
