import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addTodo, blankTodo } from "../Redux/todo/action";

export const Home=()=>{
    const auth = useSelector((store)=>{return store.auth.auth});
    const navigate = useNavigate();
    const todo = useSelector((store)=>{return store.todo.todo});
    const [text,setText] = useState("")
    const dispatch = useDispatch()
    useEffect(()=>{
        if(auth == false){
            navigate("/login");
            return;
        }

        if(todo.length == 0){
            bulao();
        }


    },[])

    const bhejo = ()=>{
        let body = {
            title:text,
            status:false
        }
        fetch("http://localhost:3001/todo",{
            method:"POST",
            body:JSON.stringify(body),
            headers:{
                "content-type":"application/json"
            }
        })
    }

    const bulao = ()=>{
        dispatch(blankTodo([]));
        fetch("http://localhost:3001/todo").then((res)=>{
            res.json().then((res)=>{
                res.map((a)=>{
                    dispatch(addTodo(a));
                })
            })
        })
    }

    const khatam=(id)=>{
        fetch(`http://localhost:3001/todo/${id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        })
    }

    return <div>
        <h1>HomePage</h1>
        <input type="text" placeholder="Add Todo" onChange = {(e)=>{setText(e.target.value)}} />
        <button  onClick={()=>{
            bhejo();
            bulao();
            console.log(todo)
        }} >Add Task</button>


        {todo.map((el)=>{
            return <div>
            <h2>{el.title}</h2>
            <button  onClick={()=>{khatam(el.id);   bulao();}}>Delete</button>
            </div>
        })}


    </div>
}