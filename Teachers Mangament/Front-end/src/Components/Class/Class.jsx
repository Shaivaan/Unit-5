import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addData } from '../../Redux/action';
export const Class = ()=>{

    const show = useSelector((store)=>{return store.data})  || []; 
    const {classs} = useParams();


    const dispatch = useDispatch();
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=()=>{
        fetch(`https://schooanagement.herokuapp.com/class/${classs}`).then((res)=>{
            res.json().then((res)=>{
                dispatch(addData(res)); 
            })
        })
    }
    
    return <>
    <Link to ="/home"><button>Home</button></Link>
        <h1>Class</h1>
        <Link to = {`/create/${classs}`}><button>Create class</button></Link>
        <table>
            <tbody>
            <tr>
            
            <th>S.No</th>
            <th>Grade</th>
            <th>Section</th>
            <th>Subject</th>
            <th>Edit</th>
            
           
            </tr>
                {show.map((el,i)=>{
                    
                    return <tr key={i}>
                        <td>{i+1}</td>
                    <td>{el.grade}</td>
                    <td>{el.section}</td>
                    <td>{el.subject}</td>
                    <td><Link to = {`/edit/${el._id}`}><td><button>Edit</button></td></Link></td>
                    
                    
                    </tr>
                })}
            
            </tbody>
        </table>
    </>
}