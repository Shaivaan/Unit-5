import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { addEssData } from "../../Redux/action";
import { Bigcard } from "./Bigcard/Bigcard";
import { Create } from "./Create";
import "./Home.css";
import { Homenav } from "./Homenav";
import { Showpage } from "./Outer/Showpage/Showpage";
import { Sidebar } from "./Sidebar";



export const Home = ()=>{
  
    const navigate = useNavigate();
    const unique = useSelector((store)=>{return store.unique});
    useEffect(()=>{
        if(unique === ""){
            alert("Please Login");
            navigate("/login"); 
            return;
        }
    },[])
    

    return <>
        <div>
            {/* <Homenav/> */}
            <Routes>
                <Route path="/" element= {<Sidebar page = {<Showpage/>}/>}/>
               
            </Routes>
           
        </div>
    </>
}