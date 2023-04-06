import React, { useState } from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import '../Expenses/Expenses.css';
import Card from '../UI/Card/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filterData = props.items.filter(value => {
    return value.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className='expense_box' >
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filterData.length === 0 && <p style={{ color: '#fff', textAlign: 'center' }}>No Expenses Found!</p>}
        {filterData.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
