import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

function Transaction({ transactionsArray }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.trTable}>
          <th className={css.tdTable}>Type</th>
          <th className={css.tdTable}>Amount</th>
          <th className={css.tdTable}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactionsArray.map(transaction => {
          return (
            <tr className={css.trTable} key={transaction.id}>
              <td className={css.tdTable}>{transaction.type}</td>
              <td className={css.tdTable}>{transaction.amount}</td>
              <td className={css.tdTable}>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Transaction.propTypes = {
  transactionsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Transaction;
