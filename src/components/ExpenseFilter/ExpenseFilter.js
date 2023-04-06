import React from 'react';
import '../ExpenseFilter/ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const dropDownChange = (e) => {
        props.onChangeFilter(e.target.value);
    }

    return (
        <div className='expense_filter'>
            <div className='expense_filter_control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropDownChange}>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter
