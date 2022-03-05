import { useState } from "react"

function Comp(prop){
    const [value,setValue] = useState(prop.value)
    return (
        <div>
            <h1>Counter:{value}</h1>
            <button onClick={()=>{
                setValue(value+1)
            }}>Add</button>


            <button onClick={()=>{
                setValue(value-1)
            }}>Delete</button>


            <button onClick={()=>{
                setValue(value*2)
            }}>2x</button>
        </div>
    )
}

export {Comp}