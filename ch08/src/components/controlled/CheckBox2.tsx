import { useState } from "react";

export default function CheckBox2(){
    const [checkState,setCheckState] = useState({
        agree1: false,
        agree2: false,
        agree3: false,
    })
    const handleCheckboxChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setCheckState((checkState)=>({
            ...checkState,
            [e.target.name] : e.target.checked
        }))
    }
    return(
        <form>
            <input type="checkbox" checked={checkState.agree1} onChange={handleCheckboxChange} id="agree1" name="agree1" />
            <label htmlFor="agree1">동의1 : {checkState.agree1 ? '선택됨':'미선택'}</label>
            <hr />
            <input type="checkbox" checked={checkState.agree2} onChange={handleCheckboxChange} id="agree2" name="agree2" />
            <label htmlFor="agree2">동의2 : {checkState.agree2 ? '선택됨':'미선택'}</label>
            <hr />
            <input type="checkbox" checked={checkState.agree3} onChange={handleCheckboxChange} id="agree3" name="agree3" />
            <label htmlFor="agree3">동의3 : {checkState.agree3 ? '선택됨':'미선택'}</label>
        
        </form>
    )
}