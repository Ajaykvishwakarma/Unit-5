import { useState } from "react";

export function Input({ dataHandler }) {

    const [name, setName] = useState("");

    function OnChangeHandler() {
        dataHandler(name)
    }

    return (
        <div>
            <input type="text" onChange={(e) => {
                setName(e.target.value)
            }}/>
            <button onClick={() => {
                OnChangeHandler()
            }}>Add User</button>
        </div>
    )
}