import { useEffect, useReducer } from "react";
import { retrievePhotoDetails } from "./helpers";

/* insert app levels actions below */
export const ACTIONS = {
  CLOSE_MODAL: "CLOSE_MODAL",
  OPEN_MODAL: "OPEN_MODAL",
  UPDATE_PHOTO_DETAILS: "UPDATE_PHOTO_DETAILS",
  UPDATE_SIMILAR_PHOTOS: "UPDATE_SIMILAR_PHOTOS",
  ADD_FAV_PHOTO: "ADD_FAV_PHOTO",
  REMOVE_FAV_PHOTO: "REMOVE_FAV_PHOTO",
};

const initialState = {
  isImageClicked: false,
  photoDetails: {},
  similarPhotos: [],
  favourited: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state, // Return all previous changes to states except the one below
        isImageClicked: action.payload,
      };
    case ACTIONS.OPEN_MODAL:
      return {
        ...state, // Return all previous changes to states except the one below
        isImageClicked: action.payload,
      };
    case ACTIONS.UPDATE_PHOTO_DETAILS:
      return {
        ...state,
        photoDetails: action.payload,
      };
    case ACTIONS.UPDATE_SIMILAR_PHOTOS:
      return {
        ...state,
        similarPhotos: action.payload,
      };
    case ACTIONS.REMOVE_FAV_PHOTO:
      return {
        ...state,
        favourited: action.payload,
      };
    case ACTIONS.ADD_FAV_PHOTO:
      return { ...state, favourited: [...state.favourited, action.payload] };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Toggle Favourites Function

  const toggleFavourite = (id) => {
    if (state.favourited.includes(id)) {
      const updatedFavourited = [...state.favourited];
      const index = updatedFavourited.findIndex((element) => element === id);
      updatedFavourited.splice(index, 1);
      dispatch({ type: ACTIONS.REMOVE_FAV_PHOTO, payload: updatedFavourited });
    } else {
      dispatch({ type: ACTIONS.ADD_FAV_PHOTO, payload: id });
    }
  };

  // Open Modal Function
  const openModal = (photoDetails) => {
    const updatedPhotoDetails = retrievePhotoDetails(photoDetails);

    dispatch({ type: ACTIONS.OPEN_MODAL, payload: true });

    dispatch({
      type: ACTIONS.UPDATE_PHOTO_DETAILS,
      payload: updatedPhotoDetails,
    });

    const similarPhotosObject = retrievePhotoDetails(
      photoDetails.similar_photos
    );
    const similarPhotosArray = Object.values(similarPhotosObject);

    dispatch({
      type: ACTIONS.UPDATE_SIMILAR_PHOTOS,
      payload: similarPhotosArray,
    });
  };

  // Close Modal Function
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL, payload: false });
  };

  // useEffect to print states to console for debugging
  useEffect(() => console.log(state));

  return {
    state,
    closeModal,
    openModal,
    toggleFavourite,
  };
};

export default useApplicationData;
