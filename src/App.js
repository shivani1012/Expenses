import './App.css';
import Expenses from './components/Expenses/Expenses';

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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
