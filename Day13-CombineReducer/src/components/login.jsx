import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addChange } from "../Redux/authState/action";

export const Login = ()=>{

    const [authState,setauthState] = useState(false);
    const dispatch = useDispatch();
    const auth = useSelector((store)=>{return store.auth.auth})
    console.log(auth)



    const LogInn = ()=>{
        fetch("https://reqres.in/api/login",{
            method:"POST",
            body:JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }),
            headers:{
                "content-type":"application/json"
            }
        })
        dispatch(addChange(auth));
        console.log(auth)
        var status = localStorage.setItem("status",!auth);
    }


    return <button onClick={()=>{

        if(auth == false){
            LogInn();
        }else{
            dispatch(addChange(auth))
            localStorage.clear();
           
        }

    }} >{auth ? "Logout":"Login"}</button>
}