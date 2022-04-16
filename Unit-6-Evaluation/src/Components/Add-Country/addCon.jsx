import { useState } from "react"
import { Link } from "react-router-dom";


export const AddCountry = ()=>{

    const [country,setCountry] = useState({
        country:""
    });

const handleChange = (e)=>{

    setCountry({[e.target.id]: e.target.value});

}

const CityAdd = (e)=>{
    e.preventDefault();
    let matter = country;
    fetch("http://localhost:3001/countries",{
        method:"POST",
        body:JSON.stringify(matter),
        headers:{
            "content-type":"application/json"
        }
    })
    alert("Successful");
}


    return <>



        <h1>AddCountry</h1>
        <Link to ="/"><button>Home</button></Link>
        <form onSubmit={CityAdd}>
            <label>Country</label><br/>
            <input type="text" placeholder="Enter Country Name" id = "country" onChange={handleChange}/><br/>
           <input type="submit" value={"ADD Country"}  />
        </form>
    </>
}