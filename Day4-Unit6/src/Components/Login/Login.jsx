import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDatas, addUnique } from "../../Redux/action";
import "./Login.css";

export const Login = ()=>{
    const datas = useSelector((store)=>{return store.userDatas});
    const navigate = useNavigate();
    const dispatch = useDispatch();
   
    const [loginuser,setLoginUser] = useState({
        email:"",
        password:"",
    })


    useEffect(()=>{
        fetch("http://localhost:3001/user").then((res)=>{
            res.json().then((res)=>{
                dispatch(addDatas(res));
                console.log(res);
            })
        })
    },[])
    
    const handleChange = (e)=>{
        setLoginUser({...loginuser,[e.target.id]:e.target.value})
    }

    const Submit = (e)=>{
        e.preventDefault();
       let task = false;
       datas.forEach((el) => {
           if(el.email == loginuser.email && el.password == loginuser.password){
               localStorage.setItem("unique",JSON.stringify(el.unique));
               dispatch(addUnique(el.unique));
                task = true;
           }
       });

        if(task == true){
            alert("Login Successful");
                navigate("/");
        }else{ 
            alert("Invalid Credentials");
        }
       

    }

       return <div>
        <form onSubmit={Submit}><br/>
            <label>Email</label><br/>
            <input type="text" placeholder="Enter your email" id = "email" onChange={handleChange}/><br/>
            <label>Password</label><br/>
            <input type="text" placeholder="Enter your password" id = "password" onChange={handleChange}/><br/>
            <input type="submit" value={"Submit"} />
        </form>
    </div>
    
}