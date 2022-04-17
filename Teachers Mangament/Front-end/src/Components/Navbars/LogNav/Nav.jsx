import { Link } from "react-router-dom";
import "./Nav.css";
export const Nav = ()=>{
    return <>
        <br />
    <div id = "lognav">
        
        <Link to = "/login"><div>Login</div></Link>
        <Link to = "/register"><div>Signup</div></Link>
    </div>
    <br /><br />
    </>
}