import React from 'react'
import ExpenseForm from './ExpenseForm';
import '../../css/NewExpense.css'

const NewExpense = (props) => {

    const savedNewData = (newData) => {
        const expenseNewData = {
            ...newData,
            id: Math.random().toString()
        };
        // console.log(expenseNewData)
        props.onNewExpenseEntry(expenseNewData)
    }

    return (
    <div className='new-expense'>
        <ExpenseForm onSavingNewData={savedNewData}/>
    </div>
    );
}

export default NewExpense;