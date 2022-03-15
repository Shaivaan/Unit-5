import { useContext } from "react"
import {AuthContext} from "../Contexts/AuthContext";


export const Status=()=>{
    // const {isAuth,toggleAuth} = useContext();
    const {isAuth,toggleAuth} = useContext(AuthContext);
    return <div>
    <h1>Status:{isAuth ? <u>200</u> : ""}</h1>
    <h2>Token: {isAuth? <u>QpwL5tke4Pnpja7X4</u>:""}</h2>
    </div>
}