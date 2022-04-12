import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addData, isAuth } from "../../Redux/Action";

export const Login = ()=>{
    const [checkdata,setCheckdata] = useState(null);
    const [loginData,setLoginData] = useState({email:"",password:""});
    const auth = useSelector((store) => {return store.auth});
    const dispatch  = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:3001/data").then((res)=>{
            res.json().then((res)=>{

                setCheckdata([...res])
                console.log(res);
            })
        })
    },[])

    const handleChange = (e)=>{
        setLoginData({...loginData,[e.target.id]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        checkdata.forEach((el) => {
            if(el.email === loginData.email && el.password === loginData.password){
                dispatch(addData(loginData));
                dispatch(isAuth(!auth));
                localStorage.setItem("auth",JSON.stringify(!auth));    
                alert("Login Succesful");
                navigate("/Dashboard");
                return;
            }
        });

        
    }

    return <>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder="Email"  id = "email" onChange={handleChange}/>
            <input type="text" placeholder="Password"  id = "password" onChange={handleChange}/>
            <input type="submit" value={"Submit"} onClick= {handleSubmit} />
        </form>
    </>
}