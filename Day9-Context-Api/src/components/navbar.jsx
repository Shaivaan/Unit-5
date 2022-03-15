import { useContext } from "react";
import {AuthContext} from "../Contexts/AuthContext";


export const Navbar = ()=>{

    const {isAuth,toggleAuth} = useContext(AuthContext);
    
   return <div className='navbar'>
    <button onClick={()=>{
        if(isAuth === false){
            toggleAuth();

        }
         let data =  {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        

        fetch("https://reqres.in/api/login",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "content-type":"application/json"
            }
        }).then((res)=>{
           return res.json().then((res)=>{
               console.log(res);
           })
        })



    }}>Login</button>
    <button onClick={()=>{ 
        if(isAuth === true){
            toggleAuth();
        }
        }}>Logout</button>
  </div>

}