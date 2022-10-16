import classes from "./ExpenseDetails.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { BudgetContext } from "../../contexts/AppContext";

const ExpenseDetails = () => {
  const { expenses, deleteExpenseItem } = useContext(BudgetContext);
  return (
    <div className={classes["expense-details-container"]}>
      <div className={classes.expense_heading}>
        <div>Expense Title</div>
        <div>Expense Value</div>
      </div>
      {expenses.map(({ id, expenseTitle, expenseValue }) => {
        return (
          <div className={classes["expense-items-container"]} key={id}>
            <div className={classes.expenses}>-{expenseTitle}</div>
            <div className={classes.expenses}>${expenseValue}</div>
            <div>
              <span className={classes.edit_icon}>
                <FaEdit />
              </span>
              <span
                className={classes.edit_trash}
                onClick={() => deleteExpenseItem(id)}
              >
                <FaTrash />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseDetails;
