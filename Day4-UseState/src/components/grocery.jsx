import { useState } from "react";

function Groc(){
    const [data,setData] = useState("");
    const [arr,setArr] = useState([]);
    function callAgain(i){
       
        arr.splice(i,1)
        setArr([...arr])

    }
    return (
        <div>
            <h1>Grocery List</h1>
            <input type="text" onChange={(e)=>{
                setData(e.target.value);
            }}/>
            <button onClick={()=>{
                setArr([...arr,data])
            }}>Submit</button> <br />
            <Todo value = {arr} change = {callAgain}/>
        </div>
    )
}

function Todo({value,change}){
   return value.map((a,index)=>{
        return (
            <h1>{a}<button onClick={()=>{change(index)}}>Delete</button></h1>
        )
    })
}

export {Groc};