import React from 'react';

import { string, arrayOf, exact } from 'prop-types';

import styles from './TransactionHistory.module.scss';

function TransactionHistory({ items }) {
  // const { id, type, amount, currency } = items;

  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody >
        {items.map((transaction) => (<tr key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </tr>))}
      </tbody>
    </table>
  )

}

// TransactionHistory.defaultProps = {
//   
// }

TransactionHistory.propTypes = {
  items: arrayOf(exact({
    id: string.isRequired,
    type: string.isRequired,
    amount: string.isRequired,
    currency: string.isRequired
  })).isRequired,
}

export default TransactionHistory;