import { Link } from "react-router-dom";
import "./Navbar.css";


export const Navbar = ()=>{
    return <>
    <h1>Apna Todo</h1>
    <div id = "nav">
        <Link to = "/"><div>Home</div></Link>
        <Link to = "/login"><div>Login</div></Link>
        <Link to = "/signup"><div>Signup</div></Link>
    </div>
        <br/>
    </>
}