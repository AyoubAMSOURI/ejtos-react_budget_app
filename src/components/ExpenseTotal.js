import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () =>{
    const {budget,remaining} = useContext(AppContext);

    return(
        <div className="alert alert-primary">
            <span>Spent so far: {budget-remaining}</span>
        </div>
    )

}
export default ExpenseTotal;