import React from 'react';

const PhotoListItem = ({ imageSource, profile, username, location }) => {
  return (
    <div className="photo-list-item">
      <img src={imageSource} alt="Photo" />
      <div className="photo-info">
        <img src={profile} alt="Photographer" width="30" />
        <span>{username}</span>
        <p>{location.city}, {location.country}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;




