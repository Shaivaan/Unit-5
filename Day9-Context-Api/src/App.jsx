import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import { Status } from './components/status';

function App() {
  return (
    <div className="App">
    <h1>Hello</h1>

   <Navbar/>
   <Status/>
    </div>
  );
}

export default App;
