import React from 'react';

const PhotoListItem = ({ imageSource, profile, username, location }) => {
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={imageSource} alt="Main" />
      
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




