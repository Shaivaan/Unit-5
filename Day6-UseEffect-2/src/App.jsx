import logo from './logo.svg';
import './App.css';
import { Stopwatch } from './components/stopwatch';
import { useState } from 'react';

function App() {
  const [fix,setFix] = useState(false);
  const [start,setStart] = useState("");
  const [end,setEnd] = useState("");


  return (
    <div className="App">
      <h2>Start Time</h2>
      <input type="text" placeholder='Start Time'  onChange={(e)=>{setStart(e.target.value)}}/><br />
      <h2>End Time</h2>
      <input type="text"  placeholder='End Time' onChange={(e)=>{setEnd(e.target.value)}}/>
      {console.log(start,end)}
      <br /><br />
      <button onClick={()=>{setFix(!fix)}}>Start Timer</button>
    
      {fix ? <Stopwatch start = {+start} end = {+end}/> :""}
    </div>



  );




}

export default App;
