import classes from "./ExpenseEntry.module.css";
import { useState } from "react";

const EXPENSE_VALUES = [
  { id: 1, expenseTitle: "Lunch", expenseValue: 20 },
  { id: 2, expenseTitle: "Groceries", expenseValue: 169 },
];

const ExpenseEntry = ({ sendExpenseList }) => {
  const [expenses, setExpenses] = useState(EXPENSE_VALUES);
  const [newExpense, setNewExpense] = useState({
    id: Math.random(),
    expenseTitle: "",
    expenseValue: "",
  });

  const { expenseTitle, expenseValue } = newExpense;

  const updateExpense = (event) => {
    const { name, value } = event.target;

    setNewExpense({ ...newExpense, [name]: (newExpense[name] = value) });
  };

  const expenseSubmitHandler = (e) => {
    e.preventDefault();
    setExpenses([...expenses, newExpense]);
    sendExpenseList(expenses, newExpense);

    setNewExpense({ id: Math.random(), expenseTitle: "", expenseValue: "" });
  };


  return (
    <form
      className={classes["expense-entry-container"]}
      onSubmit={expenseSubmitHandler}
    >
      <div>
        Please Enter Your Expense
        <input
          type="text"
          required
          placeholder="Description"
          name="expenseTitle"
          value={expenseTitle}
          onChange={updateExpense}
        />
      </div>
      <div>
        Please Enter Expense Amount
        <input
          type="number"
          required
          placeholder="Numbers Only"
          name="expenseValue"
          value={expenseValue}
          onChange={updateExpense}
        />
      </div>
      <button>Add Expense</button>
    </form>
  );
};

export default ExpenseEntry;
