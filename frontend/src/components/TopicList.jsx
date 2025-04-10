import React from 'react';
import PropTypes from 'prop-types';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = ({ topics }) => {
  return (
    <ul className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} label={topic.title} />
      ))}
    </ul>
  );
};

TopicList.propTypes = {
  topics: PropTypes.array.isRequired
};

export default TopicList;



