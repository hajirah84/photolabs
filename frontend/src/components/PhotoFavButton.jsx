// import FavIcon from './FavIcon';
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa'; // 

const PhotoFavButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(prev => !prev);
    console.log("Heart clicked! Liked:", !isLiked);
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleLike}>
      <FaHeart
        className="photo-list__fav-icon-svg"
        color={isLiked ? 'red' : 'lightgray'}
      />
    </div>
  );
};

export default PhotoFavButton;

