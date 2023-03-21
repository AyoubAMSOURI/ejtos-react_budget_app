import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ChangeCurrency = () =>{
    const {dispatch} = useContext(AppContext);
return(
    <select name="chCurrency" style={{backgroundColor:"greenyellow"}} onChange={(e)=>dispatch({type:'CHG_CURRENCY',payload:e.target.value})} id="chCurrency">
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
    </select>
)
}
export default ChangeCurrency;