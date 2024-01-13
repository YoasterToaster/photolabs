import React from "react";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  // console.log(props.topics);
  // console.log(topics);
  // topics = props.topics;
  const arrayOfTopics = props.topics.map((topic, idx) => (
    <TopicListItem key={idx} topic={topic}/>
  ));
  return (
    <div className="top-nav-bar__topic-list">
      {arrayOfTopics}
    </div>
  );
};

export default TopicList;
