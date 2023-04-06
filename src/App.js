import './App.css';
import Expenses from './components/Expenses/Expenses';
import AddExpense from './components/AddExpense/AddExpense';
import { useState } from 'react';

const Dummy_Expenses = [
  {
    id: '1',
    title: 'Car Insurance',
    amount: 20000,
    date: new Date(2023, 2, 6)
  },
  {
    id: '2',
    title: 'New TV',
    amount: 32000,
    date: new Date(2023, 1, 11)
  },
  {
    id: '3',
    title: 'Household',
    amount: 2500,
    date: new Date(2023, 2, 7)
  },
  {
    id: '4',
    title: 'Food & Dining',
    amount: 18.00,
    date: new Date(2023, 2, 10)
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpeseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <AddExpense onAddExpense={addExpeseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
