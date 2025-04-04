import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ isLiked, onClick }) => {
  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <FaHeart
        className={`photo-list__fav-icon-svg ${isLiked ? 'photo-list__fav-icon-svg--active' : ''}`}
      />
    </div>
  );
};

PhotoFavButton.propTypes = {
  isLiked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PhotoFavButton;



