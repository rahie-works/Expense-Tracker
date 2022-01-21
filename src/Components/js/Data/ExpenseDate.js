import '../../css/ExpenseDate.css';
import Card from '../UI/Card';

const ExpenseDate = (props) => {

    const month = props.date.toLocaleString('en-US',{month: 'short'})
    const day = props.date.getDate() + 1;
    const year = props.date.getFullYear();

    return (
        <Card className="expense-date">
            <div className="expense-date__month">{month.toUpperCase()}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </Card>

    );

}

export default ExpenseDate;