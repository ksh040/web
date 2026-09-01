
import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Mount from './components/Mount'
import UnMount from './components/UnMount';
import Update from './components/Update';
import FetchUser from './components/FetchUser';

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Input type='email' placeholder='이메일을 입력하세요'>이메일</Input>
      <Input type='password' placeholder='비밀번호를 입력하세요'>비밀번호</Input>
      <Mount />
      {show && <UnMount />}
      <button type='button' onClick={()=>setShow(!show)}>toggle</button>
      <Update />
      <FetchUser/>
    </>
  )
}

export default App
