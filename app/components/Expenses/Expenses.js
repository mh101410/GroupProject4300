import React from 'react';
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({items}) => {
  return (
    <div className="expenses">
      {items.map(item => (
        <Card key={item.id}>
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
          />
        </Card>
      ))}
    </div>
  );
}


export default Expenses;
