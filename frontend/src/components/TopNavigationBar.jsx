import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => props.toggleTopic(0)}>PhotoLabs</span>
      <TopicList topics={props.topics} toggleTopic={props.toggleTopic}/>
      {/* If there is something favourited it will display the heart and if not it will be empty */}
        <FavBadge isFavPhotoExist={props.favourited.length > 0} />
    </div>
  );
};

export default TopNavigation;
