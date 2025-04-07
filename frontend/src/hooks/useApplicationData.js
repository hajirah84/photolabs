import { useReducer, useEffect } from 'react';
import photosData from '../mocks/photos';
import topicsData from '../mocks/topics';

const initialState = {
  selectedPhoto: null,
  likedPhotos: [],
  photos: [],
  topics: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PHOTOS':
      return { ...state, photos: action.photos };
    case 'SET_TOPICS':
      return { ...state, topics: action.topics };
    case 'TOGGLE_LIKE': {
      const likedPhotos = state.likedPhotos.includes(action.photoId)
        ? state.likedPhotos.filter(id => id !== action.photoId)
        : [...state.likedPhotos, action.photoId];
      return { ...state, likedPhotos };
    }
    case 'SET_SELECTED_PHOTO':
      return { ...state, selectedPhoto: action.photo };
    case 'CLOSE_MODAL':
      return { ...state, selectedPhoto: null };
    default:
      return state;
  }
}

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_PHOTOS', photos: photosData });
    dispatch({ type: 'SET_TOPICS', topics: topicsData });
  }, []);

  const onPhotoSelect = (photo) => dispatch({ type: 'SET_SELECTED_PHOTO', photo });
  const updateToFavPhotoIds = (photoId) => dispatch({ type: 'TOGGLE_LIKE', photoId });
  const onClosePhotoDetailsModal = () => dispatch({ type: 'CLOSE_MODAL' });

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
}

