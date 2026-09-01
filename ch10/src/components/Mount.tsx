import { useEffect } from "react"

export default function Mount(){
  useEffect(()=>{
    console.log('mounted');
  },[])
  return <div>Mount</div>
}