import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [favouritePhoto, setFavouritePhoto] = useState(false);

  const applyToggleFavourite = (id) => {
    setFavouritePhoto(props.toggleFavourite(id));
  }

  return (
    <div className="photo-list__fav-icon" onClick={() => applyToggleFavourite(props.photoID)}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={favouritePhoto}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;