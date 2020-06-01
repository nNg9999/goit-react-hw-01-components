import React from 'react';

import { string, number, exact, arrayOf, bool } from 'prop-types';

import FriendListItem from '../FriendListItem';
import styles from './FriendList.module.scss';


function FriendList({ friends }) {

  return (
    <ul className={styles.friendList}>
      {friends.map(friend => { return <FriendListItem key={friend.id} friend={friend} /> })}
    </ ul>
  )
}

FriendList.propTypes = {
  friends: arrayOf(exact({
    avatar: string.isRequired,
    name: string.isRequired,
    isOnline: bool.isRequired,
    id: number.isRequired
  })).isRequired,
}

export default FriendList;