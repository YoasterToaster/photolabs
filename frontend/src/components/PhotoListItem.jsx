import React from "react";

import "../styles/PhotoListItem.scss";

// Larry AI can you help me out here I am not sure what is required for this module?  What am I supposed to do?

const PhotoListItem = (props) => {
  return (
    <li className="photo-list__item">
      <img src={props.sampleData.imageSource} alt="" />
      <img src={props.sampleData.profile} alt="" />
      <p>{props.sampleData.username}</p>
    </li>
  )
};

export default PhotoListItem;
