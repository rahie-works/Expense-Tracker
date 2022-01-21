import React, {useState} from 'react';
import '../../css/Expensefilter.css';

const ExpenseFilter = (props) => {

    const [year, setYear] = useState('All')

    const yearSelected = (event) => {
        setYear(event.target.value)
        props.onYearSelection(event.target.value)
    }

    props.onYearSelection(year)

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>FILTER BY YEAR</label>
        <select onChange={yearSelected}>
          <option value='All'>All</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;