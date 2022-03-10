// import logo from './logo.svg';
import './App.css';
import { Stopwatch } from "./components/Stopwatch";
import { useState }  from "react"
function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <div className='timerDiv'>
      {show ? <Stopwatch /> : ""}

      <button onClick={() => {
        // setShow(!show)

        setShow(show ? false : true)
      }}>{show ? "Hide Timer" : "Show Timer"}</button>
    </div>
    </div>
  );
}

export default App;
