import { createContext, useState } from "react";

export const BudgetContext = createContext({
  budgetAmt: 0,
  setBudgetAmt: () => {},
  updatedBudgetAmt: 0,
  setUpdatedBudgetAmt: () => {},
  expenses: [],
  setExpenses: () => {},
  totalExpense: 0,
  deleteExpenseItem: () => {},
});

export const BudgetExpenseProvider = ({ children }) => {
  const [budgetAmt, setBudgetAmt] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [updatedBudgetAmt, setUpdatedBudgetAmt] = useState(0);

  const totalExpense = expenses.reduce((sum, { expenseValue }) => {
    return sum + +expenseValue;
  }, 0);

  const deleteExpenseItem = (selectedItem) => {
    const deletedList = expenses.filter(
      (expense) => expense.id !== selectedItem
    );
    setExpenses(deletedList);
  };

  const value = {
    budgetAmt,
    setBudgetAmt,
    updatedBudgetAmt,
    setUpdatedBudgetAmt,
    expenses,
    setExpenses,
    totalExpense,
    deleteExpenseItem,
  };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
};
