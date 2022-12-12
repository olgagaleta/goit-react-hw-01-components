import { Profile } from 'components/Profile/Profile.jsx';
import user from 'data/user.json';

import { Statistics } from 'components/Statistics/Statistics';
import statistics from 'data/statistics.json';

import { FriendList } from 'components/FriendList/FriendList';
import friends from 'data/friends.json';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
