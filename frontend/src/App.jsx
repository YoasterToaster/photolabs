import React, { useCallback, useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import topics from "mocks/topics";
import photos from "mocks/photos";
import useApplicationData from "./hooks/useApplicationData";
// import TopNavigation from "../components/TopNavigationBar";
// import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  // const [isImageClicked, setIsImageClicked] = useState(false);
  // const [photoDetails, setPhotoDetails] = useState({});
  // const [similarPhotos, setSimilarPhotos] = useState([]);

  const { state, closeModal, openModal, toggleFavourite } =
    useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        toggleFavourite={toggleFavourite}
        favourited={state.favourited}
        openModal={openModal}
      />
      {state.isImageClicked && (
        <PhotoDetailsModal
          closeModal={closeModal}
          toggleFavourite={toggleFavourite}
          photoDetails={state.photoDetails}
          similarPhotos={state.similarPhotos}
          favourited={state.favourited}
        />
      )}
    </div>
  );
};

export default App;
