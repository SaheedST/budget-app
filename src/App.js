import "./App.css";
import BudgetEntry from "./components/budget-entry/BudgetEntry";
import Dashboard from "./components/dashboard/Dashboard";
import ExpenseDetails from "./components/expense-details/ExpenseDetails";
import ExpenseEntry from "./components/expense-entry/ExpenseEntry";

function App() {
  return (
    <div className="app-container">
      <h3>BUDGET APP</h3>
      <BudgetEntry />
      <ExpenseEntry />
      <Dashboard />
      <ExpenseDetails />
    </div>
  );
}

export default App;
