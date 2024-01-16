import React, { useCallback, useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import useApplicationData from "./hooks/useApplicationData";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const App = () => {

  const { state, closeModal, openModal, toggleFavourite, toggleTopic } =
    useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        toggleFavourite={toggleFavourite}
        favourited={state.favourited}
        openModal={openModal}
        toggleTopic={toggleTopic}
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
