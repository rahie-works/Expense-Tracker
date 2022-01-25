import React, {useState} from  'react'
import Card from '../UI/Card';
import '../../css/Expenses.css'
import ExpenseFilter from '../UI/ExpenseFilter';
import '../../css/ExpenseItem.css';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expense = (props) => {
    const [year, setYear] = useState('')
    const yearSelected = (yr) => {
            setYear(yr)
    }

    const filteredExpenses = props.data.filter(expense => {
        return (expense.date.getFullYear().toString() === year || year === 'All');
    })

    const deleteAsked = (itemToDelete) => {
        props.deleteData(itemToDelete)
        // console.log(itemToDelete)
    }

    const updateRequest = (item) => {
        props.updationProcess(item)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter value={year} onYearSelection={yearSelected}/>
                <ExpenseChart expense={filteredExpenses}/>
                <ExpensesList data={filteredExpenses} deleteRequired={deleteAsked} updating={updateRequest}/>
            </Card>
        </div>
    );
}

export default Expense;