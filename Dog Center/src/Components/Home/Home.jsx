import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../Redux/action";
import { Table } from "../Table/Table";
import "./Home.css";


export const Home = ()=>{

    const data = useSelector((store)=>{return store.data})||[];
    const dispatch = useDispatch();
    useEffect(()=>{
        All();
    },[])

    const All = ()=>{
        fetch("http://localhost:8080/data").then((res)=>{
            res.json().then((res)=>{
                dispatch(addData(res));
            })
        })
    }

    


    const Change=(e)=>{
        if(e.target.value == "City"){

            fetch("http://localhost:8080/data?_sort=City").then((res)=>{
                res.json().then((res)=>{
                    dispatch(addData(res));
                    console.log("city")
                })
            })   


        }else if(e.target.value == "Cost Per Day"){

            fetch("http://localhost:8080/data?_sort=CPD").then((res)=>{
                res.json().then((res)=>{
                    dispatch(addData(res));
                })
            })


        }else if(e.target.value == "Rating"){

            fetch("http://localhost:8080/data?_sort=Rating").then((res)=>{
                res.json().then((res)=>{
                    dispatch(addData(res));
                })
            })

        }else if(e.target.value == "All"){
            All();
        }else if(e.target.value == "Verified"){

            fetch("http://localhost:8080/data?Verified=true").then((res)=>{
                res.json().then((res)=>{
                    dispatch(addData(res));
                })
            })

        }
    }


    return <>
        <h1>Home</h1>
        <span>
            <span>Filter : </span>
            <select onChange={Change}>
                <option value="All">None</option>
                <option value="City">City</option>
                <option value="Cost Per Day">Cost Per Day</option>
                <option value="Rating">Rating</option>
                <option value="Verified">Verified</option>
            </select>
            </span>

            <Table data = {data}/>            
    </>
}