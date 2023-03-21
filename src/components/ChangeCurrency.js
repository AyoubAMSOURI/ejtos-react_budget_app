import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ChangeCurrency = () =>{
    const {dispatch} = useContext(AppContext);
return(
    <select name="chCurrency" className='form-control' style={{backgroundColor:"greenyellow"}} onChange={(e)=>dispatch({type:'CHG_CURRENCY',payload:e.target.value})} id="chCurrency">
        <option className="optionOnH" value="$">$ Dollar</option>
        <option className="optionOnH" value="£">£ Pound</option>
        <option className="optionOnH" value="€">€ Euro</option>
        <option className="optionOnH" value="₹">₹ Ruppee</option>
    </select>
)
}
export default ChangeCurrency;