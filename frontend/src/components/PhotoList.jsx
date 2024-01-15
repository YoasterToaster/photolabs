import React, { useCallback, useState } from 'react';
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";

const PhotoList = (props) => {
  // console.log(props.photos);
  // Loops through the array of photo objects to print each one out
  const arrayOfPhotos = props.photos.map((photo, idx) => {
    return <PhotoListItem key={idx} photoDetails={photo} favourited={props.favourited} toggleFavourite={props.toggleFavourite} openModal={props.openModal}/>
});
  // console.log(props.favourited);
  return <ul className="photo-list">{arrayOfPhotos}</ul>;
};

export default PhotoList;