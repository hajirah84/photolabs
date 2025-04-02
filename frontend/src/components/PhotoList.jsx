import React from 'react';
import PropTypes from 'prop-types';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos }) => {
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
          />
        </li>
      ))}
    </ul>
  );
};

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoList;



