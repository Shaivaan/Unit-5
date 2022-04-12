import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export const Dashboard = ()=>{

    const auth = useSelector((store)=>{return store.auth});   ; 
    const navigate = useNavigate();
    useEffect(()=>{
        if(auth == false){
            alert("Please Login");
            navigate("/login");
        }
    },[])

    return <>
        <h1>Dashboard</h1>
    </>
}