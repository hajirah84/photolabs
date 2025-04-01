import React from 'react';
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
        <img className="photo-list__user-profile" src={profile} alt="User profile" />
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

export default PhotoListItem;






