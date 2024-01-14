import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  console.log(props.photoDetails)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => props.closeModal()}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>
      <img src={props.photoDetails.imageFull} alt="" className='photo-details-modal__image'/>
      <div className='photo-details-modal__header'>
        <img src={props.photoDetails.profile} alt="" />
        <div className='photo-details-modal__photographer-details'>
          <div className='photo-details-modal__photographer-profile'>{props.photoDetails.username}</div>
          <div className='photo-details-modal__photographer-location'>{props.photoDetails.city}, {props.photoDetails.country}</div>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;