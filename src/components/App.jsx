import React, { Fragment } from 'react';
import Profile from './Profile';
import user from './Profile/user.json';

import Section from './Section';

import Statistics from './Statistics';
import statisticalData from './Statistics/statistical-data.json';

import FriendList from './FriendList';
import friends from './FriendList/friend-list.json';

import TransactionHistory from './TransactionHistory';
import transactions from './TransactionHistory/transactions.json';


function App() {

  return (
    <Fragment>
      <Section title="Profile">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />

    </Fragment>
  )

}

export default App;

