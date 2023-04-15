import css from './Friends.module.css';

export default function Friends({ friendsArray }) {
  return (
    <ul className={css.friendList}>
      {friendsArray.map(friend => {
        return (
          <li className={css.item} key={friend.id}>
            {friend.isOnline ? (
              <span className={css['status-true']}>Online</span>
            ) : (
              <span className={css['status-false']}>Offline</span>
            )}
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
