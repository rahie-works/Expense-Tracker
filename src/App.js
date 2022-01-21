
import React, {useEffect, useState} from 'react';
import './App.css';
import Expense from './Components/js/Data/Expense';
import NewExpense from './Components/js/NewData/NewExpense';


const App = () => {

  const [exp, setExp] = useState([])

  const getData = () => {
    fetch('dataSheet.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        const newData = myJson.map(all => {
          all.date = new Date(all.date)
          return all
        })

        console.log(newData)
        setExp(newData)
      });
  }

  useEffect(() => {
    getData()
  }, [])

  const newEntryAdded = (newData) => {
    setExp((prevState) => {
      return [newData, ...prevState]
    })
  }

  const deleteThis = (item) => {
    const newData = exp.filter(expense => {
      return (expense.id !== item.id);
    })
    setExp(newData)
  }

  return (
    <div className="App">
      <NewExpense onNewExpenseEntry={newEntryAdded} idLength={exp.length}/>
      <Expense data={exp} deleteData={deleteThis}/>
    </div>
  );
}

export default App;