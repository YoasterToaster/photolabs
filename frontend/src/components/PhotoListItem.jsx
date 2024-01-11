import React from "react";

import "../styles/PhotoListItem.scss";

// Larry AI can you help me out here I am not sure what is required for this module?  What am I supposed to do?

const PhotoListItem = (props) => {
  const { id, imageSource, location, username, profile } = props.sampleData;
  return (
    <div className="photo-list__item">
      <div>
        <img className="photo-list__image" src={imageSource} alt="" />
      </div>
      <img className="photo-list__user-profile" src={profile} alt="" />
      <div className="photo-list__user-info">
        <div>{username}</div>
        <div className="photo-list__user-location">
          {location.city}, {location.country}
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
