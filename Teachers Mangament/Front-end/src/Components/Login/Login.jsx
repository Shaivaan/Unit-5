import { Nav } from "../Navbars/LogNav/Nav";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Login = () => {

    const navigate = useNavigate();
    const auth = useSelector((store)=>{return store.auth})
    const [admin,setAdmin] = useState({
       
        email:"",
        password:"",
      
        });

        useEffect(()=>{
          if(auth == true){
            navigate("/home");
          }
        },[])


  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.id]: e.target.value });
  };

  const LoginSubmit = (e)=>{
    e.preventDefault();
    fetch("https://schooanagement.herokuapp.com/login",{
        method:"POST",
        body:JSON.stringify(admin),
        headers:{
            "content-type":"application/json"
        }
    }).then((res)=>{
        res.json().then((res)=>{
            if(res.status == "Done"){
                alert("Successfull");
                navigate("/home");
                localStorage.setItem("auth",true);
                localStorage.setItem("once",true)
                return;
            }else{ 
                alert("Failed");

            }
        })
    })
}


  return (
    <>
      <Nav />
      <h1>Login</h1>
      <form onSubmit={LoginSubmit}>
      <label>Email</label>
      <br />
      <input
        type="text"
        placeholder="Enter your Email"
        id="email"
        onChange={handleChange}
      /><br/>
      <label >Password</label><br/>
            <input type="text" placeholder="Enter your Password" id = "password" onChange={handleChange}/><br/>
            <input type="submit" value = {"Submit"} />
      <br />
      </form>
    </>
  );
};
