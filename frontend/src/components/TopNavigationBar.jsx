import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, isFavPhotoExist, onTopicClick }) => {
  return (
    <div className="top-nav">
      {topics.map((topic) => (
        <button
          key={topic.id}
          onClick={() => onTopicClick(topic.id)}
          className="topic-button"
        >
          {topic.title}
        </button>
      ))}
    </div>
  );
};


export default TopNavigationBar;




