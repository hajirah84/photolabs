import { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  photos: [],
  topics: [],
  likedPhotoIds: [],
  selectedPhoto: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PHOTOS':
      return { ...state, photos: action.payload };
    case 'SET_TOPICS':
      return { ...state, topics: action.payload };
    case 'SET_SELECTED_PHOTO':
      return { ...state, selectedPhoto: action.payload };
    case 'CLOSE_MODAL':
      return { ...state, selectedPhoto: null };
    case 'TOGGLE_FAV_PHOTO':
      const alreadyLiked = state.likedPhotoIds.includes(action.payload);
      return {
        ...state,
        likedPhotoIds: alreadyLiked
          ? state.likedPhotoIds.filter(id => id !== action.payload)
          : [...state.likedPhotoIds, action.payload]
      };
    default:
      return state;
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch data on initial render
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/photos'),
      axios.get('http://localhost:8001/api/topics')
    ])
      .then(([photosRes, topicsRes]) => {
        dispatch({ type: 'SET_PHOTOS', payload: photosRes.data });
        dispatch({ type: 'SET_TOPICS', payload: topicsRes.data });
      })
      .catch((error) => console.error("API fetch error:", error));
  }, []);

  const setPhotoSelected = (photo) =>
    dispatch({ type: 'SET_SELECTED_PHOTO', payload: photo });

  const closeModal = () =>
    dispatch({ type: 'CLOSE_MODAL' });

  const updateToFavPhotoIds = (photoId) =>
    dispatch({ type: 'TOGGLE_FAV_PHOTO', payload: photoId });

  return {
    state,
    setPhotoSelected,
    closeModal,
    updateToFavPhotoIds
  };
};

export default useApplicationData;


