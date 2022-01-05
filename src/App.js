
import React from 'react';
import './App.css';
import Expense from './Components/js/Data/Expense';


const App = () => {

  const expense = [
    {
      id: '1',
      title: 'Car Insurance',
      amount: 283.77,
      date: new Date(2021, 4, 25)
    },
    {
      id: '2',
      title: 'Grocery',
      amount: 254.24,
      date: new Date(2021, 7, 10)
    },
    {
      id: '3',
      title: 'Bills',
      amount: 380.99,
      date: new Date(2021, 3, 14)
    },
    {
      id: '4',
      title: 'Rent',
      amount: 1200.00,
      date: new Date(2021, 10, 20)
    }
  ]

  return (
    <div className="App">
      <Expense data={expense}/>
    </div>
  );

  // *******************************************
  //[ The React code running background to the above JSX ]

  // return React.createElement('div', {},
  // React.createElement(Expense, {data: expense}));
  // *******************************************
}

export default App;