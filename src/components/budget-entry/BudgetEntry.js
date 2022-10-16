import classes from "./BudgetEntry.module.css";
import { useContext } from "react";
import { BudgetContext } from "../../contexts/AppContext";

// const BUDGET = 2550;

const BudgetEntry = () => {
  const { budgetAmt, setBudgetAmt, updatedBudgetAmt, setUpdatedBudgetAmt } =
    useContext(BudgetContext);

  const budgetAmtHandler = (e) => {
    setBudgetAmt(e.target.value);
  };

  const budgetSubmitHandler = (e) => {
    e.preventDefault();
    setUpdatedBudgetAmt(+updatedBudgetAmt + +budgetAmt);
    setBudgetAmt("");
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
        name="budgetAmt"
        value={budgetAmt}
        onChange={budgetAmtHandler}
        placeholder={"Numbers only"}
      />
      <button type={"submit"}>Add Budget</button>
    </form>
  );
};

export default BudgetEntry;
