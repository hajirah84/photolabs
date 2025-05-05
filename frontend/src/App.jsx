// src/App.jsx
import React from 'react';
import './App.scss';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    setPhotoSelected,
    closeModal,
    updateToFavPhotoIds,
    fetchPhotosByTopic
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photos}
        topics={state.topics}
        likedPhotos={state.likedPhotoIds}
        toggleLike={updateToFavPhotoIds}
        onPhotoClick={setPhotoSelected}
        onTopicClick={fetchPhotosByTopic}
      />

    {state.selectedPhoto && (
        <PhotoDetailsModal
          state={state}
          closeModal={onClosePhotoDetailsModal} 
          toggleFavorite={updateToFavPhotoIds} 
          setSelectedPhoto={onPhotoSelect} 
        />
      )}
    </div>
  );
};

export default App;























