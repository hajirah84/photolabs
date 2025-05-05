import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, likedPhotoIds, toggleFavorite, onPhotoSelect }) => {

  return (
    <ul className="photo-list">
      {photos.map((photoItem) => (
        <PhotoListItem
          key={photoItem.id}
          photo={photoItem.urls.regular}
          username={photoItem.user.name}
          profile={photoItem.user.profile}
          location={photoItem.location}
          //isFavorited={likedPhotoIds.includes(photoItem.id)}
          isFavorited={likedPhotoIds?.includes(photoItem.id) || false} 
          toggleFavorite={() => toggleFavorite(photoItem.id)} // Toggle favorite state 
          setSelectedPhoto={() => 
            onPhotoSelect({
              ...photoItem,
              similar_photos: photoItem.similar_photos || [],
            })
          } 
        />
      ))}
    </ul>
  );
};

export default PhotoList;





