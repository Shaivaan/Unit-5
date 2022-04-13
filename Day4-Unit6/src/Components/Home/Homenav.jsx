import { Link } from "react-router-dom";
import "./Home.css";
export const Homenav = ()=>{
    return <>
    <div id = "homenav">
        <Link to = "/"><div>Show</div></Link>
        <Link to = "/create"><div>Create</div></Link>
        {/* <div></div> */}
    </div>
        <br />
    </>
}