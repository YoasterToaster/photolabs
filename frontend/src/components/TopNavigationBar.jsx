import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  console.log(props.favourited);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} />
      {/* If there is something favourited it will display the heart and if not it will be empty */}
      {props.favourited.length > 0 ? (
        <FavBadge isFavPhotoExist={true} />
      ) : (
        <FavBadge isFavPhotoExist={false} />
      )}
    </div>
  );
};

export default TopNavigation;
