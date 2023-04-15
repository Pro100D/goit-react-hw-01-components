import user from './profile/user.json';
import data from './statistics/data.json';
import friend from './friends/friend.json';
import transactions from './transaction/transactions.json';

import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import Friends from './friends/Friends';
import Transaction from './transaction/Transaction';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <Friends friendsArray={friend} />
      <Transaction transactionsArray={transactions} />
    </>
  );
};
