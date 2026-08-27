import { useState } from "react";

export default function Radio(){
    const [formState,setFormState] =useState({
        gender: 'male',
        color:'red',
    })
    const handleRadioChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormState((formState)=>({
            ...formState,
            [e.target.name] : e.target.value
        }))
    }
    return(
        <>
        <form>
            <div>
                <label>
                    <input type="radio" name="gender" value='male' 
                    checked={formState.gender === 'male'}
                    onChange={handleRadioChange}/>남자
                </label>
                <label>
                    <input type="radio" name="gender" value='female' 
                    checked={formState.gender === 'female'}
                    onChange={handleRadioChange}/>여자
                </label>
                <div>
                    <label>
                        <input type="radio" name="color" value='red'
                        checked={formState.color === 'red'}
                        onChange={handleRadioChange} />빨강
                    </label>
                    <label>
                        <input type="radio" name="color" value='blue'
                        checked={formState.color === 'blue'}
                        onChange={handleRadioChange} />파랑
                    </label>
                </div>
            </div>
        </form>
        </>
    )
}