import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm';
import '../../css/NewExpense.css'

const NewExpense = (props) => {

    const [showNewExpense, setShowNewExpense] = useState(false)

    const savedNewData = (newData) => {
        if(newData != null) {
            const expenseNewData = {
                ...newData,
                id: (props.idLength + 1)
            };
            console.log("Id " + expenseNewData.id)
            props.onNewExpenseEntry(expenseNewData)
            setShowNewExpense(false)
        } else {
            alert('All entries are mandatory.!')
        }
    }

    const showForm = () => {
        setShowNewExpense(true)
    }

    const hideForm = () => {
        setShowNewExpense(false)
    }

    return (
        <div className='new-expense'>
            {!showNewExpense && <button title="Add New Expense" onClick={showForm}>+ NEW EXPENSE</button>}
            {showNewExpense && <ExpenseForm onSavingNewData={savedNewData} onCancel={hideForm}/>}
        </div>
        );
}

export default NewExpense;