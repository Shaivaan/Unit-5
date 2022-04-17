import { useState } from "react"

import { Link, useParams } from 'react-router-dom';

export const CreateSchedule = ()=>{
    const {classs} = useParams();
    const [body,setBody] = useState({
        subject:"",
        grade:"",
        section:"",
        teacher_id:classs
    })

    const handleChange = (e)=>{
            setBody({...body,[e.target.id]: e.target.value});
    }


    const AddClass = (e)=>{
        e.preventDefault();
        let matter = body
        fetch(`https://schooanagement.herokuapp.com/class`,{
            method:"POST",
            body:JSON.stringify(matter),
            headers:{
                "content-type":"application/json"
            }
        })
        alert("Successful");
    }

    return <>
    <Link to ="/home"><button>Home</button></Link>
        <h1>Add Class</h1>
        <form onSubmit={AddClass}>
            <label>Subject</label><br/>
            <input type="text" placeholder="Enter Subject" id = "subject" onChange={handleChange}/><br/>
            <label>Grade</label><br/>
            <input type="text" placeholder="Enter Grade" id = "grade" onChange={handleChange}/><br/>
            <label>Section</label><br/>
            <input type="text" placeholder="Enter Section" id = "section" onChange={handleChange} /><br/>
            <input type="submit" value={"Submit"} /><br/>
        </form>
    </>
}