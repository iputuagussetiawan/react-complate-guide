import React from 'react'
import Chart from '../Chart/Chart'

const ExpensesChart = (props) => {
    const chartDataPoints=[
        {label:'Jan',value:0},
        {label:'Feb',value:10},
        {label:'Mar',value:0},
        {label:'Apr',value:10},
        {label:'Mei',value:0},
        {label:'Jun',value:10},
        {label:'Jul',value:0},
        {label:'Aug',value:10},
        {label:'Sep',value:10},
        {label:'Oct',value:10},
        {label:'Nov',value:10},
        {label:'Dec',value:10},
    ];

    for(const expense of props.expenses){
        const expenseMonth=expense.date.getMonth();
        chartDataPoints[expenseMonth].value +=expense.amount;
    }
  return (
    <Chart dataPoints={chartDataPoints}></Chart>
  )
}

export default ExpensesChart