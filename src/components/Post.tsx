import React from "react";

const Post = (props: any) => {
  const { post } = props;

  return (
    <div className="w-full text-primary-600 h-auto tracking-wider leading-relaxed md:px-56 lg:px-72 xl:px-96 md:py-28 text-lg text-start">
      {post}
    </div>
  );
};

export default Post;
