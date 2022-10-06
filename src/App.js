import React, { useEffect } from "react";
import "./App.css";
import BudgetEntry from "./budget-entry/BudgetEntry";
import Dashboard from "./dashboard/Dashboard";
import ExpenseDetails from "./expense-details/ExpenseDetails";
import ExpenseEntry from "./expense-entry/ExpenseEntry";
import { useState } from "react";

function App() {
  const [dashboardValues, setDashboardValues] = useState({
    budgetValue: 0,
    totalExpense: 0,
  });
  const [expenseDetailsList, setExpenseDetailsList] = useState([]);

  const getBudgetValue = (budgetValue) => {
    setDashboardValues({
      ...dashboardValues,
      budgetValue: (dashboardValues.budgetValue = budgetValue),
    });
  };

  const expenseTotal = expenseDetailsList.reduce((total, expense) => {
    total = total + +expense.expenseValue;
    return total;
  }, 0);

  const getExpenseList = (expenses, newExpense) => {
    setExpenseDetailsList([...expenses, newExpense]);
  };

  const deleteExpenseItem = (position) => {
    expenseDetailsList.map((expense, index) => {
      const { id } = expense;
      if (id === position) {
        const expensesCopy = expenseDetailsList;

        expensesCopy.splice(index, 1);
        
        return setExpenseDetailsList(expensesCopy);
      }
    });
  };

  return (
    <div className="app-container">
      <h3>BUDGET APP</h3>
      <BudgetEntry sendBudgetValue={getBudgetValue} />
      <ExpenseEntry sendExpenseList={getExpenseList} />
      <Dashboard
        dashboardValues={dashboardValues}
        expenseTotal={expenseTotal}
      />
      <ExpenseDetails
        expenses={expenseDetailsList}
        deleteExpenseItem={deleteExpenseItem}
      />
    </div>
  );
}

export default App;
