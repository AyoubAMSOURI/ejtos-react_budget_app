import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Budget = () =>{
    let {budget} = useContext(AppContext);
    return(
        <div className="alert alert-secondary">
            <span>
                Budget : {budget} £
            </span>
        </div>
    )
}
export default Budget;
