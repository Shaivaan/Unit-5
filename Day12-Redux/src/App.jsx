import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter';
import { Todo } from './components/todo';
import { Route, Routes } from 'react-router-dom';
import { Task } from './components/task';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Todo/> */}
      <Routes>
        <Route path='/' element = {<Todo/>}></Route>
        <Route path='/todo/:id' element= {<Task/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
