import '../styles/TopicListItem.scss';
import PropTypes from 'prop-types';


const TopicListItem = ({ label, onClick }) => {
  return (
    <li className="topic-list__item" onClick={onClick}>
      {label}
    </li>
  );
};

TopicListItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TopicListItem;
