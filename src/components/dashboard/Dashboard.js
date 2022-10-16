import classes from "./Dashboard.module.css";
import { FaMoneyBillAlt, FaRegCreditCard, FaDollarSign } from "react-icons/fa";
import { useContext } from "react";
import { BudgetContext } from "../../contexts/AppContext";

const Dashboard = () => {
  const { totalExpense, updatedBudgetAmt } = useContext(BudgetContext);

  const balance = +updatedBudgetAmt - +totalExpense;

  return (
    <div className={classes["dashboard-container"]}>
      <div className={classes["dashboard-items"]}>
        <div className={classes.heading}>budget</div>
        <div className={classes.icons}>
          <FaMoneyBillAlt />
        </div>
        <div className={`${classes.total_amount} ${classes.budget}`}>
          ${updatedBudgetAmt}
        </div>
      </div>
      <div className={classes["dashboard-items"]}>
        <div className={classes.heading}>Expenses</div>
        <div className={classes.icons}>
          <FaRegCreditCard />
        </div>
        <div className={`${classes.total_amount} ${classes.expenses}`}>
          ${totalExpense}
        </div>
      </div>
      <div className={classes["dashboard-items"]}>
        <div className={classes.heading}>balance</div>
        <div className={classes.icons}>
          <FaDollarSign />
        </div>
        <div className={`${classes.total_amount} ${classes.budget}`}>
          ${balance}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
