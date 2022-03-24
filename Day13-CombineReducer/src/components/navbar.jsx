import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"

export const Navbar = ()=>{
    const navigate = useNavigate();
    const auth = useSelector((store)=>{return store.auth.auth})
    return <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <button onClick={()=>{
            if(auth == false){
                alert("Please Login to go home");
            }else{
                navigate("/")
            }
        }}>Home</button>
        <Link to= "/login"><button>Login</button></Link>
    </div>
}