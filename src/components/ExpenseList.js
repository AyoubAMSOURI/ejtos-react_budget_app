import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () =>{

    const {expenses} = useContext(AppContext);
    return(
        <table>
            <thead>
                <tr>
                <th scope="col">Department</th>
                <th scope="col">Allocated budget</th>
                <th scope="col">Increase by 10</th>
                <th scope="col">Reduce by 10</th>
                <th scope="col">Delete</th>
                </tr>

            </thead>
            <tbody>
                {expenses.map((expense)=>{
                    return <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost}/>
                })}

            </tbody>
        </table>
    )

}
export default ExpenseList;
