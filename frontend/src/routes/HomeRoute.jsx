import React, { useCallback, useState } from 'react';
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss"

const HomeRoute = (props) => {

  const [favourited, setFavourited] = useState([]);

  const toggleFavourite = (id) => {
    setFavouritePhoto(prev => !prev);
    setFavourited((prevFavourited) => [...prevFavourited, id]);
  };
  // Functionalities that modify the state should stay in the same file
  // Check if PhotoId is already in array
  // const isFavourited = () => setFavourited(favourited === true ? false : true);

  console.log("Hello");

  return (
  <div className="home-route">
    <TopNavigation topics={props.topics} favourited={favourited} setFavourited={setFavourited}/>
    <PhotoList photos={props.photos} toggleFavourite={toggleFavourite}/>
  </div>
  );
};

export default HomeRoute;