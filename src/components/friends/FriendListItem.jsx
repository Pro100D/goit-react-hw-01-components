import css from './Friends.module.css';

export default function FriendListItem({ friend }) {
  return (
    <li className={css.item} key={friend.id}>
      <span
        className={friend.isOnline ? css['status-true'] : css['status-false']}
      >
        Online
      </span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
}
