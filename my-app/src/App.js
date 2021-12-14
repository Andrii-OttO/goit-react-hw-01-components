import Profile from './components/social/social';
import profileData from './components/social/user.json';

import Statistics from './components/statistic/statistics';
import StatisticData from './components/statistic/statistic.json';

import FriendList from './components/friends/friendsList';
import friendsData from './components/friends/friends.json';

import TransactionHistory from './components/transaction/transactionHistory';
import transactions from './components/transaction/trnsaction.json';

function App() {
  return (
    <div className="App">
      <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />
      <Statistics title="Upload stats" stats={StatisticData} />
      <Statistics stats={StatisticData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
