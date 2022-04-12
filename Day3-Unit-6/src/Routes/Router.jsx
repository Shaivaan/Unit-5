import { Route, Routes, useNavigate } from "react-router-dom"
import { Dashboard } from "../Components/Dashboard"
import { Login } from "../Components/Login/Login"
import { Navbar } from "../Components/Navbar/Navbar"
import { Signup } from "../Components/Signup/Signup"

export const Router = ()=>{

    const navigate = useNavigate();
        const Home = ()=>{
            navigate();
        }
    
    return <>
        <Navbar/>
        <Routes>
           
            <Route path="/login" element= {<Login/>} />
            <Route path="/signup" element= {<Signup/>} />
            <Route path="/dashboard" element = {<Dashboard/>} />
        </Routes>
    </>
}