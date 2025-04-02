import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleLike = (photoId) => {
    setLikedPhotos((prev) =>
      prev.includes(photoId)
        ? prev.filter((id) => id !== photoId)
        : [...prev, photoId]
    );
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        likedPhotos={likedPhotos}
        toggleLike={toggleLike}
        onPhotoClick={handlePhotoClick}
      />

      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          onClose={closeModal}
          likedPhotos={likedPhotos}
          toggleLike={toggleLike}
        />
      )}
    </div>
  );
};

export default App;











