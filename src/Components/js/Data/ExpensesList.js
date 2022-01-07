import React from 'react'
import '../../css/ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {

    if( props.data.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }

    return <ul className="expenses-list">
        {props.data.map(expense => (
            <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>
        ))}
    </ul>

}

export default ExpensesList;