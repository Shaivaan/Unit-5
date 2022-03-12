const { useState, useEffect } = require("react");

function Stopwatch(props){
    const [end,setEnd] = useState(props.end);
    const [timer,setTimer] = useState(props.start);

    

    useEffect(()=>{
      let id =  setInterval(()=>{
            setTimer((timer)=>{
               
                if(timer == end-1){
                    clearInterval(id);
                }

                return timer+1;
            })
        },1000)

        return ()=>{
            clearInterval(id);
        }

    },[])
    // if(timer >= end ){
    //     alert("Hosiyaari Nhi");
    //     return "";
    // }

    return <h1>
        Timer:{timer}
    </h1>

}

  

export {Stopwatch};