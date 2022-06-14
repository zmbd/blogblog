import React from "react";
import { topicHeadingType } from "../propTypes";

const TopicHeading = (props: topicHeadingType) => {
  const { topic, fontSize } = props;
  return (
    <span
      className={`${fontSize} text-primary-600 leading-tight font-medium md:m-40 m-24`}
    >
      {topic}
    </span>
  );
};

TopicHeading.defaultProps = {
  topic: "Topic",
  fontSize: "text-5xl",
};

export default TopicHeading;
