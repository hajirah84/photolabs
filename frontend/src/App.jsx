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
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photos}
        topics={state.topics}
        likedPhotos={state.likedPhotos}
        toggleLike={updateToFavPhotoIds}
        onPhotoClick={onPhotoSelect}
      />

      {state.selectedPhoto && (
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          onClose={onClosePhotoDetailsModal}
          likedPhotos={state.likedPhotos}
          toggleLike={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;


















