import React from 'react';
import PropTypes from 'prop-types';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ onClose, photo, likedPhotos, toggleLike }) => {
  if (!photo || !photo.urls || !photo.user || !photo.location) return null;

  const { urls, user, location, similar_photos = [] } = photo;

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={onClose}
      >
        ×
      </button>

      <img
        className="photo-details-modal__image"
        src={urls.full}
        alt="Selected"
      />

      <div className="photo-details-modal__header">
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

      <div className="photo-details-modal__images">
        <PhotoList
          photos={similar_photos}
          likedPhotos={likedPhotos}
          toggleLike={toggleLike}
          onPhotoClick={() => {}} // prevent crash if modal photos are clicked
        />
      </div>
    </div>
  );
};

PhotoDetailsModal.propTypes = {
  photo: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  likedPhotos: PropTypes.array.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default PhotoDetailsModal;




