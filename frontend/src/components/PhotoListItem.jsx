import React from 'react';
import PropTypes from 'prop-types';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photo, isLiked, toggleLike }) => {
  const handleClick = () => toggleLike(photo.id);

  return (
    <div className="photo-list__item">
      <div style={{ position: 'relative' }}>
        <img className="photo-list__image" src={photo.imageSource} alt="Main" />
        <div style={{ position: 'absolute', top: 8, right: 8 }}>
          <PhotoFavButton isLiked={isLiked} onClick={handleClick} />
        </div>
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.profile} alt="User profile" />
        <div className="photo-list__user-info">
          <div>{photo.username}</div>
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

PhotoListItem.propTypes = {
  photo: PropTypes.object.isRequired,
  isLiked: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default PhotoListItem;







