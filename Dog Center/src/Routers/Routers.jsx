import { Route, Routes } from "react-router-dom"
import { Create } from "../Components/Create/Create"
import { Home } from "../Components/Home/Home"
import { Navbar } from "../Components/Navbar/Navbar"
import { ShowOne } from "../Components/ShowOne/ShowOne"

export const Routers = ()=>{


    return <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/listing/create" element={<Create/>}/>
            <Route path="/listing/:id" element={<ShowOne/>}/>
        </Routes>
        </>


}