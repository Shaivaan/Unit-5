import { Route, Routes } from "react-router-dom"
import { AddCity } from "../Components/Add-city/addCity"
import { AddCountry } from "../Components/Add-Country/addCon"
import { Edit } from "../Components/Edit/edit"
import { Home } from "../Components/Home/home"

export const Routers = ()=>{
    return <>
    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-city" element={<AddCity/>}/>
        <Route path="/add-country" element={<AddCountry/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
    </Routes>
        
    </>
}