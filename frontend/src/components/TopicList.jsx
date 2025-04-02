import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const sampleTopics = [
  'Nature',
  'Architecture',
  'People',
  'Food',
  'Animals',
  'Travel',
];

const TopicList = () => {
  return (
    <ul className="top-nav-bar__topic-list">
      {sampleTopics.map((topic, index) => (
        <TopicListItem key={index} label={topic} />
      ))}
    </ul>
  );
};

export default TopicList;

