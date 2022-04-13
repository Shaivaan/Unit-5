import { useState } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { Homenav } from "./Homenav"

export const Create = ()=>{
    const navigate = useNavigate();
    const unique = useSelector((store)=>{return store.unique});
    const [task,setTask] = useState({
        title:"",
        description:"",
        subtask:"",
        tags:"",
        unique:unique,
        status:"todo"
    })


    const handleChange = (e)=>{
        e.preventDefault();
        setTask({...task,[e.target.id]:e.target.value})
    }

    // const handleSubTask = (e)=>{
         
    //         if(e.keyCode == 13){
    //             setTask({...task,[e.target.id]:[...task.subtask,e.target.value]});      
    //         }
    // }

   const handleSubmit = (e)=>{
    e.preventDefault();
    if(e.keyCode == 13){ 
        return;
    } 
    fetch("http://localhost:3001/todo",{
        method:"POST",
        body:JSON.stringify(task), 
        headers:{
            "content-type":"application/json"
        }
    })
    alert("Successfull");
   

   }

    return <>        
    <form><br/>
        <label>Title</label><br/>
        <input type="text" placeholder="Title" id = "title" onChange={handleChange}/><br/>
        <label>Description</label><br/>
        <input type="text" placeholder="Description" id = "description" onChange={handleChange} style={{width:"300px",height:"250px"}}/><br/>
        <label>SubTask</label><br/>

        <input type="text" placeholder="Enter SubTask and press Enter" id = "subtask" onChange={handleChange}/><br/>
      
        <label>Tags</label><br/>
         <select onChange={handleChange} id = "tags">
        <option value={""}>Select Tag</option>
         <option>Personal</option>
         <option>Professional</option>
         <option>Others</option>
         </select><br/>
        <input type="submit" value={"Submit"} onClick= {handleSubmit} />
    </form></>
}