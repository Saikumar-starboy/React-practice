import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";

function App() {

  const expenses = [
    { title: "Expense 1", amount: 100, date: new Date(2020, 7, 24) }, // August 24, 2020
    { title: "Expense 2", amount: 200, date: new Date(2021, 2, 15) }, // March 15, 2021
    { title: "Expense 3", amount: 300, date: new Date(2022, 5, 10) }, // June 10, 2022
    { title: "Expense 4", amount: 400, date: new Date(2022, 11, 2) }, // December 2, 2022
    { title: "Expense 5", amount: 500, date: new Date(2023, 1, 17) }, // February 17, 2023
    { title: "Expense 6", amount: 600, date: new Date(2023, 4, 8) },  // May 8, 2023
    { title: "Expense 7", amount: 700, date: new Date(2023, 7, 19) }, // August 19, 2023
    { title: "Expense 8", amount: 800, date: new Date(2023, 9, 30) }, // October 30, 2023
    { title: "Expense 9", amount: 900, date: new Date(2023, 10, 5) }, 
    { title: "Expense 10", amount: 1000, date: new Date(2023, 11, 25) }, 
  ];
  
 
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default App;
