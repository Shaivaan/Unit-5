import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationContext } from "../Contexts/RegistrationContext";

export const Page2 = () => {
    const { state, dispatch } = useContext(RegistrationContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (state.name == "") {
            navigate("/registration/one");
        }
    });


    const Submit = (e)=>{
        e.preventDefault();

        if(state.residence == null && state.address == null&& state.pincode == 0){
            alert("Enter Correct Details")
            return
        }

        fetch("http://localhost:3001/users",{
            method:"POST",
            body:JSON.stringify(state),
            headers:{
                "content-type":"application/json"
            }
        })

        alert("Successfull");
    }


    return (
        <div>
            <form onSubmit={Submit}>
               
                <input
                    type="text"
                    placeholder="Enter Your Residence"
                    onChange={(e) => {
                        dispatch({ type: "Res", payload: e.target.value });
                    }}
                />
                <br /><br />
                <input
                    type="text"
                    placeholder="Enter Your Address"
                    onChange={(e) => {
                        dispatch({ type: "Add", payload: e.target.value });
                    }}
                />
                <br /><br />
                <input
                    type="text"
                    placeholder="Enter Your Pincode"
                    onChange={(e) => {
                        dispatch({ type: "Pin", payload: e.target.value });
                    }}
                /><br/><br />
                <input type="submit" value={"Submit"} />
            </form>
        </div>
    );
};
