import React from "react";

interface propType {
  roundValue: string;
  width?: string;
  height?: string;
  ml?: string;
  objectFit?: string;
  imgUrl?: string;
}

const CustomImage = (props: propType) => {
  return (
    <div
      className={`${props.roundValue} ${props.width} ${props.height} ${props.ml}`}
    >
      <img
        className={`w-full h-full ${props.roundValue} ${props.objectFit}`}
        src={props.imgUrl}
      />
    </div>
  );
};

CustomImage.defaultProps = {
  roundValue: "rounded-full",
  width: "w-20",
  height: "h-20",
  ml: "ml-3",
  objectFit: "object-cover",
  imgUrl:
    "https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
};

export default CustomImage;
