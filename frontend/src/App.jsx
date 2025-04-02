import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

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
        <PhotoDetailsModal onClose={() => setSelectedPhoto(null)} />
      )}
    </div>
  );
};

export default App;









