import { useNavigate } from "react-router-dom"

export const Navbar = ()=>{
    
    const navigate = useNavigate()
    return <div style={{
        display:"flex",
        justifyContent:"space-around"
    }}>
        <button onClick={()=>{navigate("/")}}>Home</button>
        <button onClick={()=>{navigate("/products")}}>Products</button>
    </div>
}