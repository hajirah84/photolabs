import React from 'react';
import PropTypes from 'prop-types';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, likedPhotos, toggleLike, onPhotoClick }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem
            photo={{
              id: photo.id,
              imageSource: photo.urls.regular,
              profile: photo.user.profile,
              username: photo.user.name,
              location: photo.location
            }}
            isLiked={likedPhotos.includes(photo.id)}
            toggleLike={toggleLike}
            onClick={() => onPhotoClick(photo)} // 👈 Handle click
          />
        </li>
      ))}
    </ul>
  );
};

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
  likedPhotos: PropTypes.array.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default PhotoList;



