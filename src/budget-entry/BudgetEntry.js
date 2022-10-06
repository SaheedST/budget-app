import classes from "./BudgetEntry.module.css";
import { useState } from "react";

// const BUDGET = 2550;

const BudgetEntry = ({sendBudgetValue}) => {
  const [budgetValue, setBudgetValue] = useState('');

  const budgetValueHandler = (e) => {
    setBudgetValue(e.target.value);
  };

  const budgetSubmitHandler = (e) => {
    e.preventDefault();
   
    sendBudgetValue(budgetValue)
    setBudgetValue('');
  };

  

  return (
    <form
      className={classes["budget-entry-container"]}
      onSubmit={budgetSubmitHandler}
    >
      <div>Please Enter Your Budget</div>
      <input
        type={"number"}
        required
        name="budgetValue"
        value={budgetValue}
        onChange={budgetValueHandler}
        placeholder={"Numbers only"}
      />
      <button type={"submit"}>Add Budget</button>
    </form>
  );
};

export default BudgetEntry;
