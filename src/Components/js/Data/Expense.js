import React, {useState} from  'react'
import Card from '../UI/Card';
import '../../css/Expenses.css'
import ExpenseFilter from '../UI/ExpenseFilter';
import '../../css/ExpenseItem.css';
import ExpensesList from './ExpensesList';

const Expense = (props) => {
    const [year, setYear] = useState('')
    const yearSelected = (yr) => {
            setYear(yr)
    }

    const filteredExpenses = props.data.filter(expense => {
        return (expense.date.getFullYear().toString() === year || year === 'All');
    })

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter value={year} onYearSelection={yearSelected}/>
                <ExpensesList data={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expense;