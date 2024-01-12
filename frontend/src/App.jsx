import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import TopNavigation from "components/TopNavigationBar";
import "./App.scss";
import PhotoList from "./components/PhotoList";
import TopicList from "components/TopicList";

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default App;
