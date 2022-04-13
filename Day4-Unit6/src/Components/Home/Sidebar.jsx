import { Bigcard } from "./Bigcard/Bigcard";
import "./Home.css";
import { Homenav } from "./Homenav";
import { Showpage } from "./Outer/Showpage/Showpage";

export const Sidebar =({page})=>{

    const removee=()=>{
        localStorage.clear();
        window.location.reload(false);
    }

    return <>




    <div id = "sidebarmain">
        <div id = "sidelef">

            <div id = "upp"><img src = "https://images-na.ssl-images-amazon.com/images/I/41da3NERJ4L.png" width={"100%"} height={"100%"} /></div>
            <div id ="logg" onClick={removee}>LogOut</div>

        </div>
        <div id = "siderig">
            <Homenav/>
           {page}
        </div>
        </div>
    </>
}