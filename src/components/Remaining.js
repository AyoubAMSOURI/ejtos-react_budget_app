import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () =>{
    const {currency,remaining} = useContext(AppContext);
    const alertType = remaining >= 0 ? 'alert-success' : 'alert-danger' ;
    return(
        <div className={`alert ${alertType}`}>
            <span>
                Remaining : {currency+' '+remaining} 
            </span>
        </div>
    )
}
export default Remaining ;