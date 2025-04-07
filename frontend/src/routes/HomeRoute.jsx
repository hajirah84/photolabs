import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  topics,
  likedPhotos,
  toggleLike,
  onPhotoClick,
  onTopicClick
}) => {
  const isFavPhotoExist = likedPhotos.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        onTopicClick={onTopicClick}
      />
      <PhotoList
        photos={photos}
        likedPhotos={likedPhotos}
        toggleLike={toggleLike}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;





