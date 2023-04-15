import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

function Transaction({ transactionsArray }) {
  return (
    <>
      {transactionsArray.map(transaction => {
        return (
          <table className={css.transactionHistory} key={transaction.id}>
            <thead>
              <tr className={css.trTable}>
                <th className={css.tdTable}>Type</th>
                <th className={css.tdTable}>Amount</th>
                <th className={css.tdTable}>Currency</th>
              </tr>
            </thead>
            <tbody>
              <tr className={css.trTable}>
                <td className={css.tdTable}>{transaction.type}</td>
                <td className={css.tdTable}>{transaction.amount}</td>
                <td className={css.tdTable}>{transaction.currency}</td>
              </tr>
              <tr className={css.trTable}>
                <td className={css.tdTable}>{transaction.type}</td>
                <td className={css.tdTable}>{transaction.amount}</td>
                <td className={css.tdTable}>{transaction.currency}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </>
  );
}

Transaction.PropTypes = {
  transactionsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default Transaction;
