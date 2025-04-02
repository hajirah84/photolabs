import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ label }) => {
  return (
    <li className="topic-list__item">
      {label}
    </li>
  );
};

TopicListItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TopicListItem;
