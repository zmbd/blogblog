import React from "react";

const Post = (props: any) => {
  const { post } = props;

  return (
    <div className="w-full text-primary-600 px-5 h-auto tracking-wider leading-relaxed md:px-24 lg:px-32 xl:px-72 xl:text-2xl2 py-28 text-lg text-start">
      {post}
    </div>
  );
};

export default Post;
