import React, { useCallback, useState } from 'react';
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {id, location, urls, user} = props.photoDetails;
  // console.log(props.photoDetails);
  const getPhotoDetails = () => {
    const photoDetails = {
        "id": id,
        "city": location.city,
        "country": location.country,
        "imageRegular": urls.regular,
        "imageFull": urls.full,
        "profile": user.profile,
        "username": user.username,
        ...props.photoDetails.similarPhotos
      }
      
      return photoDetails;
    }
return (
    <div className="photo-list__item">
      <PhotoFavButton toggleFavourite={props.toggleFavourite} photoID={id}/>
      <div>
        <img className="photo-list__image" src={urls.regular} alt="" onClick={() => props.openModal(props.photoDetails)}/>
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