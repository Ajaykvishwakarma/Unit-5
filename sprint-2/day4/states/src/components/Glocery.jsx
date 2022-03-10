import React from "react";

import { TodoInput } from "./GroceryInput";

import { TodoList } from "./GroceryList";

import { v4 as uuid } from "uuid";
function Todo() {
    const [data, setData] = React.useState([]);

    const handleAdd = (title) => {
        const payload = {
            title,
            status: false,
            id:uuid()
        }
        setData([...data, payload]);

    }
// console.log(data[0].status)
  
    const handleDelete = (id, status) => {
        const deletedTodo = data.filter((item) => item.id !== id);
        setData(deletedTodo)
        //console.log(status)
}
  

    const handleToggle = (id) => {
        const updatedTodo = data.map( item => 
        item.id === id ? {...item, status: !item.status} : item)
        setData(updatedTodo)
    }
    return (
        
   
        <div>
        <TodoInput onClick={handleAdd}/>
        {
            data.map((item) => (<TodoList  handleDelete={handleDelete} handleToggle={handleToggle}  key = {item.id} {...item}/>))
        }
        </div>
  
    )

}

export { Todo }