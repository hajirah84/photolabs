import TopicListItem from './TopicListItem';
import PropTypes from 'prop-types';
import '../styles/TopicList.scss';

const TopicList = ({ topics, fetchPhotosByTopic}) => {
  return (
    <ul className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
        key={topic.id}
        label={topic.title}
        onClick={() => fetchPhotosByTopic(topic.id)} 
      />
      ))}
    </ul>
  );
};

TopicList.propTypes = {
  topics: PropTypes.array.isRequired
};

export default TopicList;



