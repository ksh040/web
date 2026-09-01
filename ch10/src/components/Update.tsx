import { useEffect, useState } from "react"

export default function Update(){
  const [count,SetCount] = useState(0);
  useEffect(()=>{
    console.log(`update : ${count}`)
  },[count])
  return(
    <>
      <h1>Count : {count}</h1>
      <button type="button" onClick={()=>SetCount((count)=>count+1)}>증가</button>
    </>
  )
}