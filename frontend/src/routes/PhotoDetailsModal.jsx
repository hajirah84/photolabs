import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = ({
  state,
  closeModal,
  toggleFavorite,
  setSelectedPhoto,
}) => {
  const selectedPhoto = state.selectedPhoto;
 
  if (!selectedPhoto) return null; // Prevent rendering when no photo selected

  const similarPhotos = selectedPhoto.similar_photos || [];

  return (
    <div className="photo-details-modal">
      {/* Close button for the modal */}
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="Close modal" />
      </button>

      <div className="photo-details-modal__top-bar">
        <div className="photo-details-modal__images">
          
        <PhotoFavButton
  isFavorited={state.likedPhotoIds.includes(selectedPhoto.id)}
  toggleFavorite={() => toggleFavorite(selectedPhoto.id)}
/>



          <img
            src={selectedPhoto.urls.full}
            alt={`Full view of ${selectedPhoto.user.name}'s photo`}
            className="photo-details-modal__image"
          />

         
          <div className="photo-details-modal__photographer-details">
            <img
              src={selectedPhoto.user.profile}
              alt={`${selectedPhoto.user.name}'s profile`}
              className="photo-details-modal__photographer-profile"
            />
            <div className="photo-details-modal__photographer-info">
              <div>{selectedPhoto.user.name}</div>
              <div className="photo-details-modal__photographer-location">
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
              </div>
            </div>
          </div>

          {/* Display similar photos */}
          {similarPhotos.length > 0 && (
            <>
              <div className="photo-details-modal__header">Similar Photos</div>
              <PhotoList
                photos={similarPhotos} // simmilar photos
                likedPhotoIds={state.likedPhotoIds}
                toggleFavorite={toggleFavorite} // enable favourite photos
                onPhotoSelect={setSelectedPhoto}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;

