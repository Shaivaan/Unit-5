import { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { Class } from "../Components/Class/Class"
import { CreateSchedule } from "../Components/Create/create"
import { EditSchedule } from "../Components/Edit/Edit"
import { Home } from "../Components/Home/Home"
import { Login } from "../Components/Login/Login"
import { Register } from "../Components/Signup/Signup"

export const Routers = ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/login");
    },[])

    return <>
        
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/class/:classs" element={<Class/>}/>
                <Route path="/create/:classs" element={<CreateSchedule/>}/>
                <Route path="/edit/:edit" element={<EditSchedule/>}/>
            </Routes>
    </>
}