import React, { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

const ExpenseItem = (props) => {
    
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Updated!');
        console.log('State Executed');
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>Rs {props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;
