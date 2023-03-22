import './App.css';
import Expenses from './components/Expenses';
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
      <p>teetss</p>
      <Expenses items={expense}></Expenses>
      {/* <ExpenseItem 
        title={expense[0].title} 
        amount={expense[0].amount} 
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={expense[1].title} 
        amount={expense[1].amount} 
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={expense[2].title} 
        amount={expense[2].amount} 
        date={expense[2].date}
      ></ExpenseItem> */}
      
    </div>
  );
}

export default App;
