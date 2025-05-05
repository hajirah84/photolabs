import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo, isFavorited, toggleFavorite, setSelectedPhoto }) => {
  const { urls, user, location } = photo;

  return (
    <li className="photo-list__item">
      <img
        src={urls.regular}
        alt="Photo"
        className="photo-list__image"
        onClick={setSelectedPhoto}
      />

      <div className="photo-list__fav-icon" onClick={(e) => {
        e.stopPropagation();
        toggleFavorite();
      }}>
        <FaHeart
          className={`photo-list__fav-icon-svg ${isFavorited ? 'photo-list__fav-icon-svg--active' : ''}`}
        />
      </div>

      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt={user.name}
        />
        <div className="photo-list__user-info">
          <div>{user.name}</div>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </li>
  );
};

PhotoListItem.propTypes = {
  photo: PropTypes.object.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  setSelectedPhoto: PropTypes.func.isRequired
};

export default PhotoListItem;








