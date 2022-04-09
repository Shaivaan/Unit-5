import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { RegistrationContext } from "../Contexts/RegistrationContext"

export const Page1 = ()=>{

    const {state,dispatch} = useContext(RegistrationContext);
    const [check,setCheck] = useState(false)

    const navigate = useNavigate();

    useEffect(()=>{
        if(state.name !== "" && state.dob !== null&&state.age !== 0 ){
            setCheck(!check);
        }
    },[state])



    return <div>
        <form>
            <input type="text" placeholder="Enter Your Name" onChange={(e)=>{dispatch({type:"Name",payload:e.target.value})}}/><br/>
            <input type="number" placeholder="Enter Your Age" onChange={(e)=>{dispatch({type:"Age",payload:e.target.value})}}/><br/>
            <input type="date" placeholder="Enter Your DOB" onChange={(e)=>{dispatch({type:"Dob",payload:e.target.value})}}/><br/>
           <input type="submit" onClick={()=>{navigate("/registration/two")}}  disabled={check == false}  value={"Submit"} />
           
        </form>
    </div>
}