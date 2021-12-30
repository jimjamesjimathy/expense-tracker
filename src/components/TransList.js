import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';
import './TransList.scss';

export const TransList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className='transList'>
      <ul>
      <h3>transactions</h3>
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </div>
  )
}