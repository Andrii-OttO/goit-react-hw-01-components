import Profile from "./templates/social/social"
import profileData from "./templates/social/user.json"

import Statistics from "./templates/statistic/statistics"
import StatisticData from "./templates/statistic/statistic.json"

import FriendList from "./templates/friends/friendsList"
import friendsData from "./templates/friends/friends.json"

import TransactionHistory from "./templates/transaction/transactionHistory"
import transactions from "./templates/transaction/trnsaction.json"

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
