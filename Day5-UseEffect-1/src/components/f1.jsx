import { useEffect, useState } from "react"

function Groc(){

    const [counter1,setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0);

    // console.log(1)
    useEffect(()=>{
        console.log(2);
    },[counter1])

    useEffect(()=>{
        console.log(3);
    },[counter2])

    // console.log(4);


    return (
        <div>
        <div>A Haalo</div>
        <button onClick={()=>{
            setCounter1(counter1+1)
        }}>Add1</button>
        <button onClick={()=>{
            setCounter2(counter2+1)
        }}>Add2</button>
        <h1>Counter:{counter1}</h1>
        <h1>Counter:{counter2}</h1>
        </div>
    )
}
export {Groc};