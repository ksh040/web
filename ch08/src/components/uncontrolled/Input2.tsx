import { useRef } from "react";

export default function Input2(){
    const inputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        const inputValue = inputRef.current?.value;
        console.log(inputValue);
    }
    const clickHandler = ()=>{
        const inputValue = inputRef.current?.value;
        console.log('clickHandler',inputValue);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <button type="button" onClick={clickHandler}>클릭</button>
            <button type="submit">제출</button>
        </form>
    )
}