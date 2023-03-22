import React from 'react'
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from "./ExpenseDate";


 const ExpenseItem=(props)=> {
  let title=props.title;
  const clickHandler =()=>{
    title="updated";
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2> 
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem
