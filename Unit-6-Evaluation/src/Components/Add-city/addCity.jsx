import { useState } from "react"
import { Link } from "react-router-dom";

export const AddCity = ()=>{

    const [body,setBody] = useState({
        name:"",
        country:"",
        population:0
    })

    const handleChange = (e)=>{

        if(e.target.id == "population"){

            setBody({...body,[e.target.id]: (+e.target.value)});
        }else{ 
            setBody({...body,[e.target.id]: e.target.value});
        }
    }


    const CityAdd = (e)=>{
        e.preventDefault();
        let matter = body
        fetch("http://localhost:3001/cities",{
            method:"POST",
            body:JSON.stringify(matter),
            headers:{
                "content-type":"application/json"
            }
        })
        alert("Successful");
    }

    return <>
    <Link to ="/"><button>Home</button></Link>
        <h1>AddCity</h1>
        <form onSubmit={CityAdd}>
            <label>City</label><br/>
            <input type="text" placeholder="Enter City Name" id = "name" onChange={handleChange}/><br/>
            <label>Country</label><br/>
            <input type="text" placeholder="Enter Country Name" id = "country" onChange={handleChange}/><br/>
            <label>Population</label><br/>
            <input type="number" placeholder="Enter Population" id = "population" onChange={handleChange} /><br/>
            <input type="submit" value={"Submit"} /><br/>
        </form>
    </>
}