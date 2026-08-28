import useInput from "../hooks/useinput";

export default function LoginForm3(){
    const {value:email, onChange: changeEmail} = useInput('');
    const {value:password, onChange:changePassword} = useInput('');
    const submitHandler = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(email,password);
    }
    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="useremail">UserEmail</label>
            <input type="email" id="useremail" placeholder="이메일을 입력하세요" value={email} onChange={changeEmail} />
            <label htmlFor="password">PassWord</label>
            <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" value={password} onChange={changePassword}/>
            <button type="submit">LogIn</button>
        </form>
    )
}