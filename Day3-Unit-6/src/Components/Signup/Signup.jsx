import { useState } from "react"
export const Signup = ()=>{

    const [data,setData] = useState({
        email:"",
        password:"",
        username:"",
        mobile:0,
    })

    const Submit=(e)=>{
        e.preventDefault();
        fetch("http://localhost:3001/data",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "content-type":"application/json"
            }
        }).then((res)=>{
            res.json().then((res)=>{
                console.log(res);
            })
        })
    }

    const handleChange = (e)=>{
        setData({...data,[e.target.id]:e.target.value});
    }

  return  <>
        <h1>Signup</h1>
        <form>
            <input type="text" placeholder="Email"  id = "email" onChange={handleChange}/>
            <input type="text" placeholder="Password" id = "password" onChange={handleChange} />
            <input type="text" placeholder="Username" id = "username" onChange={handleChange} />
            <input type="number" placeholder="Mobile" id = "mobile" onChange={handleChange} />
            <input type="submit" value={"Submit"}  onClick = {Submit} />
        </form>
    </>
}