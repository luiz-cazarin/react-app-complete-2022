import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.12,
      date: new Date(2021, 5, 28),
    },
    {
      id: "e3",
      title: "Data",
      amount: 294.12,
      date: new Date(2021, 5, 28),
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h2>Let's get startded!</h2>
        <Expenses items={expenses} />
      </header>
    </div>
  );
}

export default App;
