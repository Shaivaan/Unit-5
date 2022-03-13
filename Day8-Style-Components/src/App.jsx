import logo from './logo.svg';
import './App.css';
import { Button, LinkButton } from './components/button';

function App() {
  return (
    <div className="App">
      <Button>Primary Button</Button><br /><br />
      <LinkButton>Link Button</LinkButton>
    </div>
  );
}

export default App;
