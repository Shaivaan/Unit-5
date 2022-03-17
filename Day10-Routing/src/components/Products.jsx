import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export const Product = ()=>{
    const navigate = useNavigate();
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3001/products").then((res)=>{
            res.json().then((res)=>{
                console.log(res);
                setData(res);
            })
        })
    },[])
    return <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>More Detail</th>
        </tr>

        {data.map((a)=>{
           
            return <tr>
                <td>{a.Name}</td>
                <td>{a.price}</td>

               <Link to = {`/products/${a.id}`}><td>Go</td></Link>
            </tr>
        })}
        </table>
    </div>
}