import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [favouritePhoto, setFavouritePhoto] = useState(false);
  const {isFavourited, setFavourited } = props;

  return (
    <div className="photo-list__fav-icon" onClick={setFavourited}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={isFavourited}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;