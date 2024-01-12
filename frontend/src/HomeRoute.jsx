import React from 'react';
import TopNavigation from "./components/TopNavigationBar";
import PhotoList from "./components/PhotoList";
import "styles/HomeRoute.scss"

const HomeRoute = (props) => {
  console.log(props.topics);
  return (
  <div className="home-route">
    <TopNavigation topics={props.topics}/>
    <PhotoList photos={props.photos}/>
  </div>
  );
};

export default HomeRoute;