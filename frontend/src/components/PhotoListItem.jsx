import React, { useCallback, useState } from 'react';
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {id, location, urls, user} = props.photoDetails;

  return (
    <div className="photo-list__item">
      <PhotoFavButton toggleFavourite={props.toggleFavourite} photoId={id}/>
      <div>
        <img className="photo-list__image" src={urls.regular} alt="" />
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt="" />
        <div className="photo-list__user-info">
          <div>{user.username}</div>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
