import React from "react";
import "../styles/PhotoDetailsModal.scss";
import PhotoList from "components/PhotoList";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => props.closeModal()}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__top-bar">
        <div>
        <PhotoFavButton photoID={props.photoDetails.id} favourited={props.favourited} toggleFavourite={props.toggleFavourite}/>
          <img
            src={props.photoDetails.urls.full}
            alt=""
            className="photo-details-modal__image"
          />
          <div className="photo-details-modal__header">
            <div className="photo-details-modal__photographer-details">
            <img
              src={props.photoDetails.user.profile}
              alt=""
              className="photo-details-modal__photographer-profile"
            />
              <div className="photo-details-modal__photographer-info">
                <div>{props.photoDetails.user.username}</div>
                <div className="photo-details-modal__photographer-location">
                  {props.photoDetails.location.city}, 
                  {props.photoDetails.location.country}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="photo-details-modal__images">
        <PhotoList photos={props.similarPhotos} favourited={props.favourited} toggleFavourite={props.toggleFavourite}/>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
