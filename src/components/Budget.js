import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  let { budget, dispatch, remaining, currency } = useContext(AppContext);

  const handleBudget = (newBudget) => {
    if (newBudget > 20000) {
      alert("we cannot bypass 2000 "+currency);
    } else if (remaining<0) {
      alert("you cannot reduce the budget value lower than spending !");
    } else {
      dispatch({ type: "SET_BUDGET", payload: newBudget });
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>
        Budget : {currency}{" "}
        <input
          type="number"
          step={10}
          value={budget}
          onChange={(e) => handleBudget(e.target.value)}
        />
      </span>
    </div>
  );
};
export default Budget;
