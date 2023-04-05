import React, { useState } from 'react';
import '../ExpenseForm/ExpenseForm.css';

const ExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChange = (e) => {
        setTitle((prevState) => {
            return {...prevState, title: e.target.value}
        })
    }
    const amountChange = (e) => {
        setAmount(e.target.value)
    }
    const dateChange = (e) => {
        setDate(e.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }

        console.log(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new_expense_controls'>
                <div className='new_expense_control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={titleChange}
                    />
                </div>
                <div className='new_expense_control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={amount}
                        onChange={amountChange}
                    />
                </div>
                <div className='new_expense_control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2023-01-01'
                        max='2024-12-31'
                        value={date}
                        onChange={dateChange}
                    />
                </div>
            </div>
            <div className='new_expense_actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
