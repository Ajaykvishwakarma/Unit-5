import React from "react";

function  TodoList({ title, id, status, handleToggle, handleDelete}) {
    
        return (<div id = "list_item"><div><span> {title}</span></div>
    <div>
        <button className = "control_btn" onClick={() => handleToggle(id)}>
            {status ? "TRUE" : "FALSE"}    
        </button>
        <button className = "control_btn" onClick={() => 
         
               handleDelete(id)
             
           
            }>Delete</button>
           </div>
        </div>
        )
    
   
}

export {  TodoList }