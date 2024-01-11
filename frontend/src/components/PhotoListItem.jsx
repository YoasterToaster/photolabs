import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

// {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   urls: {
//     full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
//     regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   },
//   user: {
//     id: "1",
//     username: "exampleuser",
//     name: "Joe Example",
//     profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//   },
// },
const PhotoListItem = (props) => {
  const {location, urls, user} = props.photoDetails;

  return (
    <div className="photo-list__item">
      <PhotoFavButton/>
      <div>
        <img className="photo-list__image" src={urls.regular} alt="" />
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt="" />
        <div className="photo-list__user-info">
          <div>{user.username}</div>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
