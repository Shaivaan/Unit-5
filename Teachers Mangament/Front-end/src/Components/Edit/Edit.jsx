import { useEffect, useState } from "react"

import { Link, useParams } from 'react-router-dom';

export const EditSchedule = ()=>{
    const {edit} = useParams();
    const [body,setBody] = useState({
        subject:"",
        grade:"",
        section:""
       
    })

    useEffect(()=>{

        fetch(`https://schooanagement.herokuapp.com/class/${edit}`).then((res)=>{
                res.json().then((res)=>{
                    setBody({
                        subject:res.subject,
                        grade:res.grade,
                        section:res.section
                    })
                    console.log(res);
                })
        })

    },[])

    const handleChange = (e)=>{

      
            setBody({...body,[e.target.id]: e.target.value});
        
    }


    const ClassEdit = (e)=>{
        e.preventDefault();
        let matter = body
        fetch(`https://schooanagement.herokuapp.com/class/${edit}`,{
            method:"PATCH",
            body:JSON.stringify(matter),
            headers:{
                "content-type":"application/json"
            }
        })
        alert("Successful");
    }

    return <>
    <Link to ="/home"><button>Home</button></Link>
        <h1>Edit Class</h1>
        <form onSubmit={ClassEdit}>
            <label>Subject</label><br/>
            <input type="text" placeholder="Enter Subject" id = "subject" onChange={handleChange}/><br/>
            <label>Grade</label><br/>
            <input type="text" placeholder="Enter Grade" id = "grade" onChange={handleChange}/><br/>
            <label>Section</label><br/>
            <input type="text" placeholder="Enter Section" id = "section" onChange={handleChange} /><br/>
            <input type="submit" value={"Edit"} /><br/>
        </form>
    </>
}