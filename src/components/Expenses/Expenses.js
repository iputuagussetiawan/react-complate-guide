import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
 const Expenses=(props)=> {
  const [filteredYear, setFilteredYear] = useState('2023');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  });

  let expenseContent=<p>No Expense Found.</p>;
  if(filteredExpenses.length>0){
    expenseContent= filteredExpenses.map((expense)=>(
      <ExpenseItem
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}
      />
    ))
  }
 
  return (
    <div className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
       {
        expenseContent
       }
    </div>
  )
}
export default Expenses
