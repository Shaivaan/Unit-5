import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addEssData } from "../../../../Redux/action";
import { Card } from "../../Card/Card";
import "./Showpage.css";
export const Showpage = () => {

    const essData = useSelector((store)=>{return store.essData});
    const unique = useSelector((store)=>{return store.unique});
    const dispatch = useDispatch();
    let [todo,setTodo] = useState([]);    
    let [progress,setProgress] = useState([]);
    let [done,setDone] = useState([]);


    useEffect(()=>{
        fetch("http://localhost:3001/todo").then((res)=>{
            res.json().then((res)=>{
                let arr = [];
                res.forEach((el) => {
                    if(el.unique === unique){
                        arr.push(el);
                    }
                });
                dispatch(addEssData(arr));
                Datafilling(arr);
            })
        })



    },[])


    function Datafilling(ar){
        let arr1 = [];
        let arr2 = [];
        let arr3 = [];
        ar.forEach((el)=>{
            if(el.status == "todo"){
                arr1.push(el);
            }else if(el.status == "progress"){
                arr2.push(el);
            }else if(el.status == "done"){
                arr3.push(el);
            }

        })
        setTodo(arr1);
        setProgress(arr2);
        setDone(arr3);
    }


  return (
    <div id="show">
      <div className="showIn">
        <h2>Todo</h2>
        <div>
        {todo.map((el)=>{
          return <Card cardData = {el} key={el.id}/>
        })}
        </div>
      </div>
      <div className="showIn">
        <h2>In Progress</h2>
        <div>
        {progress.map((el)=>{
          return <Card cardData = {el}/>
        })}
        </div>
      </div>
      <div className="showIn">
        <h2>Done</h2>
        <div>
        {done.map((el)=>{
          return <Card cardData = {el}/>
        })}
        </div>
      </div>
    </div>
  );
};
