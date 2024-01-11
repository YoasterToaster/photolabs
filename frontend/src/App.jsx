import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";
import PhotoList from "./components/PhotoList";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const sampleDataForPhotoListItem = 
    [
      {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`
      },
      {
    id: "2",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`
  },
  {
    id: "3",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`
  }
  ]
  ;

  // const photos = [...sampleDataForPhotoListItem];
  // console.log(photos);
  const arrayOfPhotos = sampleDataForPhotoListItem.map((photo, idx) => (
    <PhotoListItem key={idx} item={photo}></PhotoListItem>
  ));
  return (
    <div className="App">
      {arrayOfPhotos}
    </div>
  );
};

export default App;
