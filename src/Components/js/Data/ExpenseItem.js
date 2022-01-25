import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
import '../../css/ExpenseForm.css'
import '../../css/ExpenseItem.css';

const ExpenseItem = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const [enteredTitle,setEnteredTitle] = useState(props.title)
    const [enteredAmount,setEnteredAmount] = useState(props.amount)
    const [enteredDate,setEnteredDate] = useState(props.date)

    const editItem = () => {
        setIsEditing(true)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            id: props.expID,
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        props.onUpdateItem(expenseData)
        setIsEditing(false)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    return (
        <Card className="expense-item">
            {!isEditing && <ExpenseDate date={props.date}/>}
            {!isEditing && <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <div className="btns ">
                    <button className="expense-item__button btn__del" 
                    onClick={() => props.onDeletePressed(props.item)}></button>
                    <button className="expense-item__button btn__edit"
                    onClick={editItem}></button>
                </div>
            </div>}
            {isEditing && <form onSubmit={submitHandler}>
                <div className='new-expense__control '>
                <input type='date' min="2019-01-01" max="2022-12-31" 
                onChange={dateChangeHandler}></input>
                <input type='text' placeholder={props.title} onChange={titleChangeHandler}></input>
                <input type='number' placeholder={props.amount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
                <div className='new-expense__actions'>
                    <button type='submit' className='update__button'>UPDATE</button>
                    <button id='can' 
                    type='button' 
                    className='update__button' onClick={() => setIsEditing(false)}>CANCEL</button>
                </div>
                </div>
            </form>}
        </Card>
    );
}

export default ExpenseItem;