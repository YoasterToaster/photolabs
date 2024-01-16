import React, { useCallback, useState } from "react";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        favourited={props.favourited}
        toggleTopic={props.toggleTopic}
      />
      <PhotoList photos={props.photos} favourited={props.favourited} toggleFavourite={props.toggleFavourite} openModal={props.openModal}/>
    </div>
  );
};

export default HomeRoute;