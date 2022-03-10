import React from "react";

function TodoInput({onClick}) {

    const [ title, setTitle ] = React.useState("");
    return (
    <div>
        <input placeholder = "Add Items.. " value = {title} onChange = {(e) => setTitle(e.target.value)}/>
        <button id = "main_btn" onClick = {() => onClick(title)}> Add To List </button>
    </div>
    )
}

export { TodoInput }