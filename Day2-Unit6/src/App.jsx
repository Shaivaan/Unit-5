import logo from './logo.svg';
import './App.css';
import {useReducer} from "react"
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Page1 } from './Forms/Page1';
import { Page2 } from './Forms/Page2';
function App() {
  

const navigate = useNavigate();
  const Navi = ()=>{
    navigate("/registration/one")
  }



  

  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element= {<Navi/>}/>
        <Route path='/registration/one' element = {<Page1/>}/>
        <Route path='/registration/two' element= {<Page2/>}/>
      </Routes>
    

    </div>
  );
}

export default App;
