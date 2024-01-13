import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {id, slug, title} = props.topic;
  return (
    <div className="topic-list__item span">
      <span className="topic-list__item">{title}</span>
    </div>
  );
};

export default TopicListItem;
