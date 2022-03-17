import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const Productper = ()=>{
    const {id} = useParams();
    const [item,setItem] = useState({});
  
    useEffect(()=>{

        fetch(`http://localhost:3001/products/${id}`).then((res)=>{
            res.json().then((res)=>{
                console.log(res)
                setItem(res);
            })
        })


    },[])



    return <div>
            <h3>Name : {item.Name}</h3>
            <h3>Price : {item.price}</h3>
            <h3>Color : {item.Color}</h3>
            <h3>Country : {item.Country}</h3>
    </div>

}