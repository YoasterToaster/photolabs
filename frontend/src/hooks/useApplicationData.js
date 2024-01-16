import { useEffect, useReducer } from "react";
import { deepCopy } from "./helpers";

export const ACTIONS = {
  CLOSE_MODAL: "CLOSE_MODAL",
  OPEN_MODAL: "OPEN_MODAL",
  UPDATE_PHOTO_DETAILS: "UPDATE_PHOTO_DETAILS",
  UPDATE_SIMILAR_PHOTOS: "UPDATE_SIMILAR_PHOTOS",
  ADD_FAV_PHOTO: "ADD_FAV_PHOTO",
  REMOVE_FAV_PHOTO: "REMOVE_FAV_PHOTO",
  GET_PHOTOS: "GET_PHOTOS",
  GET_TOPICS: "GET_TOPICS",
  TOPIC_SELECTED: "TOPIC_SELECTED"
};

const initialState = {
  isImageClicked: false,
  photoDetails: {},
  similarPhotos: [],
  favourited: [],
  photoData: [],
  topicData: [],
  topicSelected: 0
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
        ...state,
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
      return {
        ...state,
        favourited: [...state.favourited, action.payload],
      };
    case ACTIONS.GET_PHOTOS:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.GET_TOPICS:
      return {
        ...state,
        topicData: action.payload,
      };
      case ACTIONS.TOPIC_SELECTED:
        return {
          ...state,
          topicSelected: action.payload,
        };
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

    // If the current clicked item is favourited already it removes the id from the favourites array and updates the state
    if (state.favourited.includes(id)) {

      // Copies the favourited array and finds the index of the same id and removes it
      const updatedFavourited = [...state.favourited];
      const index = updatedFavourited.findIndex((element) => element === id);
      updatedFavourited.splice(index, 1);

      // Updates the state with the new value
      dispatch({ type: ACTIONS.REMOVE_FAV_PHOTO, payload: updatedFavourited });
    } else {
      // If there is no record of the photo item in the favourites array it adds it to the favourites array
      dispatch({ type: ACTIONS.ADD_FAV_PHOTO, payload: id });
    }
  };

  // Open Modal Function
  const openModal = (photoDetails) => {

    // Does a deep copy of the photo object
    const updatedPhotoDetails = deepCopy(photoDetails);

    // Modal is opened
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: true });

    // Updates the state with the new deep value 
    dispatch({
      type: ACTIONS.UPDATE_PHOTO_DETAILS,
      payload: updatedPhotoDetails,
    });

    // The same is done below but for the similar objects
    const similarPhotosObject = deepCopy(
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

  // Get Photos Function
  const getPhotos = (data) => {
    dispatch({ type: ACTIONS.GET_PHOTOS, payload: data });
  };

  // Get Topics Function
  const getTopics = (data) => {
    dispatch({ type: ACTIONS.GET_TOPICS, payload: data });
  };

  // Toggle Topic Function
  const toggleTopic = (topicSelected) => {
    dispatch({type: ACTIONS.TOPIC_SELECTED, payload: topicSelected})
  };

  // API Calls
  useEffect(() => {

    // If a topic is selected it grabs photos from the specific topic clicked
    if (state.topicSelected) {
      fetch(`http://localhost:8001/api/topics/photos/${state.topicSelected}`)
        .then((res) => res.json())
        .then((data) => {
          getPhotos([...data]);
        });

    } else {

      // Gives all photos if nothing is selected
      fetch("http://localhost:8001/api/photos")
        .then((res) => res.json())
        .then((data) => {
          getPhotos([...data]);
        });
    }
  }, [state.topicSelected]);

  // Grabs all the topics for the navigation to display
  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((data) => {
        getTopics([...data]);
      });
  }, []);

  return {
    state,
    closeModal,
    openModal,
    toggleFavourite,
    getPhotos,
    getTopics,
    toggleTopic
  };
};

export default useApplicationData;
