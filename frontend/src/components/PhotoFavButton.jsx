import React from 'react';
import { FaHeart } from 'react-icons/fa';

const PhotoFavButton = ({ isLiked, onClick }) => {
  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <FaHeart
        className="photo-list__fav-icon-svg"
        color={isLiked ? 'red' : 'lightgray'}
      />
    </div>
  );
};

export default PhotoFavButton;


