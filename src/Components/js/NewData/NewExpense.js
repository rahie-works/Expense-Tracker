import React from 'react'
import ExpenseForm from './ExpenseForm';
import '../../css/NewExpense.css'

const NewExpense = (props) => {

    const savedNewData = (newData) => {
        const expenseNewData = {
            ...newData,
            id: (props.idLength + 1)
        };
        console.log("Id " + expenseNewData.id)
        props.onNewExpenseEntry(expenseNewData)
    }

    return (
    <div className='new-expense'>
        <ExpenseForm onSavingNewData={savedNewData}/>
    </div>
    );
}

export default NewExpense;