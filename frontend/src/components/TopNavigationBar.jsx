import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";

const TopNavigation = ({ topics, isFavPhotoExist, fetchPhotosByTopic }) => {
  return (
    <div className="top-nav-bar">
      {/* Application Logo */}
      <span className="top-nav-bar__logo">PhotoLabs</span>

      {/* Topic List Section */}
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic}/>

      {/* Favorite Badge Indicator */}
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;




