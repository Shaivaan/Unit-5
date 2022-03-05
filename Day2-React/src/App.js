import logo from './logo.svg';
import './App.css';

var data = ["Android","Blackbery","Iphone","Windows Phone"];
var data2 = ["Samsung","HTC","Micromax","Apple"];

function Raju({dataa}){
    return (
      <ul>
      {dataa.map((el) =>{
        return (<li>{el}</li>)
      })}
    </ul>
    )
}


function App() {
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <Raju dataa={data} />
      <h1>Mobile Manufacturer</h1>
        <ul>{data2.map((el,i)=>{

          if(i == 0 || i == 1){ 
            return (<li className='styless'>{el}</li>)
            
          }else if(i == 2){ 
            return (<li className='abc'>{el}</li>)
          }else{
            return (<li className='sss'>{el}</li>)
          }
        })}</ul>
    </div>
  );
}

export default App;
