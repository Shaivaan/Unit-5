import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Route, Routes } from 'react-router-dom';
import { Product } from './components/Products';
import { Productper } from './components/Productper';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path='/' element= {<Home/>}></Route>
       <Route path='/products' element= {<Product/>}></Route>
       <Route path='/products/:id' element= {<Productper/>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
