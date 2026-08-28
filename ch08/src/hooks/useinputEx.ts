import { useState } from "react";

type InputType = 'text' | 'checkbox' | 'radio'; 

interface useinputProps<T>{
    initialValue: T;
    validateFn : (value: T)=> string | undefined;
    type?: InputType;
}

export default function useinputEx<T>({initialValue,validateFn,type = 'text'}:useinputProps<T>){
    const [value, setValue] = useState<T>(initialValue);
    const [error, setError] = useState<string>('');
    const getCheckBoxValue = (e:React.ChangeEvent<HTMLInputElement>):T=>{
        return Array.isArray(value) ? (
            e.target.checked ? 
            [...value,e.target.value]
            :value.filter((item)=>item !== e.target.value)
        ) as T
        : (e.target.checked as unknown as T)
    }

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const newValue = type === 'checkbox' ? (getCheckBoxValue(e)) : (e.target.value as T);
        setValue(newValue);
        setError('');
    }
    const validate = ():boolean =>{
        const validationError = validateFn(value);
        setError(validationError||'');
        return !validationError;
    }
    const reset = ()=>{
        setValue(initialValue)
        setError('');
    }
    return{
        value,
        error,
        onChange,
        validate,
        reset,
    }
}