import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [favouritePhoto, setFavouritePhoto] = useState(false);
  const {favourited, setFavourited } = props;
  console.log(favourited);

  const toggleFavourite = () => {
    setFavouritePhoto(prev => !prev);
    favourited.push(props.photoId);
  };
  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFavourite()}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={favouritePhoto}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;