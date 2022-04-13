import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"

export const Edit = ()=>{

    const {id} = useParams();
    const unique = useSelector((store)=>{return store.unique});
    const [task,setTask] = useState({
        title:"",
        description:"",
        subtask:[],
        tags:"",
        unique:unique,
        status:"todo"
    })
    const navigate = useNavigate();


    useEffect(()=>{
        fetch(`http://localhost:3001/todo/${id}`).then((res)=>{
            res.json().then((res)=>{
                setTask(res);
                console.log(res);
            })
        })
    },[])

    const handleChange = (e)=>{
        e.preventDefault();
        setTask({...task,[e.target.id]:e.target.value})
    }

    const handleEdit = (e)=>{
        e.preventDefault();
        fetch(`http://localhost:3001/todo/${id}`,{
            method:"PATCH",
            body:JSON.stringify(task),
            headers:{
                "content-type":"application/json"
            }
        })
        alert("Successful");
       
    }


    
    return    <>
    <h1>Edit the way you want</h1>
    <form onSubmit={handleEdit}><br/>
    <label>Title</label><br/>
    <input type="text" placeholder="Title" id = "title" value={task.title} onChange= {handleChange}/><br/>
    <label>Description</label><br/>
    <input type="text" placeholder="Description" id = "description" value={task.description} onChange= {handleChange} style={{width:"300px",height:"250px"}}/><br/>
    <label>SubTask</label><br/>

    <input type="text" placeholder="Enter SubTask and press Enter" id = "subtask"/><br/>
  
    <label>Tags</label><br/>
     <select id = "tags" onChange= {handleChange}>
    <option value={task.tags}>Select Tag</option>
     <option>Personal</option>
     <option>Professional</option>
     <option>Others</option>
     </select><br/><br />
    <select value={task.status} onChange= {handleChange} id = "status">
        <option value={""}>Edit Status</option>
        <option value={"todo"}>Todo</option>
        <option value={"done"}>Done</option>
        <option value={"progress"}>Progress</option>
    </select><br/><br/>
    <input type="submit" value={"Edit"} />
</form>
</>
}