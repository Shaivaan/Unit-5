import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addData } from "../../Redux/action";
import "./home.css";



export const Home = ()=>{

    const data = useSelector((store)=>{return store.data}) || [];
    const dispatch = useDispatch();
    let [show,setShow] = useState([]);

    

    useEffect(()=>{
            fetchData();
    },[])

    const fetchData=()=>{
        fetch("http://localhost:3001/cities").then((res)=>{
            res.json().then((res)=>{
                dispatch(addData(res)); 
                setShow([...res]);
            })
        })
    }


    const Sortt=(a)=>{
        let arr = show;
        if(a == 1){
            arr = arr.sort((a,b)=>{return a.population- b.population}); 
           
        }else if(a == -1){
            arr = arr.sort((a,b)=>{return b.population-a.population});
            
        }
        console.log(arr)
        setShow([...arr]);
    }



    const DeleteCity = (id)=>{
        let task = false;

        fetch(`http://localhost:3001/cities/${id}`,{
            method:"DELETE"
        }).then((res)=>{
            task = true;
        })
            fetchData();
        

    }


    return <>
        <h1>Home</h1>

        <div id = "sort-nav">
            <button onClick={()=>{Sortt(1)}}>Population in Ascending Order</button>
            <button onClick={()=>{Sortt(-1)}}>Population in Descending Order</button>
        </div>
    <br />
        <div id = "add">
            <Link to = "/add-country"><div>Add Country</div></Link>
            <Link to = "/add-city"><div>Add City</div></Link>
            
        </div>

        <table>
            <tbody>
            <tr>
            
            <th>Id</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
           
            </tr>
                {show.map((el,i)=>{
                    
                    return <tr key={el.id}>
                    <td>{i+1}</td>
                    <td>{el.country}</td>
                    <td>{el.name}</td>
                    <td>{el.population}</td>
                    <td><Link to ={`/edit/${el.id}`}><button>Edit</button></Link></td>
                    <td><button onClick={()=>{DeleteCity(el.id)}}>Delete</button></td>
                    </tr>
                })}
            
            </tbody>
        </table>
    </>
}