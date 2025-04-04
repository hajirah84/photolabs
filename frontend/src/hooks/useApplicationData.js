import { useState } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

export default function useApplicationData() {
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const updateToFavPhotoIds = (photoId) => {
    setLikedPhotos((prev) =>
      prev.includes(photoId)
        ? prev.filter((id) => id !== photoId)
        : [...prev, photoId]
    );
  };

  const onPhotoSelect = (photo) => {
    setSelectedPhoto(photo);
  };

  const onClosePhotoDetailsModal = () => {
    setSelectedPhoto(null);
  };

  return {
    state: {
      photos,
      topics,
      likedPhotos,
      selectedPhoto
    },
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal
  };
}
