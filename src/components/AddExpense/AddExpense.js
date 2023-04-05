import React from 'react';
import '../AddExpense/AddExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

const AddExpense = () => {
  return (
    <div className='new_expense'>
      <ExpenseForm />
    </div>
  )
}

export default AddExpense
