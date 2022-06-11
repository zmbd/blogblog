import React from "react";
import { topicHeadingType } from "../propTypes";

const TopicHeading = (props: topicHeadingType) => {
  const { topic, fontSize } = props;
  return (
    <span
      className={`${fontSize} text-primary-600 leading-tight font-medium m-60`}
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
