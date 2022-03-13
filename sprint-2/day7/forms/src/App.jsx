import logo from './logo.svg';
import './App.css';
import   { Forms  } from "./components/Forms";
import {  Show } from "./components/DataShow"

function App() {

  // const [count, setCount ] = useStaet(0);
  // const [bg, setBg] = useState('00ff00')

  return (
    <div className="App">
     
     <Forms/>
     {/* <CheckBox/> */}
     <Show/>
    </div>
  );
}

export default App;
