import React, { useCallback, useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import topics from "mocks/topics";
import photos from "mocks/photos";
// import TopNavigation from "../components/TopNavigationBar";
// import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [photoDetails, setPhotoDetails] = useState({});

  // Pass this down the props heirarchy and use it to tell app.js which image was clicked and have all the details.  Your going to have to copy the object, so find out the correct way to do that first
  const retrievePhotoDetails = (modalPhotoDetails) => {
    const arrayOfModalPhotoDetails = Object.entries(modalPhotoDetails);
    console.log(arrayOfModalPhotoDetails);
    const tempPhotoDetails = Object.fromEntries(arrayOfModalPhotoDetails);
    const updatedPhotoDetails = {
      ...tempPhotoDetails
    }
    console.log(updatedPhotoDetails);
    setPhotoDetails(updatedPhotoDetails);
  };

  const closeModal = () => {
    setIsImageClicked(false);
  };

  const openModal = (obj) => {
    setIsImageClicked(true);
    retrievePhotoDetails(obj);
    console.log(photoDetails);
  };

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} openModal={openModal} />
      {isImageClicked && (
        <PhotoDetailsModal photos={photos} closeModal={closeModal} photoDetails={photoDetails}/>
      )}
    </div>
  );
};

export default App;
