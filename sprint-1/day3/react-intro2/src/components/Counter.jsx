import { useState } from "react"

export function Counter(props) {

    const [counter, setCounter] = useState(0)
    const handleChange = (value) => {
        if(counter + value >= 0)
        {
            setCounter(counter + value);
            console.log(counter)
        } 
      
        
           
        
       
    }
//  console.log(counter)
 
    return (
        <div className="container">
            <div className="data"><h2>Counter : {counter}</h2></div>
            
            <button onClick={() => handleChange(1)}> Increment </button>
            <button onClick={() => handleChange(-1)}> Decrement </button>
            <button onClick={() => handleChange(counter)}> Double </button>
        </div>
    )

   

   
}


// return <h3> Counter : {counter}
// <button onClick={() => {
//     setCounter(counter + 1);
// }}> ADD 1</button>

// <button onClick={() => {
//     setCounter(counter - 1);
// }}> SUB 1</button>
// </h3>
