import { Nav } from "../Navbars/LogNav/Nav"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Register=()=>{

    const navigate = useNavigate();

    const [admin,setAdmin] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    phone:""
    })
    
    const handleChange = (e)=>{
            setAdmin({...admin,[e.target.id]: e.target.value});
        }
    
        const RegisterSubmit = (e)=>{
            e.preventDefault();
            fetch("https://schooanagement.herokuapp.com/register",{
                method:"POST",
                body:JSON.stringify(admin),
                headers:{
                    "content-type":"application/json"
                }
            }).then((res)=>{
                res.json().then((res)=>{
                    if(res.status == "Done"){
                        alert("Successfull");
                        navigate("/login");
                        return;
                    }else{ 
                        alert("Failed");
                    }
                })
            })
        }

    return <>
        <Nav/>
        <h1>Sign Up</h1>
        <form onSubmit={RegisterSubmit}>
            <label >First Name</label><br/>
            <input type="text" placeholder="Enter your Name" id = "first_name" onChange={handleChange}/><br/>
            <label >Last Name</label><br/>
            <input type="text" placeholder="Enter your Name" id = "last_name" onChange={handleChange}/><br/>
            <label >Email</label><br/>
            <input type="text" placeholder="Enter your Email" id = "email" onChange={handleChange}/><br/>
            <label >Password</label><br/>
            <input type="text" placeholder="Enter your Password" id = "password" onChange={handleChange}/><br/>
            <label >Phone</label><br/>
            <input type="text" placeholder="Enter your Phone" id = "phone" onChange={handleChange}/><br/>
            <input type="submit" value = {"Submit"} />
            
        </form>
    </>
}