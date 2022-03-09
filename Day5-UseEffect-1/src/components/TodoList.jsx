import { useEffect, useState } from "react";
function Todo(){
const [text,setText] = useState("");
const [grocery,setGrocery] = useState([]);
const [counter,setCounter] = useState(0);
const [page,setPage] = useState(1);
useEffect(()=>{
    fetch(`http://localhost:3001/groceries?_limit=3&_page=${page}`)
    .then((res)=>{
        res.json().then((res)=>{
            console.log(1)
            getData(res)
        })
    })
},[page])
console.log(grocery)
console.log(2)
function getData(res){
        setGrocery(res);
}
    return(
        <div>
            <input type="text" placeholder="Add Grocery" onChange={(e)=>{
                setText(e.target.value);
            }}/>
            <button onClick={()=>{
                // console.log(text);
               fetch("http://localhost:3001/groceries",{
                   method:"POST",
                   body:JSON.stringify({title:text,status:false}),
                   headers:{
                       "content-type":"application/json"}
               }).then(()=>{
                   setCounter(counter+1);
               })
            }}>Add Grocery</button>
            <br />
            <button onClick={()=>{
                setPage(page+1)
            }}>Next</button>
            <button onClick={()=>{
                if(page > 0){
                    setPage(page-1)
                }
            }}>Prev</button>
           {grocery.map((a)=>{
               return (
                   <div>
                       <h1>{a.title}</h1>
                   </div>
               )
           })}
        </div>
    )
}
export {Todo};