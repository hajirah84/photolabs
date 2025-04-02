import React from 'react';
import { FaHeart } from 'react-icons/fa';
import '../styles/FavBadge.scss';

const FavBadge = ({ isActive }) => {
  const className = isActive
    ? 'fav-badge fav-badge--active'
    : 'fav-badge';

  return (
    <div className={className}>
      <FaHeart />
    </div>
  );
};

export default FavBadge;

