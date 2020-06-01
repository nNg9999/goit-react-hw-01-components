import React from 'react';

import { string, number, bool, exact } from 'prop-types';

import styles from '../FriendList/FriendList.module.scss';

import classNames from 'classnames';

function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;

  const disable = isOnline ? styles.status : classNames(styles.status, styles.statusOff);

  return (
    <li className={styles.item}>
      <span className={disable}></span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li >
  )

}

FriendListItem.propTypes = {
  friend: exact({
    avatar: string.isRequired,
    name: string.isRequired,
    isOnline: bool.isRequired,
    id: number.isRequired
  }).isRequired,
}

export default FriendListItem;