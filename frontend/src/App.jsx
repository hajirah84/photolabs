// src/App.jsx
import React from 'react';
import './App.scss';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        state={state}
        toggleFavorite={updateToFavPhotoIds}
        setSelectedPhoto={onPhotoSelect}
        fetchPhotosByTopic={fetchPhotosByTopic}
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
























