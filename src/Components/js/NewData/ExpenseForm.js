import React, {useState} from 'react'
import '../../css/ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle,setEnteredTitle] = useState('')
    const [enteredAmount,setEnteredAmount] = useState('')
    const [enteredDate,setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        console.log("Date :",event.target.value)
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(enteredTitle !== "" && enteredAmount !== "" && enteredDate !== "" ) {
            const expenseData = {
                title: enteredTitle,
                amount: +enteredAmount,
                date: new Date(enteredDate),
            };
            props.onSavingNewData(expenseData)
            setEnteredAmount('')
            setEnteredTitle('')
            setEnteredDate('')
        } else {
            props.onSavingNewData(null)
        }
    }

    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>TITLE</label>
                <input type='text' 
                    value={enteredTitle} 
                    onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>AMOUNT</label>
                <input type='number' min="0.01" step="0.01" 
                    value={enteredAmount}
                    onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>DATE</label>
                <input type='date' min="2019-01-01" max="2022-12-31" 
                    value={enteredDate} 
                    onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>CANCEL</button>
            <button type='submit'>ADD EXPENSE</button>
        </div>
    </form>
    );
}

export default ExpenseForm;