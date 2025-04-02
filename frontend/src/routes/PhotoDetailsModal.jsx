import React, { useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ onClose, photo }) => {
  useEffect(() => {
    console.log('Selected photo:', photo); //  log the photo data
  }, [photo]);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={onClose}
      >
        ×
      </button>

      
    </div>
  );
};

export default PhotoDetailsModal;

