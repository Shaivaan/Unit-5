import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = ()=>{

    return <>
          <div id = "nav">
              <Link to = "/login"><div>Login</div></Link>
              <Link to = "/signup"><div>Signup</div></Link>
              <Link to = "/dashboard"><div>Dashboard</div></Link>
              </div>  
    </>

}