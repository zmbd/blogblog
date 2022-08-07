import React, { useEffect } from "react";
import "../post.css";

const Post = (props: any) => {
  const { post } = props;

  useEffect(() => {
    const element = document.getElementById("post");
    const text = post;

    element && (element.innerHTML = text);
  }, []);

  return (
    <div className="w-full text-primary-600 px-5 h-auto tracking-wider leading-relaxed md:px-p-20 text-post-default 2xl:text-post-2xl py-28">
      <p id="post"></p>
    </div>
  );
};

export default Post;
