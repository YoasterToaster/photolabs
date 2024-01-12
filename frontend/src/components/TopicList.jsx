import React from "react";
import TopicListItem from "./TopicListItem";
// import topics from "mocks/topics";
import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = (props) => {
  console.log(props.topics);
  console.log(topics);
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
