import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './IncomeExpense.scss';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

  return (
    <div className='income-expense'>
        <div>
          <h4>income</h4>
          <p className={income < 0 ? 'negative' : 'positive'}> + {moneyFormatter(income)}</p>
        </div>
        <div>
          <h4>expenses</h4>
          <p className={expense > 0 ? 'negative' : ''}> - {moneyFormatter(expense)}</p>
        </div>
      </div>
  )
}