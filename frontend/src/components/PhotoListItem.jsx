import React from 'react';
import PropTypes from 'prop-types';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photo }) => {
  const { imageSource, profile, username, location } = photo;

  return (
    <div className="photo-list__item">
      <div style={{ position: 'relative' }}>
        <img className="photo-list__image" src={imageSource} alt="Main" />
        <div style={{ position: 'absolute', top: 8, right: 8 }}>
          <PhotoFavButton />
        </div>
      </div>

      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt={`${username}'s profile`}
        />
        <div className="photo-list__user-info">
          <div>{username}</div>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

PhotoListItem.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PhotoListItem;







