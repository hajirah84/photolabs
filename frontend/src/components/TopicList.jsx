import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const sampleTopics = [
  { id: "1", label: "Nature" },
  { id: "2", label: "Architecture" },
  { id: "3", label: "People" },
  { id: "4", label: "Food" },
  { id: "5", label: "Animals" },
  { id: "6", label: "Travel" },
];

const TopicList = () => {
  return (
    <ul className="top-nav-bar__topic-list">
      {sampleTopics.map((topic) => (
        <TopicListItem key={topic.id} label={topic.label} />
      ))}
    </ul>
  );
};

export default TopicList;


