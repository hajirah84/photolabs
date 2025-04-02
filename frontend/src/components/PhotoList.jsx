const PhotoList = ({ photos, likedPhotos, toggleLike }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem
            photo={{
              id: photo.id,
              imageSource: photo.urls.regular,
              profile: photo.user.profile,
              username: photo.user.name,
              location: photo.location
            }}
            isLiked={likedPhotos.includes(photo.id)}
            toggleLike={toggleLike}
          />
        </li>
      ))}
    </ul>
  );
};




