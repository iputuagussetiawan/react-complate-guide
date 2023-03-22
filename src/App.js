import React from 'react'
import './App.css';
import Expenses from './components/Expenses/Expenses';
function App() {
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

  return (
    <div>
      <h2>Let Get Started!</h2>
      <Expenses items={expense}></Expenses>
    </div>
  );
}

export default App;
