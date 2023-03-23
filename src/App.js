import React from 'react'
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';
import Expenses from './components/Expenses/Expenses';
const App=()=> {
  const expense=[
    {
      id:'e1',
      title:"Toilet Paper",
      amount:239,
      date:new Date(2021,2,28)
    },
    {
      id:'e2',
      title:"Car Insurance",
      amount:239,
      date:new Date(2021,2,28)
    },
    {
      id:'e3',
      title:"Food",
      amount:239,
      date:new Date(2021,2,28)
    },
  ]

  const addExpenseHandler=expense=>{
    console.log('In App Js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expense}/>
    </div>
  );
}

export default App;
