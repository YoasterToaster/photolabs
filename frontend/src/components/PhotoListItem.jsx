import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <li>
      <img src={props.sampleData.imageSource} alt="" />
      <p>{props.sampleData.profile}</p>
      <p>{props.sampleData.username}</p>
    </li>
  )
};

export default PhotoListItem;
