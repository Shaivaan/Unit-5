import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = ()=>{
    return <>
        <div id = "nav">
            <Link to= "/"><button>Home</button></Link>
            <Link to = "/listing/create"><button>Create</button></Link>
        </div>
        <br /><br />
    </>

}