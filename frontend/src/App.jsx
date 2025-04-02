import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; // 👈 New import
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // 👈 New state

  const toggleLike = (photoId) => {
    setLikedPhotos((prev) =>
      prev.includes(photoId)
        ? prev.filter((id) => id !== photoId)
        : [...prev, photoId]
    );
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo); // 👈 Set the clicked photo
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        likedPhotos={likedPhotos}
        toggleLike={toggleLike}
        onPhotoClick={handlePhotoClick} // 👈 Pass it down
      />

      {selectedPhoto && (
        <PhotoDetailsModal />
      )}
    </div>
  );
};

export default App;








