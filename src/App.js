import React from 'react';
import { Header } from './components/Header';
import {Balance} from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransList } from './components/TransList';
import { AddTrans } from './components/AddTrans';
import { GlobalProvider } from './context/GlobalState';


import './App.scss';

function App() {
  return (
    <GlobalProvider className='home-page'>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransList />
        <AddTrans />
      </div>
    </GlobalProvider>
  );
}

export default App;
