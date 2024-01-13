import React, { useCallback, useState } from 'react';
import TopNavigation from "./components/TopNavigationBar";
import PhotoList from "./components/PhotoList";
import "styles/HomeRoute.scss"

const HomeRoute = (props) => {

  const [favourited, setFavourited] = useState([]);
  
  // const isFavourited = () => setFavourited(favourited === true ? false : true);

  

  return (
  <div className="home-route">
    <TopNavigation topics={props.topics} favourited={favourited} setFavourited={setFavourited}/>
    <PhotoList photos={props.photos} favourited={favourited} setFavourited={setFavourited}/>
  </div>
  );
};

export default HomeRoute;