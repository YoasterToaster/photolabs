import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  return (
    <div className="photo-list__fav-icon" onClick={() => props.toggleFavourite(props.photoID)}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={props.favourited.includes(props.photoID)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;