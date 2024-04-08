'use client';
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Shoes',
      amount: 67.12
    },
    { 
      id: 'e2', 
      title: 'Computer', 
      amount: 546.87
    },
    {
      id: 'e3',
      title: 'Groceries',
      amount: 78.95
    }
  ]);

  const addExpenseHandler = (expenseData) => {
    setExpenses(prevExpenses => [...prevExpenses, expenseData]);
  };

  return (
    <div>
      <header className="app-header">
        <h1 className="app-title">WiseWallet</h1>
        <p className="app-subtitle">Expense Tracker</p>
      </header>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
      <footer className="app-slogan">
        <p>Your Journey to Financial Freedom Starts Here</p>
      </footer>
    </div>
  );
}

export default App;