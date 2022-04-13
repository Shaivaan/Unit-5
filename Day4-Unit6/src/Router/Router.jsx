import { Route, Routes } from "react-router-dom"
import { Create } from "../Components/Home/Create"
import { Edit } from "../Components/Home/Edit"
import { Home } from "../Components/Home/Home"
import { Sidebar } from "../Components/Home/Sidebar"
import { Login } from "../Components/Login/Login"
import { Navbar } from "../Components/Navbar/Navbar"
import { Signup } from "../Components/Signup/Signup"
import { Todo } from "../Components/Todo/Todo"

export const Router = ()=>{




    return <div>
       <Navbar/>
       <Routes>
           <Route path="/" element= {<Home/>}></Route>
           <Route path="/login" element= {<Login/>}></Route>
           <Route path="/signup" element= {<Signup/>}></Route>
           <Route path="/create" element = {<Sidebar page = {<Create/>}/>}/>
           <Route path="/edit/:id" element = {<Sidebar page = {<Edit/>}/>}/>
           
       </Routes>
    
    </div>
}