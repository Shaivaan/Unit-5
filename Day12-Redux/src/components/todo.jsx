import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { addTodo } from "../Redux/action";
import { store } from "../Redux/store";

export const Todo = ()=>{
    const [text,setText] = useState("");
    const dispatch = useDispatch();
    const [init_data,setInit_data] = useState([]);
    const todo = useSelector((store)=>{return store.todo});

    useEffect(()=>{
       
if(todo.length == 0){

    fetch("http://localhost:3001/todo").then((res)=>{
        res.json().then((res)=>{
             console.log(res)
            res.map((aa)=>{
                console.log(aa);
                dispatch(addTodo(aa));
            })
            
         })
     })

}


        
    },[])
    

    return <div>
        <input type="text" placeholder="Add Task" onChange={(e)=>{setText(e.target.value)}}/>
        <button onClick={()=>{
            
            const body = {
                data:text,
                status:false
            }

            fetch("http://localhost:3001/todo",{
                method:"POST",
                body:JSON.stringify(body),
                headers:{
                    "content-type":"application/json"
                }
            }).then((res)=>{
              res.json().then((res)=>{
                  console.log(res);
                  dispatch(addTodo(res));
                })
            })
        }}>Add</button>
        


      {todo.map((a,i)=>{
          console.log(a);
        // console.log(todo);
          return <div>
             <Link to = {`/todo/${i+1}`}><h3 key={i}>{a.data}</h3></Link>
                <button onClick={(e)=>{
                  
                    fetch(`http://localhost:3001/todo/${a.id}`,{
                        method:"DELETE",
                        headers:{
                            "content-type":"application-json"
                        }
                    })
                    e.target.parentNode.remove();
                }}>Delete</button>
          </div>
      })}
    </div>
}