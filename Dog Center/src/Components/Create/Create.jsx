import { useState } from "react";
import "./Create.css";
export const Create = ()=>{

    // {
    //     "Name": "Pet Hostel",
    //     "City": "pur",
    //     "Address": "B-57, 58, Dhruv Marg, J P Colony, Sector 4, Vidyadhar Nagar",
    //     "Capacity": 150,
    //     "CPD": 800,
    //     "Verified": "false",
    //     "Rating": 4.9,
    //     "Image": "https://www.caninecountryclubaz.com/wp-content/uploads/2019/03/shutterstock_140724097-min-1024x683.jpg",
    //     "id": 2
    //   },

    const [data,setData] = useState({
        Name: "",
        City: "",
        Address: "",
        Capacity: 0,
        CPD:0,
        Verified: "false",
        Rating: 0,
        Image: "",
        id: 0
    });

    const Change = (e)=>{
        setData({...data,[e.target.id]:e.target.value})
    }

    const Submit = ()=>{

        fetch("http://localhost:8080/data",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "content-type":"application/json"
            }
        }).then((res)=>{
            res.json().then((res)=>{
                console.log(res);
                alert("Succesful");
            })
        })


    }



    return <>
        <h1>Add</h1>
        <div id = "form">
            <div className = "inputt">
                <label htmlFor="">Name</label><br/>
                <input type="text" placeholder="Name"  id = "Name" onChange={Change}/><br/>
                <label htmlFor="">City</label><br/>
                <input type="text" placeholder="City" id = "City" onChange={Change} /><br/>
                <label htmlFor="">Capacity</label><br/>
                <input type="number" placeholder="Capacity" id = "Capacity" onChange={Change} /><br/>
                <label htmlFor="">Address</label><br/>
                <input type="text" placeholder="Address" id = "Address" onChange={Change} /><br/>
            </div>
            <div className = "inputt">
            <label htmlFor="">Cost Per day</label><br/>
                <input type="number" placeholder="Cost" id = "CPD" onChange={Change}/><br/>
                <label >IsVerified</label><br />
                <select id="Verified" onChange={Change}>
                    <option value="">isVerfied</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <br/>
               
                <label htmlFor="">Rating</label><br/>
                <select name="" id="Rating" onChange={Change}>
                    <option value="">Select Rating</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <label htmlFor="">ImageUrl</label><br/>
                <input type="text" placeholder="" id = "Image" onChange={Change}/><br/>
            </div>
        </div>
            <button onClick={Submit}>Submit</button>
    </>
}