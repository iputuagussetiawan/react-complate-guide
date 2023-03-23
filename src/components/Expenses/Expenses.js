import React, { useState } from 'react';
import ExpensesList from './ExpensesList';

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
 
  return (
    <div className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}/>
    </div>
  )
}
export default Expenses
