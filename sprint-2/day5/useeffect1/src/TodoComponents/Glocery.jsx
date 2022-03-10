import React from "react";

import { TodoInput } from "./GroceryInput";

import { TodoList } from "./GroceryList";

import { v4 as uuid } from "uuid";

const axios = require('axios');
function Todo() {
    const [data, setGroceries] = React.useState([]);

    // const handleAdd = (title) => {
    //     const payload = {
    //         title,
    //         status: false,
    //         id:uuid()
    //     }
    //     setGroceries([...data, payload]);

    // }
// console.log(data[0].status)
  
    const handleDelete = (id, status) => {
        // const deletedTodo = data.filter((item) => item.id !== id);
        axios.delete(`http://localhost:3001/grocery`).then(res => {
            setGroceries(res.data)
    })
        // setData(deletedTodo)
        //console.log(status)
}
  

    const handleToggle = (id) => {
        const updatedTodo = data.map( item => 
        item.id === id ? {...item, status: !item.status} : item)
        setGroceries(updatedTodo)
    }
    return (
        
   
        <div>
        <TodoInput />
        {
            data.map((item) => (<TodoList  handleDelete={handleDelete} handleToggle={handleToggle}  key = {item.id} {...item}/>))
        }
        </div>
  
    )

}

export { Todo }