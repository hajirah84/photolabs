import React from 'react';
import PropTypes from 'prop-types';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, favPhotos = [], toggleFavorite, setSelectedPhoto }) => {
  return (
    <ul className="photo-list">
      {photos.map((photoItem) => (
        <PhotoListItem
          key={photoItem.id}
          photo={photoItem}
          isFavorited={favPhotos.includes(photoItem.id)}
          toggleFavorite={() => toggleFavorite(photoItem.id)}
          setSelectedPhoto={() => setSelectedPhoto(photoItem)}
        />
      ))}
    </ul>
  );
};

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
  favPhotos: PropTypes.array,
  toggleFavorite: PropTypes.func.isRequired,
  setSelectedPhoto: PropTypes.func.isRequired
};

export default PhotoList;





