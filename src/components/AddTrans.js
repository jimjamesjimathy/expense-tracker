import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import './AddTrans.scss'


export const AddTrans = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
      setText('')
      setAmount(0)

    addTransaction(newTransaction);
  }

  return (
    <div className='addTrans'>
      <div className='add-title'>
        <h3>add transaction</h3>
        <div className='instructions'><p>enter " - " first for negative amounts</p></div>
      </div>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">name: </label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value.toLowerCase())} placeholder="Enter text..." />
        </div>
        <div>
          <label htmlFor="amount">amount: </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button>add</button>
      </form>
    </div>
  )
}