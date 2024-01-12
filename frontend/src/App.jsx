import React from "react";
import "./App.scss";
import HomeRoute from "./HomeRoute";
import topics from "mocks/topics";
import photos from "mocks/photos";

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos}/>
    </div>
  );
};

export default App;
