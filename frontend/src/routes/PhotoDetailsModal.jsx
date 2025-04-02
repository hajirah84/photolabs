import React from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ onClose }) => {
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={onClose}
      >
        ×
      </button>

      {/* More modal content will go here in future steps */}
    </div>
  );
};

export default PhotoDetailsModal;
