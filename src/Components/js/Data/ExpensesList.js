import React from 'react'
import '../../css/ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {

    if( props.data.length === 0) {
        return <div>
                <h2 className="expenses-list__fallback">NO EXPENSES FOUND</h2>
            </div>
    }


    const deletePressed = (itemReceived) => {
        props.deleteRequired(itemReceived)
        // console.log(itemReceived)
    }

    const updateRequest = (item) => {
        props.updating(item)
    }

    return <ul className="expenses-list">
        {props.data.map(expense => (
            <ExpenseItem 
            key={expense.id}
            expID={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            item={expense}
            onDeletePressed={deletePressed}
            onUpdateItem={updateRequest}/>
        ))}
    </ul>

}

export default ExpensesList;