import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';

function App() {
  const expenses = [
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
      amount: 1800,
      date: new Date(2023, 2, 10)
    }
  ]

  return (
    <div className="App">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
