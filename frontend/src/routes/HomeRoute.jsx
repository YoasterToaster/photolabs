import React, { useCallback, useState } from "react";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const [favourited, setFavourited] = useState([]);

  const toggleFavourite = (id) => {
    if (favourited.includes(id)) {
      const updatedFavourited = [...favourited];
      const index = updatedFavourited.findIndex((element) => element === id);
      updatedFavourited.splice(index, 1);
      console.log(updatedFavourited);
      return false;
    } else {
      setFavourited((prevFavourited) => [...prevFavourited, id]);
      console.log(favourited);
      return true;
    }
  };
  // Functionalities that modify the state should stay in the same file
  // Check if PhotoId is already in array
  // const isFavourited = () => setFavourited(favourited === true ? false : true);

  console.log("Hello");

  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        favourited={favourited}
        setFavourited={setFavourited}
      />
      <PhotoList photos={props.photos} toggleFavourite={toggleFavourite} imageClicked={props.imageClicked}/>
    </div>
  );
};

export default HomeRoute;
