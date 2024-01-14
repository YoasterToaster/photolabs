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
  const [similarPhotos, setSimilarPhotos] = useState([]);

  function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    const copy = Array.isArray(obj) ? [] : {};
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
  
    return copy;
  }

  // Pass this down the props heirarchy and use it to tell app.js which image was clicked and have all the details.  Your going to have to copy the object, so find out the correct way to do that first
  const retrievePhotoDetails = (modalPhotoDetails) => {
    // const arrayOfModalPhotoDetails = Object.entries(modalPhotoDetails);
    // console.log(arrayOfModalPhotoDetails);
    // const tempPhotoDetails = Object.fromEntries(arrayOfModalPhotoDetails);

    // const updatedPhotoDetails = {
    //   ...modalPhotoDetails
    // }
    const updatedPhotoDetails = deepCopy(modalPhotoDetails);

    // console.log(updatedPhotoDetails);
    return updatedPhotoDetails;
    // setPhotoDetails(updatedPhotoDetails);
  };

  const closeModal = () => {
    setIsImageClicked(false);
  };

  const openModal = (photoDetails) => {
    setIsImageClicked(true);
    // retrievePhotoDetails(photoDetails);
    setPhotoDetails(retrievePhotoDetails(photoDetails));
    const similarPhotosObject = retrievePhotoDetails(photoDetails.similar_photos);

    const similarPhotosArray = Object.values(similarPhotosObject);
    console.log(similarPhotosArray);
    console.log(photos);
    setSimilarPhotos(similarPhotosArray);
  };

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} openModal={openModal} />
      {isImageClicked && (
        <PhotoDetailsModal closeModal={closeModal} photoDetails={photoDetails} similarPhotos={similarPhotos}/>
      )}
    </div>
  );
};

export default App;