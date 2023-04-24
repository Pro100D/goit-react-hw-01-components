import css from './Friends.module.css';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

export default function Friends({ friendsArray }) {
  return (
    <ul className={css.friendList}>
      {friendsArray.map(friend => {
        return <FriendListItem friend={friend} />;
      })}
    </ul>
  );
}
Friends.propTypes = {
  friendsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
