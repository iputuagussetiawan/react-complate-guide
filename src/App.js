import React, {useState} from 'react'
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';
import Expenses from './components/Expenses/Expenses';
const DUMMY_EXPENSES=[
  {
    title:"Toilet Paper",
    amount:239,
    date:new Date(2021,2,28),
    id:'e1',
  },
  {
    title:"Car Insurance",
    amount:239,
    date:new Date(2021,2,28),
    id:'e2',
  },
  {
    title:"Food",
    amount:239,
    date:new Date(2023,2,28),
    id:'e3',
  },
]
const App=()=> {
  const [expenses,setExpenses]= useState(DUMMY_EXPENSES)
  const addExpenseHandler=expense=>{
    setExpenses(prevExpenses=>{
      return [expense,...prevExpenses];
    });
  };
  console.log(expenses);
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
