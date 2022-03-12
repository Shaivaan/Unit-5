import { useEffect, useState } from "react"

function Forms(){
    const [marig,setMarig] = useState(false);
    const [come,setCome] = useState([]);
    const [page,setPage] = useState(1);
    const [data,setData] = useState({
        username:"",
        age:"",
        address:"",
        salary:"",
        department:"",
        marital:false
        
    })

    
    useEffect(()=>{
        fetch(`http://localhost:3001/users?_limit=3&_page=${page}`).then((res)=>{
             res.json().then((res)=>{
                 show(res)
                 console.log(page)
                // console.log(res)
            })
        })
    },[page])

    function show(res){
        setCome(res)
        console.log(come)
    }

    function handleChange(e){
        // e.preventDefault()
        setData({...data,
        [e.target.id]:e.target.value
        })
       
        console.log(e.target.value)
    }

    
    function submit(e){
        e.preventDefault()
        // console.log(marig)
       if(document.getElementById("marital").checked == true){
           chang1();
       }else{
        chang2();
       }
            console.log(data);
           fetch("http://localhost:3002/users",{
           method:"POST",
           body:JSON.stringify(data),
           headers:
               {"content-type":"application/json"}   
       })
    }

    
    function chang1(){
        setData({...data,marital:true})
    }
    function chang2(){
        setData({...data,marital:false})
    }

    return <div>
        <form onSubmit={submit}>
        <input type="text" placeholder="username" id="username" onChange={handleChange}/><br />
        <input type="number" placeholder="age" id = "age" onChange={handleChange}/><br/>
        <input type="address" placeholder="address" id = "address" onChange={handleChange}/><br/>
        <input type="salary" placeholder="salary" id = "salary" onChange={handleChange}/><br/>
        <span>Marital Status</span>

        
        <input type="checkbox"  id="marital"   

        

        /><br/>
        <span>Department</span>
        <select  onClick={handleChange} id="department"><option>Select</option><option value="technical">Technical</option><option value="inventory">Inventory</option></select><br />
        <input type="submit"  /><br/>
        </form><br />
        <button onClick={()=>{
            if(page>1){

                setPage(page-1)
            }
        }}>Prev</button>
        <button onClick={()=>{

            setPage(page+1)
        }}>Next</button>
        <br /><br />
        <table>
            <tr>
                <th>Name</th><th>Age</th><th>Address</th><th>Department</th><th>Salary</th>
            </tr>
        </table>
        {come.map((a)=>{
            return (
                <table>
                <tr>
                <td>{a.username}</td>
                <td>{a.age}</td>
                <td>{a.address}</td>
                <td>{a.department}</td>
               
                <td>{a.salary}</td>
                </tr>
                </table>
            )
        })}
    </div>
    
}

export {Forms}