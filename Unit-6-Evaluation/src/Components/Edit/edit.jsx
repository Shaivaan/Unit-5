import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export const Edit = ()=>{
   
const {id} = useParams();
const [body,setBody] = useState({
    name:"",
    country:"",
    population:null
})

    useEffect(()=>{

        fetch(`http://localhost:3001/cities/${id}`).then((res)=>{
                res.json().then((res)=>{
                    setBody({
                        name:res.name,
                        country:res.country,
                        population:res.population
                    })
                    console.log(res);
                })
        })

    },[])

const handleChange = (e)=>{

    if(e.target.id == "population"){

        setBody({...body,[e.target.id]: (+e.target.value)});
    }else{ 
        setBody({...body,[e.target.id]: e.target.value});
    }
}


const CityEdit = (e)=>{
    e.preventDefault();
    let matter = body
    fetch(`http://localhost:3001/cities/${id}`,{
        method:"PATCH",
        body:JSON.stringify(matter),
        headers:{
            "content-type":"application/json"
        }
    })
    alert("Successful");
}

            return <>
            <Link to ="/"><button>Home</button></Link>
            
            <h1>Edit</h1>
            <form onSubmit={CityEdit}>
            <label>City</label><br/>
            <input type="text" placeholder="Enter City Name" value = {body.name} id = "name" onChange={handleChange}/><br/>
            <label>Country</label><br/>
            <input type="text" placeholder="Enter Country Name" value = {body.country} id = "country" onChange={handleChange}/><br/>
            <label>Population</label><br/>
            <input type="number" placeholder="Enter Population" value = {body.population} id = "population" onChange={handleChange} /><br/>
            <input type="submit" value={"Edit"} /><br/>
        </form>
            </>
}
