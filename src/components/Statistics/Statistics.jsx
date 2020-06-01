import React from 'react';

import { string, number, arrayOf, exact } from 'prop-types';

import styles from './Statistics.module.scss';
import '../../sass/base.scss'

function Statistics({ title, stats }) {
  // const { id, label, percentage } = stats;

  return (
    <section className={styles.statistics}>

      <div className={styles.container}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statList}>
          {stats.map(({ id, label, percentage }) => <li key={id} className={styles.item}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </li>)}
        </ul>
      </div>
    </section>
  )
}

Statistics.defaultProps = {
  title: ''
}

Statistics.propTypes = {
  title: string,
  stats: arrayOf(exact({
    id: string.isRequired,
    label: string.isRequired,
    percentage: number.isRequired
  })).isRequired,
}

export default Statistics;