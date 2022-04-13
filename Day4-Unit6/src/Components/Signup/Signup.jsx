import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDatas } from "../../Redux/action";
import "./Signup.css";
export const Signup = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const datas = useSelector((store)=>{return store.userDatas});
    const [user,setUser] = useState({
        email:"",
        password:"",
        mobile:"",
        username:"",
        unique:Date.now()
    })



    useEffect(()=>{
        fetch("http://localhost:3001/user").then((res)=>{
            res.json().then((res)=>{
                dispatch(addDatas(res));
                console.log(res);
            })
        })
    },[])


    const Submit = (e)=>{
        let task = false;
        e.preventDefault();
        datas.forEach((el) => {
             if(el.email == user.email){
                 alert("Try with another email");
                 task = true;
                 return;
             }   
        });
        
      if(task == false){
          fetch("http://localhost:3001/user",{
              method:"POST",
              body:JSON.stringify(user),
              headers:{
                  "content-type":"application/json"
              }
          })
          navigate("/login");
        }
    }

    const handleChange = (e)=>{
        setUser({...user,[e.target.id]:e.target.value})
    }
    

    return <div>
        <form onSubmit={Submit}><br/>
            <label>Email</label><br/>
            <input type="text" placeholder="Enter your email" id = "email" onChange={handleChange}/><br/>
            <label>Password</label><br/>
            <input type="text" placeholder="Enter your password" id = "password" onChange={handleChange}/><br/>
            <label>Mobile</label><br/>
            <input type="number" placeholder="Enter your mobile" id = "mobile" onChange={handleChange}/><br/>
            <label>Username</label><br/>
            <input type="text" placeholder="Enter your username" id = "username" onChange={handleChange}/><br/>
            <input type="submit" value={"Submit"} />
        </form>
    </div>
}