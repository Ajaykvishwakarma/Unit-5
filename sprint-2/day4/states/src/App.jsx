import './App.css';
// import { useState } from "react";
import { Todo } from "./components/Glocery";

function App() {
    return (
        <div className="App">
           
            <div id = "container">
            <h1>GLOCERY LIST</h1>
                <Todo />
                </div>
        </div>
    )
}

export default App;
