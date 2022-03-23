import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export const Task = ()=>{
    const {id} = useParams();
    const [toggle,setToggle] = useState({})
    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`http://localhost:3001/todo/${id}`).then((res)=>{
            res.json().then((res)=>{
                console.log(res,2);
              
               setToggle(res)
            })
        })
        
    },[])
    return <div>
        <button onClick={()=>{navigate("/")}}>Go To Todos</button>
    <br /><br />

        Task:{toggle.data}<br/>
        Completed:{toggle.status ? "Yes": "No"}
        <br/>
        <button onClick={()=>{

            fetch(`http://localhost:3001/todo/${id}`,{
                method:"PATCH",
                body:JSON.stringify({status:(!toggle.status)}),
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })


            setToggle({...toggle,status:(!toggle.status)})
        }}>Change</button>



    </div>
}