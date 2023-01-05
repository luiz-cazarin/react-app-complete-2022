import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState, useEffect } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e3",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 5, 12),
    }
  ]);

  const addExpenseHandler = expense => {
    setExpenses([...expenses, expense])
    console.log(expenses);
  }
  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpenseHandler={addExpenseHandler} />
        <Expenses items={expenses} />
      </header>
    </div>
  );
}

export default App;
