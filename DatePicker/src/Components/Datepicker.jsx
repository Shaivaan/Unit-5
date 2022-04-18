import React, { useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';

export const DatePickerr =()=> {
  const [value, onChange] = useState("");
  const [value2, onChange2] = useState("");
  const [range,setRange] = useState(0);  
  const [dis,setDis] = useState(false);  


  useEffect(()=>{
    convertMiliseconds((value2-value),"days");
  },[value,value2])
  function convertMiliseconds(miliseconds, format) {
    var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

    if(value !== ""){
        setDis(true)
    }
    
    total_seconds = parseInt(Math.floor(miliseconds / 1000));
    total_minutes = parseInt(Math.floor(total_seconds / 60));
    total_hours = parseInt(Math.floor(total_minutes / 60));
    days = parseInt(Math.floor(total_hours / 24));
    seconds = parseInt(total_seconds % 60);
    minutes = parseInt(total_minutes % 60);
    hours = parseInt(total_hours % 24);
    if(value !== "" && value2 !== "" ){
        if(days > 0){

            setRange(days);
        }else if(days < 0){
            alert("End Date is not Greater")
            onChange2("")
        }
        
    }
    switch(format) {
      case 's':
          return total_seconds;
      case 'm':
          return total_minutes;
      case 'h':
          return total_hours;
      case 'd':
          return days;
      default:
          return { d: days, h: hours, m: minutes, s: seconds };
    }
  }

  return (
      <>
    <div id = "main">
        <div>
        <h2>Start</h2>
      <DatePicker onChange={onChange} value={value} />
      </div>

      <div>
      <h2>End</h2>
      <DatePicker onChange={onChange2} value={value2} disabled= {dis== false}/>
      {/* {console.log(convertMiliseconds((value2-value),"days").d)} */}
      </div>
    </div>
      <h2>Range:{range} Day</h2>  
    </>
  );
}