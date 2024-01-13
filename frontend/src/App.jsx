import React, { useCallback, useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import topics from "mocks/topics";
import photos from "mocks/photos";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isImageClicked, setIsImageClicked] = useState(false);

    const imageClicked = () =>{
      setIsImageClicked(true);
    }

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} imageClicked={imageClicked}/>
      {isImageClicked && <PhotoDetailsModal/>}
    </div>
  );
};

export default App;