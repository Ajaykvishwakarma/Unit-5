import React from "react";
import { useEffect, useState } from "react";
const axios = require('axios');
function TodoInput({onClick}) {

    const [text, setText] = useState("");

    const [ groceries, setGroceries] = useState([]);
  
    const [page, setPage ] = useState(1);
  

    // const [ title, setTitle ] = React.useState("");


    // axios.delete('https://reqres.in/api/posts/1')
    // .then(() => element.innerHTML = 'Delete successful');



    useEffect(() => {
        getData()
       },[page])
     
       const getData = () => {
         axios.get(`http://localhost:3001/grocery?_limit=3&_page=${page}`).then(res => {
           setGroceries(res.data)
         })
       }

    //  const handleDelete = () => {
    //   console.log("jay")
    //      axios.delete(`http://localhost:3001/grocery?${id}`).then(() => {
    //       getData();
     
    //     });
    //     // setGroceries.splice(id,1)
    //    }
       
    return (
    <div>
        
        <div>
         <input type = "text" onChange={e => setText(e.target.value)}/>
 
         <button  id = "main_btn" onClick = {() => {
             fetch("http://localhost:3001/grocery", {
                 method: "POST",
                 body:JSON.stringify({title : text, purchased : false}),
                 headers : {
                     "content-type" : "application/json"
                 }
             }).then(() => {
               getData();
             });
             onClick(text);
 
             // axios.post("http://localhost:3001/grocery", {title:text, purchased : false})
         }}> save Grocery </button>
            {groceries.map((e,index) => (
             <div id="showDiv">
               <div key = {e.id}>{e.title}</div>
               <div><button onClick={() => {
               
                 }}>Delete</button></div>
             </div>
            ))}  
 
 
         <button onClick= {() => {
           setPage(page - 1);
         }}>Prev</button>
 
         <button onClick= {() => {
           setPage(page + 1);
         }}>Next</button>
     </div>
    
    </div>
    )
}



// function deleteAll(index)
//         {
//             arr.splice(index,1)
//             localStorage.setItem("TaskList", JSON.stringify(arr));
//             toggle(arr)
//         }



// useEffect(() => {
//     getData()
//    },[page])
 
//    const getData = () => {
//      axios.get(`http://localhost:3001/grocery?_limit=3&_page=${page}`).then(res => {
//        setGroceries(res.data)
//      })
//    }
 
 
    
//      return (
//      <div>
//          <input type = "text" onChange={e => setText(e.target.value)}/>
 
//          <button onClick = {() => {
//              fetch("http://localhost:3001/grocery", {
//                  method: "POST",
//                  body:JSON.stringify({title : text, purchased : false}),
//                  headers : {
//                      "content-type" : "application/json"
//                  }
//              }).then(() => {
//                getData();
//              });
 
//              // axios.post("http://localhost:3001/grocery", {title:text, purchased : false})
//          }}> save Grocery </button>
//             {groceries.map((e) => (
//              <div key = {e.id}>{e.title}</div>
//             ))}  
 
 
//          <button onClick= {() => {
//            setPage(page - 1);
//          }}>Prev</button>
 
//          <button onClick= {() => {
//            setPage(page + 1);
//          }}>Next</button>
//      </div>
//     )
//  }
 
 

export { TodoInput }