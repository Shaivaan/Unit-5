import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ShowOne.css";
export const ShowOne = ()=>{

    const [data,setData] = useState({});
    const {id} = useParams();
    useEffect(()=>{

        fetch(`http://localhost:8080/data/${id}`).then((res)=>{
            res.json().then((res)=>{
                setData(res);
                console.log(res);
            })
        })

    },[])

    return <>
        <h1>{data.Name}</h1>
        <img src={data.Image} height={"600px"} width= {"800px"} />
        <h3>Details</h3>
         
        <h4>Address : {data.Address}</h4>
        <h4>Capacity : {data.Capacity}</h4>
        <h4>Rating : {data.Rating}</h4>
    </>
}