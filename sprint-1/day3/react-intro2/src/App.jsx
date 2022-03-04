import logo from './logo.svg';
import './App.css';
import React from "react";
import { Counter } from "./components/Counter"



function App() {
   const counter = 0;

  return ( 
    //basic Counter example with props


    // <>
    //   <Counter value={10} />
    //   <Counter value={50} />
    // </>


    // Condition in Counter with props
    <div className='App'>
      <>
        <Counter/>
      </>
    </div>
    
  
    
       
  )
}



export default App;
