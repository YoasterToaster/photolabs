import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const {imageSource, location, username, profile } = props.item;

  return (
    <div className="photo-list__item">
      <PhotoFavButton/>
      <div>
        <img className="photo-list__image" src={imageSource} alt="" />
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt="" />
        <div className="photo-list__user-info">
          <div>{username}</div>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
