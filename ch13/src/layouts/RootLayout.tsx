import { useEffect } from "react";
import { Outlet,NavLink, Link ,useNavigate} from "react-router";
export default function RootLayout(){
    const navigate = useNavigate();
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         navigate('/about')
    //     },3000)
    // },[navigate])
    return(
        <>
            <header>header</header>
            <nav>
                <Link to={'/'}>Home</Link>
                <NavLink to={'/about'} className={
                    ({isActive})=>(isActive ? 'active':'')
                }>About</NavLink>
                <NavLink to={'/my/about'} style={
                    ({isActive})=>{{color:isActive? 'red':'black'}}
                }>dashboard</NavLink>
                <NavLink to={'my/dashboard/settings'}>{
                    ({isActive})=> <span>settings({isActive&&'selected'})</span>
                }</NavLink>
            </nav>
            <Outlet/>
            <footer>footer</footer>
        </>
    )
}