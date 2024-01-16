import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {

  const arrayOfTopics = props.topics.map((topic, idx) => (
    <TopicListItem key={idx} topic={topic} toggleTopic={props.toggleTopic}/>
  ));
  return (
    <div className="top-nav-bar__topic-list">
      {arrayOfTopics}
    </div>
  );
};

export default TopicList;
