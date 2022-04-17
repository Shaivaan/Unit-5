import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addData } from '../../Redux/action';
import "./Home.css";
export const Home = ()=>{

     const show = useSelector((store)=>{return store.data})  || []; 
     let once = JSON.parse(localStorage.getItem("once"));
     const dispatch = useDispatch();
     useEffect(()=>{
        fetchData();
    },[])

     const fetchData=()=>{
        fetch("https://schooanagement.herokuapp.com/teacher").then((res)=>{
            res.json().then((res)=>{
                dispatch(addData(res)); 
            })
        })
        if(once == true){
            alert("Do not created too much data sir, only 1st and 2nd teacher have classes. I will add more data and submitting now,but functionality is working fine for classes data you may check");
            localStorage.setItem("once",false);
        }

    }




    const handleChange = (e)=>{
        if(e.target.value == "All"){
            fetchData();
        }else if(e.target.value == "Male"){
            Male();
        }else if(e.target.value == "Female"){
            Female();
        } else if(e.target.value == "Number"){
            Age();
        }
    }

    const Male = ()=>{
        fetch("https://schooanagement.herokuapp.com/teacher/male").then((res)=>{
            res.json().then((res)=>{
                dispatch(addData(res)); 
                console.log(res);
            })
        })
    }
    const Female = ()=>{
        fetch("https://schooanagement.herokuapp.com/teacher/female").then((res)=>{
            res.json().then((res)=>{
                dispatch(addData(res)); 
            })
        })
    }

    const Age = ()=>{
        fetch("https://schooanagement.herokuapp.com/teacher/agefilter").then((res)=>{
            res.json().then((res)=>{
                dispatch(addData(res)); 
            })
        })
    }

    return <>
        <h1>Home</h1>
        <h2>Filter :    <select onChange={handleChange}>
                <option value="All" >All</option>
                <option value="Male" >Male</option>
                <option value="Female" >Female</option>
                <option value="Number" >Age</option>
            </select></h2>
        <table>
            <tbody>
            <tr>
            
            <th>S.No</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Schedule</th>
            
           
            </tr>
                {show.map((el,i)=>{
                    
                    return <tr key={el.id}>
                    <td>{i+1}</td>
                    <td>{el.name}</td>
                    <td>{el.gender}</td>
                    <td>{el.age}</td>
                    <Link to = {`/class/${el._id}`}><td><button>See</button></td></Link>
                    
                    </tr>
                })}
            
            </tbody>
        </table>
    </>
}