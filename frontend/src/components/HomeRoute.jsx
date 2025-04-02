import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({
    photos,
    topics,
    likedPhotos,
    toggleLike,
    onPhotoClick
  }) => {
    const isFavPhotoExist = likedPhotos.length > 0;
  
    return (
      <div className="home-route">
        <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist} />
        <PhotoList
          photos={photos}
          likedPhotos={likedPhotos}
          toggleLike={toggleLike}
          onPhotoClick={onPhotoClick} // 👈 Pass it down
        />
      </div>
    );
  };

export default HomeRoute;









