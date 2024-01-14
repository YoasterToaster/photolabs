import React, { useCallback, useState } from "react";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {

  // Functionalities that modify the state should stay in the same file
  // Check if PhotoId is already in array
  // If you have time pass top navigation and photolist as props instead of calling so that app.js is the only one that calls upon the data
  // const isFavourited = () => setFavourited(favourited === true ? false : true);

  // console.log("Hello");

  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        favourited={props.favourited}
      />
      <PhotoList photos={props.photos} toggleFavourite={props.toggleFavourite} openModal={props.openModal}/>
    </div>
  );
};

export default HomeRoute;