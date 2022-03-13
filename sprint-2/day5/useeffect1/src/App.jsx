// import logo from './logo.svg';
import './App.css';
import { Grocery } from "./components/Grocery";
import { Todo } from "./TodoComponents/Glocery"
// import { TodoInput } from "./TodoComponents/GroceryInput"
function App() {
  return (
    <div className="App">
      <div id = "container">
      <h1>GROCERY LIST</h1>
       {/* <Grocery/> */}
       <Todo/>
       </div>
    </div>
  );
}

export default App;
