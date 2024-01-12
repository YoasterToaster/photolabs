import React from 'react';
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = () => {
  return (
  <div className="HomeRoute">
    <TopNavigation />
    <PhotoList />
  </div>
  )
}

export default HomeRoute;