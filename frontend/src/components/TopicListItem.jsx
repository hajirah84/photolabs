import '../styles/TopicListItem.scss';
import PropTypes from 'prop-types';


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
