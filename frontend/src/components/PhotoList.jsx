import React, { useCallback, useState } from 'react';
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";

const PhotoList = (props) => {
  const {favourited, setFavourited} = props;
  const arrayOfPhotos = props.photos.map((photo, idx) => {
    favourited.push(idx);
    return <PhotoListItem key={idx} photoDetails={photo} favourited={props.favourited} setFavourited={props.setFavourited} />
});
  console.log(props.favourited);
  return <ul className="photo-list">{arrayOfPhotos}</ul>;
};

export default PhotoList;