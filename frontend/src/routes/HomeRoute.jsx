import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";


const HomeRoute = ({
  state,
  toggleFavorite,
  setSelectedPhoto,
  fetchPhotosByTopic,
}) => {
  const { photos, topics, likedPhotoIds } = state;
  return (
    <div className="home-route">
      {/* Render  top navigation bar */}
      <TopNavigation
        topics={state.topics}
        isFavPhotoExist={state?.favPhotos === undefined ? [] :  Object.values(state.favPhotos).some(Boolean)} // Check if any photo is favorited
        fetchPhotosByTopic={fetchPhotosByTopic}
      />

      {/* Render photos, passing necessary props */}
      <PhotoList
        photos={state.photos}
        //favPhotos={state.favPhotos}
        likedPhotoIds={likedPhotoIds}
        toggleFavorite={toggleFavorite}
        onPhotoSelect={setSelectedPhoto}
      />

    </div>
  );
};

export default HomeRoute;





